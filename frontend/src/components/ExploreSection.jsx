"use client";

import { ExternalLink, Github } from "lucide-react";
import "../styles/flipcard.css";
import academicsImg from "../assets/projects/academics.png";
import societyImg from "../assets/projects/societies.png";
import hackathonImg from "../assets/projects/hackathon.png";
import cgpaImg from "../assets/projects/cgpa.png";
import soonImg from "../assets/projects/soon.png";

// Project data
const projects = [
  {
    id: 1,
    title: "Academics Hub",
    description: "A centralized platform for students to access organized study materials including notes, textbooks, and previous year question papers, helping them prepare effectively for exams.",
    image: academicsImg,
    tags: ["Study Materials", "Notes", "Books", "PYQs"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Societies Hub",
    description: "Explore college societies, track activities, and analyze skill-building opportunities. Credits: IGDTUW CITY",
    image: societyImg,
    tags: ["College Societies", "Society Activities", "Skill Building"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Explore Hackathons",
    description: "A platform to discover upcoming hackathons, view detailed event info, track deadlines, and find resources to help students participate and excel in hackathons.",
    image: hackathonImg,
    tags: ["Hackathon Discovery", "Event Tracker", "Hackathon Resources"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "CGPA Calculator",
    description: "A simple and efficient tool for students to calculate their semester-wise CGPA based on course credits and grades. Credits: IGDTUW CGPA Calculator",
    image: cgpaImg,
    tags: ["Education Tool", "CGPA Calculation"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Something awesome is brewing... Stay tuned for surprises that might just make your college life less painful!",
    image: soonImg,
    tags: ["Web App", "Future Feature", "Productivity", "Work In Progress"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "A mysterious project is in the works… Expect the unexpected. Prepare to be mildly impressed.",
    image: soonImg,
    tags: ["Web App", "Future Feature", "Creative Project", "Work In Progress"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Flip card component
const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl }) => {
  return (
    <div className="flip-card w-80 h-60 cursor-pointer">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front flex flex-col items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-t-md mb-2"
          />
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-medium border rounded-full bg-purple-500/10 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back flex flex-col justify-between">
          <p className="text-sm text-center mb-4">{description}</p>
          <div className="flex justify-center gap-6">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  return (
    <section id="explore" className="min-h-screen px-4 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Explore{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
          Features
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
