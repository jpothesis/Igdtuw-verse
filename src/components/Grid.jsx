import { useDashboard } from "../context/DashboardContext";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background.png"; // import your image

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
              <p className="text-sm font-semibold text-black">John Doe</p>
              <p className="text-xs text-black">3rd year</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Welcome Banner with gradient glow */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="relative bg-gradient-to-r from-purple-800 to-blue-950 rounded-xl p-6 flex justify-between items-center shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-400/40 to-purple-700/40 blur-2xl rounded-xl -z-10" />
        <div>
          <p className="text-sm opacity-80 text-white">September 4, 2023</p>
          <h2 className="text-2xl font-bold text-white">Welcome back, John!</h2>
          <p className="text-sm text-white/90">
            Always stay updated in your student portal
          </p>
        </div>
        <div className="text-6xl">🎓</div>
      </motion.div>

      {/* Finance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.finance &&
          Object.entries(data.finance).map(([key, value], i) => (
            <motion.div
              key={i}
              custom={i + 2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white/80 rounded-xl p-6 text-center shadow-md border"
            >
              <p className="text-2xl font-bold text-purple-600">${value}</p>
              <p className="text-gray-600 capitalize">{key}</p>
            </motion.div>
          ))}
      </div>

      {/* Enrolled Courses */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-white">Enrolled Courses</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.courses?.map((course, idx) => (
            <motion.div
              key={idx}
              custom={idx + 5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 p-6 rounded-xl flex justify-between items-center"
            >
              <p className="font-medium text-gray-800">{course}</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
                View
              </button>
            </motion.div>
          ))}
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
                <button className="text-purple-600 text-sm mt-1">See more</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
