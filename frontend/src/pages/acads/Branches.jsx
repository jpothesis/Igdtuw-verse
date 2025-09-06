import React from "react";
import Sidebar from "./Sidebar"; 
import { FaRobot, FaCode, FaMicrochip, FaNetworkWired, FaLaptopCode, FaBrain, FaCogs } from "react-icons/fa";

const branches = [
  { name: "CSE AI", icon: <FaRobot size={40} />, color: "from-purple-500 to-indigo-500" },
  { name: "CSE", icon: <FaCode size={40} />, color: "from-pink-500 to-red-500" },
  { name: "ECE", icon: <FaMicrochip size={40} />, color: "from-blue-500 to-cyan-500" },
  { name: "ECE AI", icon: <FaNetworkWired size={40} />, color: "from-green-500 to-emerald-500" },
  { name: "IT", icon: <FaLaptopCode size={40} />, color: "from-orange-500 to-yellow-500" },
  { name: "AIML", icon: <FaBrain size={40} />, color: "from-teal-500 to-sky-500" },
  { name: "MAE", icon: <FaCogs size={40} />, color: "from-fuchsia-500 to-purple-700" },
];

export default function Branches() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar from existing component */}
      <Sidebar />

      {/* Main content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Explore <span className="text-purple-400">Branches</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Choose your branch to explore resources & opportunities
          </p>
        </div>

        <div className="grid gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-gradient-to-br ${branch.color} transform hover:scale-105 transition duration-300 cursor-pointer`}
            >
              <div className="mb-4">{branch.icon}</div>
              <h2 className="text-2xl font-semibold">{branch.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}