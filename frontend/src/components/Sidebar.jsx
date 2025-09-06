import {
  LayoutDashboard,
  CreditCard,
  Pencil,
  BookOpen,
  XCircle,
  FileCheck,
  MessageSquare,
  Calendar,
  LogOut,
  GraduationCap,
} from "lucide-react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Menu items for sidebar
const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/Dashboard" },
  { name: "Academics Hub", icon: <LayoutDashboard size={20} />, to: "/branches" },

  { name: "Societies", icon: <CreditCard size={20} />, to: "/societies" },

  { name: "Explore Hackathons", icon: <Pencil size={20} />, to: "/hackathons" },

  { name: "CGPA Calculator", icon: <BookOpen size={20} />, to: "/cgpa-calculator" },
  { name: "Syllabus", icon: <FileCheck size={20} />, to: "/Syllabus" },
  { name: "Career Ladder", icon: <XCircle size={20} />, to: "/Career Ladder" },


];

// Animation variants for menu items
const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 h-screen w-64 z-50 bg-gradient-to-b from-purple-900 to-blue-950 text-white flex flex-col justify-between rounded-r-3xl shadow-2xl overflow-hidden"
    >
      {/* Logo */}
      <div className="flex flex-col items-center py-8">
        <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-3 px-6 mt-4">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-white ${isActive
                  ? "bg-gradient-to-r from-purple-800 via-purple-500 to-purple-600 shadow-lg"
                  : "hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 hover:shadow-md"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Logout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: menuItems.length * 0.1 }}
        className="px-6 py-6"
      >
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 hover:shadow-lg hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 transition-all duration-300"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
