import { createContext, useContext, useState, ReactNode } from "react";

type Activity = {
  description: string;
  timestamp: string;
};

type DashboardData = {
  finance: {
    payable: number;
    paid: number;
    others: number;
  };
  courses: string[];
  instructors: string[];
  notices: { title: string; text: string }[];
  recentActivities: Activity[];
};

type DashboardContextType = {
  data: DashboardData;
  setData: (val: DashboardData) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DashboardData>({
    finance: {
      payable: 10000,
      paid: 5000,
      others: 300,
    },
    courses: ["Object Oriented Programming", "Fundamentals of Database Systems"],
    instructors: ["red", "blue", "green"], // placeholder avatar colors
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

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
