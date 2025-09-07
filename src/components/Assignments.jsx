"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaPlus, FaCalendarPlus, FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

// Demo Data
const initialAssignments = [
  { id: 1, title: "Assignment 1", subject: "Subject", dueDate: "yyyy-mm-dd", status: "pending" },
]

const initialDeadlines = [
  { id: 1, title: "Assignment 1", subject: "Subject", dueDate: "yyyy-mm-dd", priority: "high" },
]

export function AssignmentsPage() {
  return (
    <div className="min-h-screen p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 
      bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900">
      {/* Left Box → Coming Soon */}
      <ComingSoonBox />

      {/* Right Column → Assignments + Deadlines + Resources */}
      <div className="space-y-8">
        <Assignments />
        <UpcomingDeadlines />
        <StudyResourcesBox />
      </div>
    </div>
  )
}

function ComingSoonBox() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
      className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg 
      flex flex-col items-center justify-center h-full border border-purple-400/30"
    >
      <h3 className="text-xl font-bold mb-2">Coming Soon 🚀</h3>
      <p className="mb-4 text-purple-100">Exciting features are on the way. Stay tuned!</p>
      <button
        onClick={() => navigate("/coming-soon")}
        className="px-4 py-2 bg-white text-purple-700 rounded-lg font-semibold 
        hover:bg-gray-200 transition"
      >
        Explore
      </button>
    </motion.div>
  )
}

export function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments)

  const addAssignment = () => {
    const newId = assignments.length + 1
    const newAssignment = {
      id: newId,
      title: `Assignment ${newId}`,
      subject: "Subject",
      dueDate: "yyyy-mm-dd",
      status: "pending",
    }
    setAssignments([...assignments, newAssignment])
  }

  const removeAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id))
  }

  const addToGoogleCalendar = (item) => {
    const start = item.dueDate + "T09:00:00"
    const end = item.dueDate + "T10:00:00"
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    const url = `${baseUrl}&text=${encodeURIComponent(
      item.title,
    )}&dates=${start.replace(/-|:/g, "")}/${end.replace(/-|:/g, "")}&details=${encodeURIComponent(item.subject || "")}`
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-3 text-white text-lg">Current Assignments</h3>
        <button
          onClick={addAssignment}
          className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
        >
          <FaPlus /> Add
        </button>
      </div>

      {assignments.map((assignment, index) => (
        <motion.div
          key={assignment.id}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={index}
          className="bg-gradient-to-r from-purple-700/70 to-indigo-800/70 backdrop-blur-sm 
          p-4 rounded-xl border border-purple-400/20 hover:from-purple-600/70 hover:to-indigo-700/70 
          transition-colors flex justify-between items-start shadow-md"
        >
          <div>
            <h4 className="font-semibold text-white">{assignment.title}</h4>
            <p className="text-purple-200 text-sm">{assignment.subject}</p>
            <p className="text-purple-300 text-sm">{assignment.dueDate}</p>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs ${
                assignment.status === "completed"
                  ? "bg-green-500/20 text-green-200"
                  : assignment.status === "in-progress"
                  ? "bg-yellow-500/20 text-yellow-200"
                  : "bg-red-500/20 text-red-200"
              }`}
            >
              {assignment.status}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => addToGoogleCalendar(assignment)}
              className="text-white text-lg hover:text-yellow-300 transition"
              title="Add to Google Calendar"
            >
              <FaCalendarPlus />
            </button>
            <button
              onClick={() => removeAssignment(assignment.id)}
              className="text-white text-lg hover:text-red-400 transition"
              title="Remove Assignment"
            >
              <FaTrash />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function UpcomingDeadlines() {
  const [deadlines, setDeadlines] = useState(initialDeadlines)

  const addDeadline = () => {
    const newId = deadlines.length + 1
    const newDeadline = {
      id: newId,
      title: `Assignment ${newId}`,
      subject: "Subject",
      dueDate: "yyyy-mm-dd",
      priority: "medium",
    }
    setDeadlines([...deadlines, newDeadline])
  }

  const removeDeadline = (id) => {
    setDeadlines(deadlines.filter((d) => d.id !== id))
  }

  const addToGoogleCalendar = (deadline) => {
    const start = deadline.dueDate + "T09:00:00"
    const end = deadline.dueDate + "T10:00:00"
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    const url = `${baseUrl}&text=${encodeURIComponent(
      deadline.title,
    )}&dates=${start.replace(/-|:/g, "")}/${end.replace(/-|:/g, "")}&details=${encodeURIComponent(deadline.subject || "")}`
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-3 text-white text-lg">Upcoming Deadlines</h3>
        <button
          onClick={addDeadline}
          className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
        >
          <FaPlus /> Add
        </button>
      </div>

      {deadlines.map((deadline, index) => (
        <motion.div
          key={deadline.id}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={index}
          className="bg-gradient-to-r from-purple-700/70 to-indigo-800/70 backdrop-blur-sm 
          p-4 rounded-xl border border-purple-400/20 hover:from-purple-600/70 hover:to-indigo-700/70 
          transition-colors flex justify-between items-center shadow-md"
        >
          <div>
            <h4 className="font-semibold text-white">{deadline.title}</h4>
            <p className="text-purple-200 text-sm">{deadline.subject}</p>
            <p className="text-purple-300 text-sm">{deadline.dueDate}</p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs ${
                deadline.priority === "high"
                  ? "bg-red-500/20 text-red-200"
                  : "bg-yellow-500/20 text-yellow-200"
              }`}
            >
              {deadline.priority}
            </span>
            <button
              onClick={() => addToGoogleCalendar(deadline)}
              className="text-white text-lg hover:text-yellow-300 transition"
              title="Add to Google Calendar"
            >
              <FaCalendarPlus />
            </button>
            <button
              onClick={() => removeDeadline(deadline.id)}
              className="text-white text-lg hover:text-red-400 transition"
              title="Remove Deadline"
            >
              <FaTrash />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function StudyResourcesBox() {
  const studyResources = [
    { id: 1, title: "Study Notes", description: "Access your saved study materials", icon: "📚" },
    { id: 2, title: "Practice Tests", description: "Take mock exams and quizzes", icon: "📝" },
    { id: 3, title: "Video Lectures", description: "Watch recorded class sessions", icon: "🎥" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-3 text-white text-lg">Study Resources</h3>
        <button className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition">
          <FaPlus /> Add
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {studyResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={index}
            className="bg-gradient-to-br from-purple-500/80 to-pink-500/80 
            backdrop-blur-sm p-4 rounded-xl border border-pink-300/40 
            hover:from-purple-400/90 hover:to-pink-400/90 
            shadow-lg transition-colors cursor-pointer text-center"
          >
            <div className="text-2xl mb-2">{resource.icon}</div>
            <h4 className="font-semibold text-white mb-1">{resource.title}</h4>
            <p className="text-purple-100 text-sm">{resource.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

