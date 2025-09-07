"use client"

import { LayoutDashboard, CreditCard, Pencil, BookOpen, XCircle, FileCheck, LogOut } from "lucide-react"
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/Dashboard" },
  { name: "Academics Hub", icon: <LayoutDashboard size={20} />, to: "/branches" },
  { name: "Societies", icon: <CreditCard size={20} />, to: "/societies" },
  { name: "Explore Hackathons", icon: <Pencil size={20} />, to: "/hackathons" },
  { name: "CGPA Calculator", icon: <BookOpen size={20} />, to: "/cgpa-calculator" },
  { name: "Syllabus", icon: <FileCheck size={20} />, to: "/coming-soon" },
  { name: "Career Ladder", icon: <XCircle size={20} />, to: "/career-ladder" },

]

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
}

const Sidebar = ({ onWidthChange }) => {
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 850)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const shouldExpand = !isCollapsed || isHovered
  const width = shouldExpand ? 256 : 80

  // report current width to parent
  useEffect(() => {
    if (onWidthChange) onWidthChange(width)
  }, [width, onWidthChange])

  return (
    <motion.aside
      animate={{ width }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 h-screen z-50 bg-gradient-to-b from-purple-900 to-blue-950 text-white flex flex-col justify-between rounded-r-3xl shadow-2xl overflow-hidden"
      onMouseEnter={() => isCollapsed && setIsHovered(true)}
      onMouseLeave={() => isCollapsed && setIsHovered(false)}
    >
      {/* Logo */}
      <div className="flex flex-col items-center py-8">
        <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className={`object-contain transition-all duration-300 ${shouldExpand ? "w-12 h-12" : "w-8 h-8"}`}
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-3 px-3 mt-4">
        {menuItems.map((item, i) => (
          <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-white relative group ${
                  isActive
                    ? "bg-gradient-to-r from-purple-800 via-purple-500 to-purple-600 shadow-lg"
                    : "hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 hover:shadow-md"
                }`
              }
              title={!shouldExpand ? item.name : undefined}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <motion.span
                initial={false}
                animate={{
                  opacity: shouldExpand ? 1 : 0,
                  width: shouldExpand ? "auto" : 0,
                }}
                transition={{ duration: 0.2 }}
                className={`whitespace-nowrap overflow-hidden ${shouldExpand ? "block" : "hidden"}`}
              >
                {item.name}
              </motion.span>

              {!shouldExpand && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-6">
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn")
            navigate("/")
          }}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 hover:shadow-lg hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 transition-all duration-300 relative group"
          title={!shouldExpand ? "Logout" : undefined}
        >
          <div className="flex-shrink-0">
            <LogOut size={20} />
          </div>
          <motion.span
            initial={false}
            animate={{
              opacity: shouldExpand ? 1 : 0,
              width: shouldExpand ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className={`whitespace-nowrap overflow-hidden ${shouldExpand ? "block" : "hidden"}`}
          >
            Logout
          </motion.span>
          {!shouldExpand && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Logout
            </div>
          )}
        </button>
      </div>
    </motion.aside>
  )
}

export default Sidebar
