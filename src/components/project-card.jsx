"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function ProjectCard({ title, description, image, technologies, link, color = "#8B5CF6", theme }) {
  return (
    <Card className="bg-zinc-800/30 border-zinc-700 overflow-hidden transition-all group">
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: `0 10px 25px -5px ${color}20`,
          borderColor: `${color}50`,
        }}
        className="h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={`/assets/images/projects/${image}` || "/placeholder.svg"}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
            style={{
              background: `linear-gradient(to bottom right, ${color}, ${color}88)`,
            }}
          ></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl transition-colors" style={{ color: "white" }}>
            <span
              className="relative inline-block group-hover:text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${color}, ${color}88)`,
                WebkitBackgroundClip: "text",
              }}
            >
              {title}
            </span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <img
                src={`/assets/images/${tech}` || "/placeholder.svg"}
                alt={title}
                className="w-4 h-4 object-contain"
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="border-zinc-700 hover:bg-zinc-700/20">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" style={{ color }} /> Demo
              </a>
            </Button>
            {/* <Button variant="outline" size="sm" asChild className="border-zinc-700 hover:bg-zinc-700/20">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" style={{ color }} /> Code
              </a>
            </Button> */}
          </div>
        </CardFooter>
      </motion.div>
    </Card>
  )
}
