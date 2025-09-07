"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // <-- import Link
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Explore", href: "#explore" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="IGDTUW Logo" className="h-10 w-10 mr-2" />
            <h1 className="text-white text-xl font-bold">IGDTUW Verse</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="text-white hover:text-purple-200 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-white text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-200 p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple-700 border-t border-purple-500"
          >
            <div className="px-4 py-4 space-y-3 max-w-sm mx-auto">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-purple-200 hover:bg-purple-600 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-3 border-t border-purple-500">
                <Link
                  to="/login"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="w-full bg-white text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
