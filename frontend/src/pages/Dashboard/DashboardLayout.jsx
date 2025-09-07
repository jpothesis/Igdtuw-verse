import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import StarBackground from "../../components/StarBackground.jsx";

const DashboardLayout = ({ children }) => {
  // Default sidebar width when expanded
  const [sidebarWidth, setSidebarWidth] = useState(256); 

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar onWidthChange={setSidebarWidth} />

      {/* Main content */}
      <div
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        {/* Background wrapper */}
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-900">
          {/* Starry background */}
          <StarBackground />

          {/* Page content */}
          <main className="relative z-10 flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
