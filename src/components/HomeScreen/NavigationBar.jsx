import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Menu,
  Code,
  Briefcase,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { GradientText } from "../animated-text";
import { ConfettiButton } from "../confetti-button";
import { AnimatedIcon } from "../animated-icons";
import { theme } from "../../theme.js";
import Resume from "../../assets/files/Md Naimur Rahman.pdf";

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.target = "_blank";
    link.download = "Md Naimur Rahman.pdf";
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-zinc-800/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <GradientText
            text="Md. Naimur Rahman"
            gradient={`bg-gradient-to-r ${theme.primary}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", id: "home", icon: Sparkles },
            { name: "Skills", id: "skills", icon: Code },
            { name: "Experience", id: "experience", icon: Briefcase },
            { name: "Projects", id: "projects", icon: Rocket },
            { name: "Contact", id: "contact", icon: Mail },
          ].map((item) => (
            <Link
              key={item.name}
              to={`#${item.id}`}
              className={`text-sm hover:${
                theme.text
              } transition-colors flex items-center gap-1 ${
                activeSection === item.id ? theme.text : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <AnimatedIcon
                icon={item.icon}
                size={16}
                color={
                  activeSection === item.id
                    ? theme.iconColors[0]
                    : "currentColor"
                }
              />
              {item.name}
            </Link>
          ))}
          <ConfettiButton
            variant="outline"
            className={`border-${theme.border} ${theme.accent} hover:bg-${theme.primary}/10`}
            confettiColors={theme.iconColors}
            onClick={downloadResume}
          >
            Resume <ArrowRight className="ml-2 h-4 w-4" />
          </ConfettiButton>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-zinc-900 border-zinc-800">
            <div className="flex flex-col gap-6 mt-10">
              {[
                { name: "Home", id: "home", icon: Sparkles },
                { name: "Skills", id: "skills", icon: Code },
                { name: "Experience", id: "experience", icon: Briefcase },
                { name: "Projects", id: "projects", icon: Rocket },
                { name: "Contact", id: "contact", icon: Mail },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={`#${item.id}`}
                  className={`text-lg hover:${theme.text} transition-colors flex items-center gap-2`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <AnimatedIcon icon={item.icon} color={theme.iconColors[0]} />
                  {item.name}
                </Link>
              ))}
              <ConfettiButton
                variant="outline"
                className={`${theme.border} ${theme.accent} hover:bg-${theme.primary}/10 mt-4`}
                confettiColors={theme.iconColors}
                onClick={downloadResume}
              >
                Resume <ArrowRight className="ml-2 h-4 w-4" />
              </ConfettiButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavigationBar;
