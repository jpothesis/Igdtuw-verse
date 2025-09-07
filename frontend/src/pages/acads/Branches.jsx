"use client"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import StarBackground from "../../components/StarBackground"
import Sidebar from "../../components/Sidebar"
import {
  FaRobot,
  FaCode,
  FaMicrochip,
  FaNetworkWired,
  FaLaptopCode,
  FaBrain,
  FaCogs,
} from "react-icons/fa"

const branches = [
  {
    name: "CSE AI",
    icon: <FaRobot size={40} />,
    color: "from-purple-600 to-indigo-600",
    description: "Computer Science with AI specialization",
    path: "/branches/cse-ai/semesters",
  },
  {
    name: "CSE",
    icon: <FaCode size={40} />,
    color: "from-violet-600 to-purple-600",
    description: "Core Computer Science Engineering",
    path: "/branches/cse/semesters",
  },
  {
    name: "ECE",
    icon: <FaMicrochip size={40} />,
    color: "from-indigo-600 to-blue-600",
    description: "Electronics & Communication",
    path: "/branches/ece/semesters",
  },
  {
    name: "ECE AI",
    icon: <FaNetworkWired size={40} />,
    color: "from-purple-500 to-pink-600",
    description: "ECE with AI integration",
    path: "/branches/ece-ai/semesters",
  },
  {
    name: "IT",
    icon: <FaLaptopCode size={40} />,
    color: "from-blue-600 to-cyan-600",
    description: "Information Technology",
    path: "/branches/it/semesters",
  },
  {
    name: "AIML",
    icon: <FaBrain size={40} />,
    color: "from-fuchsia-600 to-purple-600",
    description: "Artificial Intelligence & ML",
    path: "/branches/aiml/semesters",
  },
  {
    name: "MAE",
    icon: <FaCogs size={40} />,
    color: "from-purple-700 to-indigo-700",
    description: "Mechanical & Automation",
    path: "/branches/mae/semesters",
  },
]

export default function Branches() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
<div
  className={`flex-1 relative z-10 transition-all duration-300 overflow-auto 
    p-4 sm:p-6 ${isOpen ? "lg:ml-64" : "lg:ml-30"}`} // slightly bigger gap
>


        <StarBackground />

        {/* Content wrapper with consistent spacing */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-6xl font-bold">
              Explore{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Engineering
              </span>{" "}
              Branches
            </h1>
            <p className="text-base sm:text-xl text-purple-200 max-w-2xl mx-auto">
              Discover your passion and choose the perfect engineering path for your future career
            </p>
          </div>

          {/* Branch Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-black/20 backdrop-blur-sm 
                  hover:bg-black/30 transition-all duration-500 cursor-pointer 
                  transform hover:scale-105 p-4 sm:p-6 rounded-xl"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(branch.path)}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${branch.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {branch.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {branch.name}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-300 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {branch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-500/20">
              <p className="text-purple-300 text-sm sm:text-base">
                Choose your path to innovation and excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
