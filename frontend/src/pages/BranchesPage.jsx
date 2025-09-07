import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import BranchCard from "@/components/branch-card"

const branches = [
  {
    id: "cse",
    name: "Computer Science and Engineering",
    description: "Core computer science fundamentals, programming, and software development",
    tags: ["Programming", "Algorithms", "Software Engineering"],
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: "cse-ai",
    name: "CSE (Artificial Intelligence)",
    description: "Computer science with specialized focus on AI and machine learning",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "ece",
    name: "Electronics and Communication Engineering",
    description: "Electronics, communication systems, and signal processing",
    tags: ["Electronics", "Communication", "Signal Processing"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "ece-ai",
    name: "ECE (Artificial Intelligence)",
    description: "Electronics engineering with AI and embedded systems focus",
    tags: ["Embedded AI", "IoT", "Smart Systems"],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: "it",
    name: "Information Technology",
    description: "Information systems, database management, and web technologies",
    tags: ["Web Development", "Database", "Networks"],
    gradient: "from-green-600 to-blue-600",
  },
  {
    id: "aiml",
    name: "Artificial Intelligence and Machine Learning",
    description: "Specialized program in AI, ML, and data science technologies",
    tags: ["AI", "Machine Learning", "Data Science"],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "mae",
    name: "Mechanical and Automation Engineering",
    description: "Mechanical engineering with automation and robotics focus",
    tags: ["Robotics", "Automation", "Manufacturing"],
    gradient: "from-orange-600 to-red-600",
  },
]

export default function BranchesPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Choose Your <span className="text-purple-400">Branch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Select your engineering branch to access curated study materials, resources, and academic content tailored
              for your program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
