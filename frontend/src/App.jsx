import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import CgpaCalculatorPage from "./pages/CgpaCalculatorPage.jsx";
import SocietiesPage from "./pages/SocietiesPage.jsx";
import Branches from "./pages/acads/Branches.jsx";
import Semesters from "./pages/acads/Semesters.jsx";
import SubjectsPage from "./pages/acads/Subjects.jsx";
import HackathonsPage from "./pages/HackathonsPage.jsx";
import ComingSoon from "./pages/comingSoon.jsx";




// Components

import { Toaster } from "@/components/ui/Toaster";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cgpa-calculator" element={<CgpaCalculatorPage />} />
          <Route path="/societies" element={<SocietiesPage />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/:branch/semesters" element={<Semesters />} />
          <Route
            path="/branches/:branch/semesters/:semester/subjects"
            element={<SubjectsPage />}
          />
          <Route path="/hackathons" element={<HackathonsPage />} />
          <Route path="/career-ladder" element={<ComingSoon />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;