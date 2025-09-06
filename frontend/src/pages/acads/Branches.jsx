import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../../components/StarBackground";
import Sidebar from "../../components/Sidebar"; 
import { FaRobot, FaCode, FaMicrochip, FaNetworkWired, FaLaptopCode, FaBrain, FaCogs } from "react-icons/fa";

// ✅ Keep only this branches array
const branches = [
  { name: "CSE AI", icon: <FaRobot size={40} />, color: "from-purple-600 to-indigo-600", description: "Computer Science with AI specialization", path: "/branches/cse-ai/semesters" },
  { name: "CSE", icon: <FaCode size={40} />, color: "from-violet-600 to-purple-600", description: "Core Computer Science Engineering", path: "/branches/cse/semesters" },
  { name: "ECE", icon: <FaMicrochip size={40} />, color: "from-indigo-600 to-blue-600", description: "Electronics & Communication", path: "/branches/ece/semesters" },
  { name: "ECE AI", icon: <FaNetworkWired size={40} />, color: "from-purple-500 to-pink-600", description: "ECE with AI integration", path: "/branches/ece-ai/semesters" },
  { name: "IT", icon: <FaLaptopCode size={40} />, color: "from-blue-600 to-cyan-600", description: "Information Technology", path: "/branches/it/semesters" },
  { name: "AIML", icon: <FaBrain size={40} />, color: "from-fuchsia-600 to-purple-600", description: "Artificial Intelligence & ML", path: "/branches/aiml/semesters" },
  { name: "MAE", icon: <FaCogs size={40} />, color: "from-purple-700 to-indigo-700", description: "Mechanical & Automation", path: "/branches/mae/semesters" },
];

export default function Branches() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`flex-1 relative z-10 transition-all duration-300 overflow-auto ${isOpen ? "ml-64" : "ml-20"} p-6`}>
        <StarBackground />

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Explore <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Engineering</span> Branches
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover your passion and choose the perfect engineering path for your future career
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 cursor-pointer transform hover:scale-105 p-6 rounded-xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(branch.path)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${branch.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {branch.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                  {branch.name}
                </h3>
                <p className="text-purple-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {branch.description}
                </p>
                <div className={`mt-6 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredCard === index ? "animate-pulse" : ""}`}>
                  Click to explore →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-500/20">
            <p className="text-purple-300 text-sm">Choose your path to innovation and excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
