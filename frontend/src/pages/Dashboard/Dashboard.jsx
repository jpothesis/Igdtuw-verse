import { useState, useEffect } from "react";
import Grid from "../../components/Grid"; 
import { DashboardProvider } from "../../context/DashboardContext";
import API from "../../api/api";
import DashboardLayout from "./DashboardLayout"; // ✅ import layout

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await API.get("/me");
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
      <DashboardLayout>
        <Grid />
      </DashboardLayout>
    </DashboardProvider>
  );
};

export default Dashboard;
