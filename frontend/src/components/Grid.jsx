"use client"

import { useEffect, useState } from "react"
import { useDashboard } from "../context/DashboardContext"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { getGreeting } from "../lib/getGreeting"
import StarBackground from "../components/StarBackground.jsx"
import { useNavigate } from "react-router-dom"

import bannerImage from "../assets/banner.png"
import bannerLogo from "../assets/banner_logo.png"
import { FaCalendarAlt, FaUniversity } from "react-icons/fa"
import { Assignments, UpcomingDeadlines } from "../components/Assignments"

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
}

// Helper: pick a style for avatar
const getAvatarStyle = (username) => {
  const styles = ["avataaars", "bottts", "micah", "thumbs", "pixel-art"]
  const charSum = username.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return styles[charSum % styles.length]
}

const Grid = () => {
  const { data } = useDashboard()
  const navigate = useNavigate()

  const userName = "there" // Always fallback to "there"

  const [greeting, setGreeting] = useState(getGreeting())
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div className="relative min-h-screen overflow-hidden transition-all duration-300 flex-1">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-900 -z-10" />

      {/* Starry Background */}
      <StarBackground />

      <div className="space-y-6 p-4 custom-850:p-6 relative z-10">
        {/* 🔍 Search + Profile Row */}
        <motion.div
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          {/* Search bar */}
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-300 text-black px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Only avatar, no background or text */}
          <div className="ml-6">
            <img
              src={`https://api.dicebear.com/7.x/${getAvatarStyle(userName)}/svg?seed=${userName}`}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="relative rounded-xl p-8 flex items-center justify-between shadow-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-xl -z-10" />

          {/* Left Side: Date + Greeting */}
          <div className="flex flex-col items-start gap-2 relative z-10">
            <p className="text-sm text-white/80">{today}</p>
            <h2 className="text-2xl font-bold text-white">
              {greeting}, {userName}!
            </h2>
            <p className="text-sm text-white/80">Always stay updated in your student portal</p>
          </div>

          {/* Right Side: Banner illustration */}
          <div className="w-28 h-28 flex-shrink-0 self-end relative z-10">
            <img src={bannerLogo || "/placeholder.svg"} alt="Banner Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* View Timetable */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 p-6 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-purple-700 w-8 h-8" />
              <p className="font-medium text-gray-800">View Timetable</p>
            </div>
            <a href="https://www.igdtuw.ac.in/academics/time-tables" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
                Open
              </button>
            </a>
          </motion.div>

          {/* College Website Login */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 p-6 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FaUniversity className="text-purple-700 w-8 h-8" />
              <p className="font-medium text-gray-800">College Website Login</p>
            </div>
            <a href="https://igdtuw.in/IGDTUW/login" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
                Login
              </button>
            </a>
          </motion.div>
        </div>

        {/* Grid: Coming Soon + Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left Box → Coming Soon */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={10}
            className="bg-white/10 p-6 rounded-xl shadow border flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-white text-xl font-bold mb-2">Coming Soon 🚀</h3>
            <p className="text-purple-200 mb-4">Exciting features are on the way. Stay tuned!</p>
            <button
              onClick={() => navigate("/coming-soon")}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
            >
              Explore
            </button>

            <h3 className="font-bold mb-3 text-black">New Feature</h3>
            <div className="flex gap-3">
              {data.instructors?.map((img, i) => (
                <div key={i}>
                  <p className="font-semibold text-purple-600">Coming soon</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Box → Assignments + Deadlines */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={11}
            className="bg-white/10 p-6 rounded-xl shadow border overflow-y-auto max-h-[500px] space-y-8"
          >
            <h3 className="font-bold mb-3 text-white">Assignment To-do List</h3>
            <Assignments />
            <UpcomingDeadlines />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Grid
