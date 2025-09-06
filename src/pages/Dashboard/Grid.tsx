import React from "react";
import { useDashboard } from "../../context/DashboardContext";

export const Grid = () => {
  const { data } = useDashboard();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Welcome Banner */}
      <div className="col-span-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-6 flex justify-between items-center shadow-lg">
        <div>
          <p className="text-sm opacity-80">September 4, 2023</p>
          <h2 className="text-2xl font-bold">Welcome back, John!</h2>
          <p className="text-sm">Always stay updated in your student portal</p>
        </div>
        <div className="text-6xl">🎓</div>
      </div>

      {/* Finance Cards */}
      {Object.entries(data.finance).map(([key, value], i) => (
        <div
          key={i}
          className="col-span-12 md:col-span-4 bg-[#1e1e1e] rounded-xl p-6 text-center shadow-md"
        >
          <p className="text-2xl font-bold text-purple-400">${value}</p>
          <p className="text-gray-400 capitalize">{key}</p>
        </div>
      ))}

      {/* Enrolled Courses */}
      <div className="col-span-12 lg:col-span-8">
        <h3 className="text-lg font-bold mb-3">Enrolled Courses</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl flex justify-between items-center"
            >
              <p className="font-medium">{course}</p>
              <button className="px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-400 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Instructors + Daily Notice */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        {/* Instructors */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow">
          <h3 className="font-bold mb-3">Course Instructors</h3>
          <div className="flex gap-3">
            {data.instructors.map((color, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full bg-${color}-400`}
              />
            ))}
          </div>
        </div>

        {/* Notices */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow">
          <h3 className="font-bold mb-3">Daily Notice</h3>
          <div className="space-y-4">
            {data.notices.map((n, i) => (
              <div key={i}>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-gray-400">{n.text}</p>
                <button className="text-purple-400 text-sm mt-1">
                  See more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

