import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Grid } from "./Grid";
import { DashboardProvider } from "../../context/DashboardContext";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] text-white">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="flex-1 flex flex-col">
          <TopBar setSidebarOpen={setSidebarOpen} />
          <div className="px-6 py-4 space-y-6">
            <Grid />
          </div>
        </main>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
