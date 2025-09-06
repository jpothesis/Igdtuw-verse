import { useEffect, useState } from "react";
import { useDashboard } from "../context/DashboardContext";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background.png";
import { getGreeting } from "../lib/getGreeting";
import bannerImage from "../assets/banner.png";

import useAuthStore from "../store/auth"; // ✅ get user info

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
};

const Grid = () => {
  const { data } = useDashboard();
  const { user } = useAuthStore(); // ✅ logged-in user
  const userName = user?.name || "there";

  const [greeting, setGreeting] = useState(getGreeting());
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60 * 1000); // update every minute
    return () => clearInterval(interval);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div
      className="space-y-6 min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Profile info */}
        <div className="ml-6">
          <div className="flex items-center gap-3 bg-gray-300/90 p-3 rounded-xl shadow-md">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-black">{userName}</p>
              <p className="text-xs text-black">3rd year</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="relative rounded-xl p-8 flex items-center justify-between shadow-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/40 rounded-xl -z-10" />

        {/* Left Side: Date + Greeting */}
        <div className="flex flex-col items-start gap-2 relative z-10">
          <p className="text-sm text-white/80">{today}</p>
          <h2 className="text-2xl font-bold text-white">
            {greeting}, {userName}!
          </h2>
          <p className="text-sm text-white/80">
            Always stay updated in your student portal
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="w-28 h-28 flex-shrink-0 self-end relative z-10">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/graduation-cap-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-school-hat-student-objects-pack-icons-4513866.png"
            alt="Graduation cap"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>




      <div>
        <h3 className="text-lg font-bold mb-3 text-white"></h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Timetable Button */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 p-6 rounded-xl flex justify-between items-center"
          >
            <p className="font-medium text-gray-800">View Timetable</p>
            <a
              href="https://your-timetable-link.com" // 🔗 replace with real timetable link
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
                Open
              </button>
            </a>
          </motion.div>

          {/* College Website Login Button */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 p-6 rounded-xl flex justify-between items-center"
          >
            <p className="font-medium text-gray-800">College Website Login</p>
            <a
              href="https://your-college-login.com" // 🔗 replace with actual login link
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
                Login
              </button>
            </a>
          </motion.div>
        </div>
      </div>


      {/* Instructors + Daily Notice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Instructors */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={10}
          className="bg-white/80 p-6 rounded-xl shadow border"
        >
          <h3 className="font-bold mb-3 text-black">Course Instructors</h3>
          <div className="flex gap-3">
            {data.instructors?.map((img, i) => (
              <div key={i} className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={img}
                  alt="instructor"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={11}
          className="bg-white/80 p-6 rounded-xl shadow border"
        >
          <h3 className="font-bold mb-3 text-black">Daily Notice</h3>
          <div className="space-y-4">
            {data.notices?.map((n, i) => (
              <div key={i}>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-gray-600">{n.text}</p>
                <button className="text-purple-600 text-sm mt-1">
                  See more
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
