import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Starry Background */}
      <StarBackground />

      {/* Transparent Login Card */}
      <div
        className="relative z-10 w-96 p-8 rounded-2xl 
                   bg-gradient-to-br from-purple-800/40 via-purple-600/30 to-purple-800/40
                   backdrop-blur-lg border border-white/20 shadow-xl"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white tracking-wide drop-shadow-lg">
          Sign In
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-400"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-500 to-purple-700 
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
};

export default Login;
