import React, { createContext, useContext, useState } from "react";

// Create context
const DashboardContext = createContext();

// Provider
export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState({
    finance: { payable: 10000, paid: 5000, others: 300 },
    courses: ["Object Oriented Programming", "DBMS"],
    instructors: ["red", "blue", "green"],
    notices: [
      { title: "Prelim payment due", text: "Sorem ipsum dolor sit amet..." },
      { title: "Exam schedule", text: "Nunc vulputate libero et velit..." },
    ],
    recentActivities: [
      { description: "Paid Tuition Fee", timestamp: new Date().toISOString() },
      { description: "Registered for OOP", timestamp: new Date().toISOString() },
    ],
  });

  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Hook to use context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
