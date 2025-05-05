"use client"

import { motion } from "framer-motion"

export function SkillCard({ name, icon, color = "#8B5CF6" }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: `0 10px 25px -5px ${color}20` }}
      className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-4 hover:border-opacity-50 hover:bg-opacity-5 transition-all group"
      style={{
        borderColor: `${color}50`,
        "--hover-color": color,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-12 h-12 mb-3">
          <img src={icon || "/placeholder.svg"} alt={name} className="w-full h-full object-contain" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <h3 className="text-sm font-medium transition-colors" style={{ color: "white", "--hover-color": color }}>
          {name}
        </h3>
      </div>
    </motion.div>
  )
}
