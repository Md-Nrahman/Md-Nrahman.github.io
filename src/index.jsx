import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "./components/theme-provider"
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
