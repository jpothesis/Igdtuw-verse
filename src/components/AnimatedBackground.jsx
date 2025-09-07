"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Stars
    const stars = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
      })
    }

    // Meteors
    const meteors = []
    for (let i = 0; i < 3; i++) {
      meteors.push({
        x: -100,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 3,
        angle: ((Math.random() - 0.5) * 10 * Math.PI) / 180, // -5 to 5 degrees
        length: 50 + Math.random() * 100,
        opacity: 0.3 + Math.random() * 0.4,
      })
    }

    const animate = () => {
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fillRect(star.x, star.y, star.size, star.size)
      })

      // Draw and update meteors
      meteors.forEach((meteor) => {
        // Update position
        meteor.x += meteor.speed * Math.cos(meteor.angle)
        meteor.y += meteor.speed * Math.sin(meteor.angle)

        // Reset meteor when it goes off screen
        if (meteor.x > canvas.width + 200) {
          meteor.x = -100
          meteor.y = Math.random() * canvas.height
          meteor.speed = 2 + Math.random() * 3
          meteor.angle = ((Math.random() - 0.5) * 10 * Math.PI) / 180
        }

        // Draw meteor trail
        const gradient = ctx.createLinearGradient(
          meteor.x - meteor.length * Math.cos(meteor.angle),
          meteor.y - meteor.length * Math.sin(meteor.angle),
          meteor.x,
          meteor.y,
        )
        gradient.addColorStop(0, "rgba(139, 92, 246, 0)")
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${meteor.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(meteor.x - meteor.length * Math.cos(meteor.angle), meteor.y - meteor.length * Math.sin(meteor.angle))
        ctx.lineTo(meteor.x, meteor.y)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: "#0a0a0a" }}
    />
  )
}
