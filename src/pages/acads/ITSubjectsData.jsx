import { FileText, PenTool } from "lucide-react";

const subjectsData = {
  it: {
    sem1: [
      {
        name: "Mathematics I",
        icon: <PenTool size={32} />, // or FileText, BookOpen, etc.
        color: "from-blue-600 to-indigo-600",
        description: "Calculus, Algebra, and Differential Equations",
        resources: {
          notes: "#",       // replace with Google Drive link
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      {
        name: "Programming with Python",
        icon: <PenTool size={32} />,
        color: "from-green-600 to-emerald-500",
        description: "Introduction to programming with C",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      // ... add other semester 1 subjects here
    ],

    sem2: [
      {
        name: "Web Application Development",
        icon: <PenTool size={32} />,
        color: "from-purple-600 to-pink-500",
        description: "Linear and non-linear data structures",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      {
        name: "Communication Skills",
        icon: <FileText size={32} />,
        color: "from-cyan-600 to-blue-500",
        description: "Logic, sets, relations, combinatorics, graphs",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      {
        name: "Applied Physics",
        icon: <FileText size={32} />,
        color: "from-cyan-600 to-blue-500",
        description: "Logic, sets, relations, combinatorics, graphs",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
    ],

    sem3: [
      {
        name: "Artificial Intelligence",
        icon: <PenTool size={32} />,
        color: "from-orange-600 to-red-500",
        description: "Fundamentals of AI, agents, and search techniques",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      {
        name: "Database Management Systems",
        icon: <PenTool size={32} />,
        color: "from-green-600 to-teal-500",
        description: "Relational models, SQL, transactions",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      // ... other semester 3 subjects
    ],

    sem4: [
      {
        name: "Machine Learning",
        icon: <PenTool size={32} />,
        color: "from-pink-600 to-purple-600",
        description: "Supervised, unsupervised, and reinforcement learning",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      {
        name: "Operating Systems",
        icon: <FileText size={32} />,
        color: "from-yellow-600 to-orange-500",
        description: "Processes, threads, memory management, scheduling",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      // ... other semester 4 subjects
    ],

    // continue sem5–sem8 with placeholders
    sem5: [
      {
        name: "Deep Learning",
        icon: <PenTool size={32} />,
        color: "from-indigo-600 to-blue-600",
        description: "Neural networks, CNN, RNN, transformers",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
      // ... more
    ],

    sem6: [
      {
        name: "Natural Language Processing",
        icon: <FileText size={32} />,
        color: "from-teal-600 to-cyan-500",
        description: "Text processing, embeddings, transformers",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
    ],

    sem7: [
      {
        name: "AI Ethics & Policy",
        icon: <PenTool size={32} />,
        color: "from-gray-600 to-gray-900",
        description: "Ethical implications and regulations in AI systems",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
    ],

    sem8: [
      {
        name: "Capstone Project",
        icon: <PenTool size={32} />,
        color: "from-blue-800 to-indigo-900",
        description: "Final year AI project work",
        resources: {
          notes: "#",
          assignments: "#",
          pyq: "#",
          books: "#",
          playlist: "#",
        },
      },
    ],
  },
};

export default subjectsData;
