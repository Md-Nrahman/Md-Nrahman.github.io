const colorTheme = "neon"

const themeColors = {
  purple: {
    primary: "from-purple-500 to-pink-500",
    secondary: "from-pink-500 to-purple-500",
    accent: "text-pink-500",
    button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-3 py-2",
    border: "border-purple-500/50",
    text: "text-purple-500",
    badge: "border-purple-500/50 text-purple-400",
    iconColors: ["#8B5CF6", "#EC4899", "#F472B6"],
  },
  blue: {
    primary: "from-blue-500 to-cyan-500",
    secondary: "from-cyan-500 to-blue-500",
    accent: "text-cyan-500",
    button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-3 py-2",
    border: "border-blue-500/50",
    text: "text-blue-500",
    badge: "border-blue-500/50 text-blue-400",
    iconColors: ["#3B82F6", "#06B6D4", "#0EA5E9"],
  },
  sunset: {
    primary: "from-amber-500 to-red-500",
    secondary: "from-red-500 to-orange-500",
    accent: "text-orange-500",
    button: "bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 px-3 py-2",
    border: "border-amber-500/50",
    text: "text-amber-500",
    badge: "border-amber-500/50 text-amber-400",
    iconColors: ["#F59E0B", "#EF4444", "#FB923C"],
  },
  neon: {
    primary: "from-emerald-500 to-indigo-500",
    secondary: "from-indigo-500 to-purple-500",
    accent: "text-indigo-500",
    button: "bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-600 hover:to-indigo-600 px-3 py-2",
    border: "border-emerald-500/50",
    text: "text-emerald-500",
    badge: "border-emerald-500/50 text-emerald-400",
    iconColors: ["#10B981", "#6366F1", "#8B5CF6"],
  },
  midnight: {
    primary: "from-indigo-500 to-purple-500",
    secondary: "from-purple-500 to-pink-500",
    accent: "text-purple-500",
    button: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-3 py-2",
    border: "border-indigo-500/50",
    text: "text-indigo-500",
    badge: "border-indigo-500/50 text-indigo-400",
    iconColors: ["#6366F1", "#8B5CF6", "#EC4899"],
  },
}

export const theme = themeColors[colorTheme]