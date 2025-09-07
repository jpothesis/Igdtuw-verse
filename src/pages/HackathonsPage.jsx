import React, { useState } from "react";
import StarBackground from "../components/StarBackground";
import Sidebar from "../components/Sidebar";
import HackathonCard from "../components/HackathonCard";


const hackathons = [
  {
    name: "Major League Hacking",
    description: "The official student hackathon league with events worldwide",
    url: "https://mlh.io/",
    tags: ["Global", "Student", "Official"],
    category: "League",
  },
  {
    name: "Devpost",
    description: "Discover and participate in hackathons, coding competitions, and more",
    url: "https://devpost.com/",
    tags: ["Competitions", "Projects", "Community"],
    category: "Platform",
  },
  {
    name: "HackerEarth",
    description: "Programming challenges, hackathons and hiring challenges",
    url: "https://www.hackerearth.com/challenges/",
    tags: ["Programming", "Challenges", "Hiring"],
    category: "Platform",
  },
  {
    name: "Unstop",
    description: "India's largest platform for competitions and hackathons",
    url: "https://unstop.com/hackathons",
    tags: ["India", "Competitions", "Students"],
    category: "Platform",
  },
  {
    name: "GeeksforGeeks",
    description: "Coding competitions and hackathons for programmers",
    url: "https://www.geeksforgeeks.org/events/",
    tags: ["Coding", "Learning", "Practice"],
    category: "Educational",
  },
  {
    name: "CodeChef",
    description: "Monthly programming contests and hackathons",
    url: "https://www.codechef.com/contests",
    tags: ["Monthly", "Contests", "Programming"],
    category: "Contests",
  },
  {
    name: "Codeforces",
    description: "Programming contests and competitive programming platform",
    url: "https://codeforces.com/contests",
    tags: ["Competitive", "Programming", "Contests"],
    category: "Contests",
  },
  {
    name: "AngelHack",
    description: "Global hackathon series connecting developers worldwide",
    url: "https://angelhack.com/",
    tags: ["Global", "Developers", "Innovation"],
    category: "Series",
  },
  {
    name: "Junction",
    description: "Europe's leading hackathon organizing community",
    url: "https://www.junction.fi/",
    tags: ["Europe", "Community", "Innovation"],
    category: "Community",
  },
];

export default function HackathonsPage() {
  const [isOpen, setIsOpen] = useState(true); // optional sidebar state

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main content */}
      <div
        className={`flex-1 relative z-10 transition-all duration-300 overflow-auto ${
          isOpen ? "ml-64" : "ml-20"
        } p-6`}
      >
        {/* Star Background */}
        <StarBackground />

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Explore <span className="text-purple-500">Hackathons</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Discover amazing hackathons, coding competitions, and innovation challenges from around the world. Join
            the community and showcase your skills!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={index}
              name={hackathon.name}
              description={hackathon.description}
              url={hackathon.url}
              tags={hackathon.tags}
              category={hackathon.category}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Ready to code? Pick a platform and start your hackathon journey!
          </p>
        </div>
      </div>
    </div>
  );
}
