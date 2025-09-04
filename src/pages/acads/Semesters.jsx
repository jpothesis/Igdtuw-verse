import React from "react";
import { FaBookOpen, FaLaptopCode, FaFlask, FaProjectDiagram, FaBrain, FaRobot, FaGraduationCap, FaStar } from "react-icons/fa";
import { StarBackground } from "../components/StarBackground"; // reuse your meteor background

const semesters = [
  { name: "Semester 1", icon: <FaBookOpen size={40} />, color: "from-purple-500 to-indigo-500" },
  { name: "Semester 2", icon: <FaLaptopCode size={40} />, color: "from-pink-500 to-red-500" },
  { name: "Semester 3", icon: <FaFlask size={40} />, color: "from-blue-500 to-cyan-500" },
  { name: "Semester 4", icon: <FaProjectDiagram size={40} />, color: "from-green-500 to-emerald-500" },
  { name: "Semester 5", icon: <FaBrain size={40} />, color: "from-orange-500 to-yellow-500" },
  { name: "Semester 6", icon: <FaRobot size={40} />, color: "from-teal-500 to-sky-500" },
  { name: "Semester 7", icon: <FaGraduationCap size={40} />, color: "from-fuchsia-500 to-purple-700" },
  { name: "Semester 8", icon: <FaStar size={40} />, color: "from-indigo-500 to-blue-700" },
];

export default function Semesters() {
  return (
    <section className="relative min-h-screen bg-black text-white py-16 overflow-hidden">
      {/* 🌠 Meteor + stars background */}
      <StarBackground />

      {/* Page content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Explore <span className="text-purple-400">Semesters</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Choose a semester to access resources & subjects
          </p>
        </div>

        <div className="grid gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {semesters.map((semester, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-gradient-to-br ${semester.color} transform hover:scale-105 transition duration-300 cursor-pointer`}
            >
              <div className="mb-4">{semester.icon}</div>
              <h2 className="text-2xl font-semibold">{semester.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}