"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaCalendarPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// Initial demo data
const initialAssignments = [
  { id: 1, title: "Assignment 1", subject: "Subject", dueDate: "yyyy-mm-dd", status: "pending" },
];

const initialDeadlines = [
  { id: 1, title: "Assignment 1", subject: "Subject", dueDate: "yyyy-mm-dd", priority: "high" },
];

export function AssignmentsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Box → Coming Soon */}
      <ComingSoonBox />

      {/* Right Box → Assignments + Deadlines */}
      <div className="space-y-8">
        <Assignments />
        <UpcomingDeadlines />
      </div>
    </div>
  );
}

function ComingSoonBox() {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center flex flex-col items-center justify-center h-full">
      <h3 className="text-white text-xl font-bold mb-2">Coming Soon 🚀</h3>
      <p className="text-purple-200 mb-4">Exciting features are on the way. Stay tuned!</p>
      <button
        onClick={() => navigate("/coming-soon")}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
      >
        Explore
      </button>
    </div>
  );
}

export function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments);

  const addAssignment = () => {
    const newId = assignments.length + 1;
    const newAssignment = {
      id: newId,
      title: `Assignment ${newId}`,
      subject: "Subject",
      dueDate: "yyyy-mm-dd",
      status: "pending",
    };
    setAssignments([...assignments, newAssignment]);
  };

  const removeAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  const addToGoogleCalendar = (item) => {
    const start = item.dueDate + "T09:00:00";
    const end = item.dueDate + "T10:00:00";
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const url = `${baseUrl}&text=${encodeURIComponent(
      item.title
    )}&dates=${start.replace(/-|:/g, "")}/${end.replace(/-|:/g, "")}&details=${encodeURIComponent(
      item.subject || ""
    )}`;
    window.open(url, "_blank");
  };

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
          className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors flex justify-between items-start"
        >
          <div>
            <h4 className="font-semibold text-white">{assignment.title}</h4>
            <p className="text-purple-100 text-sm">{assignment.subject}</p>
            <p className="text-purple-200 text-sm">{assignment.dueDate}</p>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${
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
              className="text-white text-lg hover:text-red-500 transition"
              title="Remove Assignment"
            >
              <FaTrash />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function UpcomingDeadlines() {
  const [deadlines, setDeadlines] = useState(initialDeadlines);

  const addDeadline = () => {
    const newId = deadlines.length + 1;
    const newDeadline = {
      id: newId,
      title: `Assignment ${newId}`,
      subject: "Subject",
      dueDate: "yyyy-mm-dd",
      priority: "medium",
    };
    setDeadlines([...deadlines, newDeadline]);
  };

  const removeDeadline = (id) => {
    setDeadlines(deadlines.filter((d) => d.id !== id));
  };

  const addToGoogleCalendar = (deadline) => {
    const start = deadline.dueDate + "T09:00:00";
    const end = deadline.dueDate + "T10:00:00";
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const url = `${baseUrl}&text=${encodeURIComponent(
      deadline.title
    )}&dates=${start.replace(/-|:/g, "")}/${end.replace(/-|:/g, "")}&details=${encodeURIComponent(
      deadline.subject || ""
    )}`;
    window.open(url, "_blank");
  };

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
          className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold text-white">{deadline.title}</h4>
            <p className="text-purple-100 text-sm">{deadline.subject}</p>
            <p className="text-purple-200 text-sm">{deadline.dueDate}</p>
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
              className="text-white text-lg hover:text-red-500 transition"
              title="Remove Deadline"
            >
              <FaTrash />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
