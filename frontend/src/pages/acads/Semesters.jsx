import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar"; 
import StarBackground from "../../components/StarBackground";



import {
  FaBookOpen,
  FaLaptopCode,
  FaFlask,
  FaProjectDiagram,
  FaBrain,
  FaRobot,
  FaGraduationCap,
  FaStar,

} from "react-icons/fa";

const semesters = [
  {
    name: "Semester 1",
    icon: <FaBookOpen size={32} />,
    color: "from-purple-600 to-indigo-600",
    description: "Foundational subjects & basics",
  },
  {
    name: "Semester 2",
    icon: <FaLaptopCode size={32} />,
    color: "from-pink-600 to-red-500",
    description: "Programming & core concepts",
  },
  {
    name: "Semester 3",
    icon: <FaFlask size={32} />,
    color: "from-blue-600 to-cyan-500",
    description: "Labs & practical experiments",
  },
  {
    name: "Semester 4",
    icon: <FaProjectDiagram size={32} />,
    color: "from-green-600 to-emerald-500",
    description: "Projects & system design",
  },
  {
    name: "Semester 5",
    icon: <FaBrain size={32} />,
    color: "from-orange-500 to-yellow-500",
    description: "Advanced concepts & AI basics",
  },
  {
    name: "Semester 6",
    icon: <FaRobot size={32} />,
    color: "from-teal-500 to-sky-500",
    description: "Automation & robotics",
  },
  {
    name: "Semester 7",
    icon: <FaGraduationCap size={32} />,
    color: "from-fuchsia-600 to-purple-700",
    description: "Specialization subjects",
  },
  {
    name: "Semester 8",
    icon: <FaStar size={32} />,
    color: "from-indigo-500 to-blue-700",
    description: "Final projects & industry prep",
  },
];

export default function Semesters() {
  const { branch } = useParams();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleNavigate = (index) => {
    const semesterKey = `sem${index + 1}`;
    // Use the new direct route style for consistency
    navigate(`/subjects/${branch}/${semesterKey}`);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className={`flex-1 relative z-10 transition-all duration-300 overflow-auto ${isOpen ? "ml-64" : "ml-20"} p-6`}>
        <StarBackground />

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            {branch?.toUpperCase()}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Semesters
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Choose a semester to explore subjects, projects, and resources
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {semesters.map((semester, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 cursor-pointer transform hover:scale-105 p-6 rounded-xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(`/branches/${branch}/semesters/sem${index + 1}/subjects`)} // 🔗 Navigation added
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${semester.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${semester.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {semester.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                  {semester.name}
                </h3>
                <p className="text-purple-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {semester.description}
                </p>
                <div
                  className={`mt-6 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredCard === index ? "animate-pulse" : ""}`}
                >
                  Click to explore →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-500/20">
            <p className="text-purple-300 text-sm">Select a semester to progress through your academic journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
