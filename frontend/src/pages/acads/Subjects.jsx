"use client";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { StarBackground } from "../../components/StarBackground";
import {
  FileText,
  PenTool,
  HelpCircle,
  BookMarked,
  Play,
  ExternalLink,
} from "lucide-react";
import subjectsData from "./SubjectsDataCSE"; // ✅ dataset

// ===================== RESOURCE ICONS & LABELS =====================
const resourceIcons = {
  notes: <FileText size={20} />,
  assignments: <PenTool size={20} />,
  pyq: <HelpCircle size={20} />,
  books: <BookMarked size={20} />,
  playlist: <Play size={20} />,
};

const resourceLabels = {
  notes: "Notes",
  assignments: "Assignments",
  pyq: "Previous Year Questions",
  books: "Reference Books",
  playlist: "Video Playlist",
};

// ===================== SUBJECTS PAGE =====================
export default function SubjectsPage() {
  const { branch, semester } = useParams();
  const subjects = subjectsData[branch]?.[semester] || [];
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle

  if (subjects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        No subjects found for {branch?.toUpperCase()} -{" "}
        {semester?.toUpperCase()}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 relative z-10 transition-all duration-300 overflow-auto ${isOpen ? "ml-64" : "ml-20"
          } p-6`}
      >
        <StarBackground />

        {/* ✅ Inline flip-card CSS */}
        <style>{`
.flip-card {
  perspective: 1000px;
  width: 100%;
  height: auto; /* ✅ Let it adjust to content */
  min-height: 320px; /* ✅ Still keep a minimum height */
}

.flip-card {
  perspective: 1000px;
  width: 100%;
  min-height: 360px; /* Slightly bigger base */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  min-height: 360px;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 360px;
  border-radius: 0.75rem;
  backdrop-filter: blur(12px);
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1),
    rgba(168, 85, 247, 0.1)
  );
  border: 1px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* ✅ don't center, start at top */
  padding: 1.5rem;
  color: white;
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.flip-card-back .resources-list {
  flex: 1; /* ✅ take remaining space */
  width: 100%;
  overflow-y: auto; /* ✅ scroll only the list */
  max-height: 220px; /* ✅ limit height */
  padding-right: 0.5rem;
}


        `}</style>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            {branch?.toUpperCase()} - {semester?.toUpperCase()}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Subjects
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Hover on any subject card to explore resources and study materials
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                  <div
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${subject.color} shadow-lg`}
                  >
                    {subject.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{subject.name}</h3>
                  <p className="text-purple-300 text-sm leading-relaxed opacity-80">
                    {subject.description}
                  </p>
                  <div className="mt-6 text-xs text-purple-400 opacity-80 animate-pulse">
                    Hover to explore →
                  </div>
                </div>

                <div className="flip-card-back">
                  <h3 className="text-xl font-bold mb-4">{subject.name} Resources</h3>
                  <div className="w-16 h-0.5 mx-auto bg-purple-400 mb-4"></div>

                  {/* ✅ Scrollable container */}
                  <div className="grid gap-4 text-sm w-full max-h-64 overflow-y-auto pr-2">
                    {Object.entries(subject.resources).map(([key, link]) => (
                      <a
                        key={key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        {resourceIcons[key] || <ExternalLink size={20} />}
                        <span>{resourceLabels[key] || key}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-500/20">
            <p className="text-purple-300 text-sm">
              Select a subject to unlock resources and accelerate your learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
