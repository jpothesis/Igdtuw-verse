import React from "react";
import { Menu, Bell, Search } from "lucide-react";

type TopBarProps = {
  setSidebarOpen: (val: boolean) => void;
};

const TopBar = ({ setSidebarOpen }: TopBarProps) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-[#121212] border-b border-gray-700 px-6 py-4 flex items-center justify-between">
      {/* Left side: Mobile Menu + Greeting */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu button */}
        <button
          className="md:hidden p-2 rounded-lg bg-[#1f1f1f] hover:bg-purple-600"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={22} />
        </button>

        {/* Greeting + Date */}
        <div>
          <h2 className="text-lg font-bold">Welcome back, John!</h2>
          <p className="text-sm text-gray-400">{today}</p>
        </div>
      </div>

      {/* Right side: Search + Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1f1f1f] text-sm px-4 py-2 rounded-lg outline-none w-64 focus:ring-2 focus:ring-purple-500"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-lg bg-[#1f1f1f] hover:bg-purple-600 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>

        {/* Profile Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center font-bold">
          J
        </div>
      </div>
    </header>
  );
};

export default TopBar;
