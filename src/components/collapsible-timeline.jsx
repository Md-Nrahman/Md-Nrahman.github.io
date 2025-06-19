import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

function TimelineItem({ item, index, colorTheme }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Get the first item and add ellipsis
  const previewContent =
    item.description.length > 0
      ? item.description[0].length > 60
        ? item.description[0].substring(0, 60) + "..."
        : item.description[0] + (item.description.length > 1 ? "..." : "")
      : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-zinc-900 transform -translate-x-1/2 z-10"
        style={{ backgroundColor: item.color || colorTheme?.iconColors[0] }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>

      {/* Content */}
      <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
        <span
          className="inline-block px-3 py-1 rounded-full text-sm mb-2"
          style={{
            backgroundColor: `${item.color || colorTheme?.iconColors[0]}20`,
            color: item.color || colorTheme?.iconColors[0],
          }}
        >
          {item.date}
        </span>
      </div>
      <div className="md:w-1/2 pl-8 md:pl-12">
        <h3 className="text-xl font-bold" style={{ color: item.color || colorTheme?.iconColors[0] }}>
          {item.institution}
        </h3>
        <p className="text-zinc-300 mb-2">{item.title}</p>

        {/* Collapsed content preview */}
        {!isExpanded && <p className="text-zinc-400 text-sm mb-2">{previewContent}</p>}

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="list-disc pl-5 space-y-1 text-zinc-400 text-sm overflow-hidden"
            >
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          style={{ color: item.color || colorTheme?.iconColors[0] }}
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}

export function CollapsibleTimeline({ items, colorTheme }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-700 transform md:translate-x-px"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} colorTheme={colorTheme} />
        ))}
      </div>
    </div>
  )
}
