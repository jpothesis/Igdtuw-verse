import { FileText, PenTool } from "lucide-react";

const subjectsData = {
  cse: {
    sem1: [
      {
        name: "Applied Mathematics",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Applied Physics",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Basics of Electrical Engineering",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Communication Skills",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Web Application Development",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Programming with C",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Foundations of calculus, algebra, and differential equations",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
    ],

    sem2: [
      {
        name: "Mathematics I",
        icon: <FileText size={32} />,
        color: "from-blue-600 to-cyan-500",
        description: "Calculus & Linear Algebra",
        resources: { notes: "#", assignments: "#" },
      },
      {
        name: "Physics",
        icon: <PenTool size={32} />,
        color: "from-green-600 to-emerald-500",
        description: "Mechanics & Waves",
        resources: { notes: "#", assignments: "#" },
      },
      // repeat subjects...
    ],

    sem3: [
      {
        name: "Discrete Structures",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Mathematical foundations of computer science",
        resources: {
          notes: "https://drive.google.com/notes-link",
          assignments: "https://drive.google.com/assignments-link",
          pyq: "https://drive.google.com/pyq-link",
          books: "https://drive.google.com/books-link",
          playlist: "https://youtube.com/playlist-link",
        },
      },
      {
        name: "Introduction to Internet of Things",
        icon: <PenTool size={32} />,
        color: "from-blue-600 to-indigo-600",
        description: "Basics of IoT concepts, architectures, sensors, and real-world applications.",
        resources: {
          notes: "https://drive.google.com/iot-notes",
          assignments: "https://drive.google.com/iot-assignments",
          pyq: "https://drive.google.com/iot-pyq",
          books: "https://drive.google.com/iot-books",
          playlist: "https://youtube.com/iot-playlist",
        },
      },
      {
        name: "Indian Knowledge System",
        icon: <PenTool size={32} />,
        color: "from-green-600 to-teal-600",
        description: "Exploring Indian traditions, philosophies, and knowledge heritage with modern relevance.",
        resources: {
          notes: "https://drive.google.com/iks-notes",
          assignments: "https://drive.google.com/iks-assignments",
          pyq: "https://drive.google.com/iks-pyq",
          books: "https://drive.google.com/iks-books",
          playlist: "https://youtube.com/iks-playlist",
        },
      },
      {
        name: "Design and Analysis of Algorithms",
        icon: <PenTool size={32} />,
        color: "from-purple-600 to-pink-600",
        description: "Algorithm design techniques, complexity analysis, and problem-solving strategies.",
        resources: {
          notes: "https://drive.google.com/daa-notes",
          assignments: "https://drive.google.com/daa-assignments",
          pyq: "https://drive.google.com/daa-pyq",
          books: "https://drive.google.com/daa-books",
          playlist: "https://youtube.com/daa-playlist",
        },
      },
      {
        name: "Operations Management",
        icon: <PenTool size={32} />,
        color: "from-yellow-600 to-orange-600",
        description: "Principles of operations, production planning, quality control, and supply chain management.",
        resources: {
          notes: "https://drive.google.com/om-notes",
          assignments: "https://drive.google.com/om-assignments",
          pyq: "https://drive.google.com/om-pyq",
          books: "https://drive.google.com/om-books",
          playlist: "https://youtube.com/om-playlist",
        },
      },
      {
        name: "Software Engineering",
        icon: <PenTool size={32} />,
        color: "from-red-600 to-pink-600",
        description: "Software development life cycle, project management, design patterns, and testing.",
        resources: {
          notes: "https://drive.google.com/se-notes",
          assignments: "https://drive.google.com/se-assignments",
          pyq: "https://drive.google.com/se-pyq",
          books: "https://drive.google.com/se-books",
          playlist: "https://youtube.com/se-playlist",
        },
      },
    ],

    sem4: [
      {
        name: "Mathematics II",
        icon: <FileText size={32} />,
        color: "from-blue-600 to-cyan-500",
        description: "Advanced calculus & differential equations",
        resources: { notes: "#", assignments: "#" },
      },
      // more subjects...
    ],
  },
};




export default subjectsData;

