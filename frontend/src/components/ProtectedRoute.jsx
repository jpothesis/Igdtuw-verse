// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // 👈 check saved token

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}