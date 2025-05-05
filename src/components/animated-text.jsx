"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export function Typewriter({
  text,
  delay = 50,
  eraseDelay = 30,
  eraseSpeed = 30,
  className = "",
  onComplete,
  loop = false,
  pauseTime = 1500,
}) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const reset = useCallback(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setIsTyping(true)
    setIsPaused(false)
  }, [])

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false) // Start erasing after pause
      }, pauseTime)

      return () => clearTimeout(pauseTimeout)
    }

    if (isTyping) {
      // Typing animation
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, delay)

        return () => clearTimeout(timeout)
      } else {
        // Typing complete
        if (loop) {
          setIsPaused(true) // Pause before erasing
        } else if (onComplete) {
          onComplete()
        }
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, eraseSpeed)

        return () => clearTimeout(timeout)
      } else {
        // Erasing complete, restart if looping
        if (loop) {
          setTimeout(() => {
            reset()
          }, eraseDelay)
        }
      }
    }
  }, [
    currentIndex,
    delay,
    displayText,
    eraseDelay,
    eraseSpeed,
    isTyping,
    isPaused,
    loop,
    onComplete,
    pauseTime,
    reset,
    text,
  ])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
      />
    </span>
  )
}

export function AnimatedText({ text, className = "", once = true }) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function GradientText({ text, className = "", gradient = "from-purple-500 via-pink-500 to-red-500" }) {
  return <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} ${className}`}>{text}</span>
}
