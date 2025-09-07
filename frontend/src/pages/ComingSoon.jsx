"use client"

import { useState } from "react"
import StarBackground from "../components/StarBackground.jsx";

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()

    // Simulate subscription
    console.log("[v0] Email subscription:", email)
    setIsSubscribed(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden px-4 sm:px-6">
      {/* Starry Background */}
      <StarBackground />

      {/* Coming Soon Card */}
      <div
        className="relative z-10 w-full max-w-lg p-6 sm:p-8 rounded-2xl
                   bg-gradient-to-br from-purple-800/40 via-purple-600/30 to-purple-800/40
                   backdrop-blur-lg border border-white/20 shadow-xl text-center"
      >
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white tracking-wide drop-shadow-lg">
            Coming Soon
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed">
          We're working hard to bring you something amazing.
          <span className="block mt-2 text-purple-300 font-medium">Stay tuned for updates!</span>
        </p>

        {/* Countdown or Launch Info */}
        <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-purple-200 text-sm mb-2">Expected Launch</p>
          <p className="text-white text-xl sm:text-2xl font-bold">Q2 2024</p>
        </div>

        {/* Email Subscription */}
        <form className="flex flex-col gap-4" onSubmit={handleSubscribe}>
          <p className="text-gray-300 text-sm mb-2">Get notified when we launch</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-gray-300 focus:outline-none 
                         focus:ring-2 focus:ring-purple-400 transition"
              required
              disabled={isSubscribed}
            />

            <button
              type="submit"
              disabled={isSubscribed}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 
                         text-white rounded-lg font-semibold 
                         hover:from-purple-400 hover:to-purple-600 
                         shadow-lg hover:shadow-purple-500/40 transition
                         disabled:opacity-50 disabled:cursor-not-allowed
                         sm:whitespace-nowrap"
            >
              {isSubscribed ? "Subscribed!" : "Notify Me"}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubscribed && (
          <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-400/30">
            <p className="text-green-300 text-sm">✓ Thanks! We'll notify you when we launch.</p>
          </div>
        )}

        {/* Social Links or Additional Info */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-gray-400 text-xs">Follow us for updates and behind-the-scenes content</p>
        </div>
      </div>
    </div>
  )
}
