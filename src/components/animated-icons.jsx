"use client"

import { motion } from "framer-motion"

export function AnimatedIcon({ icon: Icon, color = "currentColor", size = 24, className = "" }) {
  return (
    <motion.div className={`inline-flex ${className}`} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
      <Icon size={size} color={color} />
    </motion.div>
  )
}

export function FloatingIcon({ icon: Icon, color = "currentColor", size = 24, className = "" }) {
  return (
    <motion.div
      className={`inline-flex ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  )
}

export function PulsingIcon({ icon: Icon, color = "currentColor", size = 24, className = "" }) {
  return (
    <motion.div
      className={`inline-flex ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  )
}
