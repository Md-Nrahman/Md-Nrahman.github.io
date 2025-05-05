import { GradientBackground, ParticleBackground } from "../components/background-effects"
import NavigationBar from "../components/HomeScreen/NavigationBar"
import HeroSection from "../components/HomeScreen/HeroSection"
import Skills from "../components/HomeScreen/Skills"
import Experience from "../components/HomeScreen/Experience"
import Projects from "../components/HomeScreen/Projects"
import Contact from "../components/HomeScreen/Contact"
import Footer from "../components/HomeScreen/Footer"

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 overflow-hidden">
      {/* Background Effects */}
      <GradientBackground />
      <ParticleBackground />

      <NavigationBar />
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
