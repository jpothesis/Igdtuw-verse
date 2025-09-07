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
    description: "Smart resume generator with AI-powered suggestions...",
    image: academicsImg,
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Societies",
    description:
      "Interactive analytics dashboard that provides career insights, skill-gap analysis, and salary trends.",
    image: societyImg,
    tags: ["Next.js", "TypeScript", "D3.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Explore Hackathons",
    description:
      "Virtual AI interviewer providing real-time feedback, suggestions, and confidence-building tips.",
    image: hackathonImg,
    tags: ["React", "OpenAI", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "CGPA Calculator",
    description:
      "AI-powered course recommendation engine tailored to your career goals and interests.",
    image: cgpaImg,
    tags: ["Python", "Flask", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Coming Soon",
    description:
      "Track saved jobs, application progress, and receive smart reminders during your job hunt.",
    image: soonImg,
    tags: ["MongoDB", "Express", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Coming Soon",
    description:
      "Personal portfolio showcasing projects, skills, and interactive 3D elements.",
    image: soonImg,
    tags: ["React", "Three.js", "TailwindCSS"],
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

// Projects page
const ProjectsSection = () => {
  return (
    <div id="explore" className="min-h-screen px-4 py-20 text-white">
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
    </div>
  );
};

export default ProjectsSection;
