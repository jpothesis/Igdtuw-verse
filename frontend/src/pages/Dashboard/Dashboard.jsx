import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Grid from "../../components/Grid"; 
import { DashboardProvider } from "../../context/DashboardContext";
import API from "../../api/api";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await API.get("/me"); // 🔹 protected endpoint
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <DashboardProvider>
      <div className="min-h-screen bg-blue-950/5">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Right content */}
        <div className="flex flex-col md:ml-64">
          <main className="flex-1 p-6">
            {/* Grid (your main dashboard content) */}
            <Grid />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
