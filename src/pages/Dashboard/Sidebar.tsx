import React from "react";
import { Home, BookOpen, Users, FileText, Settings } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const menuItems = [
  { name: "Dashboard", icon: <Home size={20} />, to: "/dashboard" },
  { name: "Courses", icon: <BookOpen size={20} />, to: "/courses" },
  { name: "Instructors", icon: <Users size={20} />, to: "/instructors" },
  { name: "Finance", icon: <FileText size={20} />, to: "/finance" },
  { name: "Settings", icon: <Settings size={20} />, to: "/settings" },
];

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#1a1a1a] shadow-xl transition-transform duration-300 md:translate-x-0`}
    >
      {/* Brand / Logo */}
      <div className="px-6 py-6 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl font-bold text-purple-400">IGDTUW_Verse</h1>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          ✖
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.to}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition"
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

