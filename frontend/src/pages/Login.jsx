"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarBackground from "../components/StarBackground.jsx"; // ✅ no curly braces


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok && data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden px-4 sm:px-6">
      {/* Starry Background */}
      <StarBackground />

      {/* Transparent Login Card */}
      <div
        className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl
                   bg-gradient-to-br from-purple-800/40 via-purple-600/30 to-purple-800/40
                   backdrop-blur-lg border border-white/20 shadow-xl"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-white tracking-wide drop-shadow-lg">
          Sign In
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-400 transition"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-400 transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 w-full bg-gradient-to-r from-purple-500 to-purple-700 
                       text-white py-2 rounded-lg font-semibold 
                       hover:from-purple-400 hover:to-purple-600 
                       shadow-lg hover:shadow-purple-500/40 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
