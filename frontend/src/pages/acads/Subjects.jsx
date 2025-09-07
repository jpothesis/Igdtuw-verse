"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import StarBackground from "../../components/StarBackground";
import { ExternalLink } from "lucide-react";
import subjectsMapping from "../../data/SubjectMapping";

export default function SubjectsPage() {
  const params = useParams();
  const [subjects, setSubjects] = useState([]);
  const [materials, setMaterials] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true); // sidebar toggle

  // Normalize branch & semester
  const availableBranches = Object.keys(subjectsMapping);
  const normalizeForMatch = (str) => str?.toLowerCase().replace(/[-_]/g, "");
  const branchKey =
    availableBranches.find((b) => normalizeForMatch(b) === normalizeForMatch(params.branch)) || "";
  const semesterKey = params.semester ? "SEM" + params.semester.replace(/\D/g, "") : "";

  // Resource labels & icons
  const resourceLabels = {
    pdf: "PDF Document",
    ppt: "Presentation",
    video: "Video",
    doc: "Document",
    books: "Books",
    notes: "Notes",
    pyqs: "Previous Year Questions",
    assignments: "Assignments",
    default: "Resource",
  };

  const resourceIcons = {
    pdf: "📄",
    ppt: "📊",
    video: "🎥",
    doc: "📝",
    books: "📚",
    notes: "📝",
    pyqs: "📄",
    assignments: "🗂️",
    default: "📁",
  };

  useEffect(() => {
    const semSubjects = subjectsMapping[branchKey]?.[semesterKey] || [];
    if (semSubjects.length === 0) {
      setLoading(false);
      return;
    }

    // Initialize subjects with empty resources
    const initialSubjects = semSubjects.map((sub) => ({
      name: typeof sub === "string" ? sub : sub.name,
      resources: {},
    }));
    setSubjects(initialSubjects);

    // Fetch materials from backend
    const fetchMaterials = async () => {
      try {
        const token = localStorage.getItem("token");
        const subjectNames = semSubjects.map((s) => (typeof s === "string" ? s : s.name));

        const res = await fetch("http://localhost:5000/api/materials/batch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ subjects: subjectNames }),
        });

        const data = await res.json();
        console.log("Materials from backend:", data);

        const mappedSubjects = semSubjects.map((s) => {
          const name = typeof s === "string" ? s : s.name;
          const base = typeof s === "object" ? s : { name };
          return {
            ...base,
            resources: data?.[name] || {},
          };
        });

        setSubjects(mappedSubjects);
        setMaterials(data || {});
        setLoading(false);
      } catch (err) {
        console.error("Error fetching materials:", err);
        setMaterials({});
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [branchKey, semesterKey]);

  if (loading) {
    return <div className="p-8 text-center">Loading subjects...</div>;
  }

  if (!subjects || subjects.length === 0) {
    return (
      <div className="p-8 text-center">
        No subjects found for {branchKey} - {semesterKey}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

<div className={`flex-1 relative z-10 transition-all duration-300 overflow-auto p-4 sm:p-6
  ${isOpen ? "sm:ml-64 ml-0" : "sm:ml-20 ml-0"}`}>

        <StarBackground />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-6xl font-bold mb-4">
            {branchKey?.toUpperCase()} - {semesterKey?.toUpperCase()}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Subjects
            </span>
          </h1>
          <p className="text-base sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Hover on any subject card to explore resources and study materials
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subjects.map((subject, index) => {
            const subj = typeof subject === "string" ? { name: subject, resources: {} } : subject;
            const resources = subj.resources || {};

            return (
              <div key={index} className="flip-card w-full">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front p-4 sm:p-6 rounded-xl bg-black/20 backdrop-blur-sm shadow-lg flex flex-col items-center text-center">
                    <div
                      className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${
                        subj.color || "from-purple-600 to-indigo-600"
                      } shadow-lg flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20`}
                    >
                      {subj.icon || <span className="text-lg font-semibold">{subj.name.charAt(0)}</span>}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{subj.name}</h3>
                    {subj.description && (
                      <p className="text-sm sm:text-base text-purple-300 mb-2">{subj.description}</p>
                    )}
                    <div className="mt-4 text-xs sm:text-sm text-purple-400 animate-pulse">Hover to explore →</div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back p-4 sm:p-6 rounded-xl bg-black/20 backdrop-blur-sm shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-4">{subj.name} Resources</h3>
                    <div className="w-16 h-0.5 mx-auto bg-purple-400 mb-4"></div>
                    <div className="grid gap-4 text-sm w-full max-h-64 overflow-y-auto pr-2">
                      {Object.keys(resources).length === 0 ? (
                        <div className="text-center text-sm text-purple-300">No resources available</div>
                      ) : (
                        Object.entries(resources).map(([key, linkOrLinks]) =>
                          Array.isArray(linkOrLinks)
                            ? linkOrLinks.map((link, idx) => (
                                <a
                                  key={`${key}-${idx}`}
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                  <span className="text-lg">{resourceIcons[key] || resourceIcons.default}</span>
                                  <span>{resourceLabels[key] || key}</span>
                                  <ExternalLink size={16} className="ml-auto" />
                                </a>
                              ))
                            : (
                              <a
                                key={key}
                                href={linkOrLinks}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                              >
                                <span className="text-lg">{resourceIcons[key] || resourceIcons.default}</span>
                                <span>{resourceLabels[key] || key}</span>
                                <ExternalLink size={16} className="ml-auto" />
                              </a>
                            )
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-block px-4 sm:px-6 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-500/20">
            <p className="text-purple-300 text-sm sm:text-base">
              Select a subject to unlock resources and accelerate your learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
