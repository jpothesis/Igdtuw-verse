import { BrowserRouter, Route, Routes } from "react-router-dom";
import CgpaCalculatorPage from "./pages/CgpaCalculatorPage";
import SocietiesPage from "./pages/SocietiesPage";  
// Pages
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"; // ✅ dashboard page

// Components
import { Toaster } from "./components/ui/Toaster";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // ✅ wrapper for auth check

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