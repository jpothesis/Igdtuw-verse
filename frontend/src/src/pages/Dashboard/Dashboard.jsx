import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Grid from "../../components/Grid"; // make sure this is Grid.jsx
import { DashboardProvider } from "../../context/DashboardContext"; // make sure this is DashboardContext.jsx

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // Wrap the whole dashboard with DashboardProvider
    <DashboardProvider>
      <div className="min-h-screen bg-blue-950/5">
        {/* Fixed curved sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Right column is shifted by sidebar width on md+ */}
        <div className="flex flex-col md:ml-64">
          <main className="flex-1 p-6">


            {/* Grid now has access to DashboardContext */}
            <Grid />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
