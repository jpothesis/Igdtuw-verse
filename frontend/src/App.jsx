import { BrowserRouter, Route, Routes } from "react-router-dom";
import CgpaCalculatorPage from "./pages/CgpaCalculatorPage";
import SocietiesPage from "./pages/SocietiesPage";  
import Branches from "./pages/acads/Branches.jsx";
import Semesters from "./pages/acads/Semesters";
import HackathonsPage from "./pages/HackathonsPage";
import SubjectsPage from "./pages/acads/Subjects"; // match the file name exactly
 

// Pages
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"; 

// Components

import { Toaster } from "@/components/ui/Toaster";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; 


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cgpa-calculator" element={<CgpaCalculatorPage />} />
          <Route path="/societies" element={<SocietiesPage />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/:branch/semesters" element={<Semesters />} />
          <Route path="/hackathons" element={<HackathonsPage />} />
<Route 
  path="/branches/:branch/semesters/:semester/subjects" 
  element={<SubjectsPage />} 
/>



          {/* Protected dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;