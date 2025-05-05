"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { Button } from "./ui/button"

export function ConfettiButton({
  children,
  confettiColors = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981", "#F59E0B"],
  ...props
}) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (e) => {
    setIsAnimating(true)

    // Get button position for confetti origin
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: confettiColors,
      disableForReducedMotion: true,
    })

    setTimeout(() => setIsAnimating(false), 1000)

    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <Button
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden ${props.className || ""} ${isAnimating ? "animate-pulse" : ""}`}
    >
      {children}
    </Button>
  )
}
