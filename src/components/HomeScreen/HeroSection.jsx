import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "../ui/button";
import { Typewriter, AnimatedText, GradientText } from "../animated-text";
import { ConfettiButton } from "../confetti-button";
import { FloatingIcon } from "../animated-icons";
import { theme } from "../../theme.js";
import ProfileImg from "../../assets/images/profile.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${theme.primary} mix-blend-overlay opacity-10`}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className={`text-lg ${theme.text} mb-2`}>
              <Typewriter
                text="Hello, I'm"
                delay={80}
                onComplete={() => setIntroCompleted(true)}
              />
            </h2>

            {introCompleted && (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <GradientText
                    text="Md. Naimur Rahman"
                    gradient={`bg-gradient-to-r ${theme.primary}`}
                    className="font-bold"
                  />
                </h1>
                <AnimatedText
                  text="Software Engineer"
                  className="text-xl md:text-2xl text-zinc-400 mb-6"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-zinc-300 mb-8 max-w-lg min-h-24"
                >
                  <Typewriter
                    text="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences."
                    delay={20}
                    loop={true}
                    pauseTime={2000}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex gap-4 items-center"
                >
                  <Link
                    to="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={theme.button}
                  >
                    Contact Me
                  </Link>
                  <Link
                    to="#projects"
                    variant="outline"
                    className="border-zinc-700"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Projects
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex gap-6 mt-8"
                >
                  <a
                    href="https://github.com/Md-Nrahman"
                    target="_blank"
                    className="text-zinc-400 hover:text-purple-400 transition-colors"
                  >
                    <FloatingIcon icon={Github} color={theme.iconColors[0]} />
                  </a>
                  <a
                    href="http://linkedin.com/in/mdnrahman/"
                    target="_blank"
                    className="text-zinc-400 hover:text-pink-400 transition-colors"
                  >
                    <FloatingIcon icon={Linkedin} color={theme.iconColors[1]} />
                  </a>
                  <a
                    href="mailto:md.naimur.rahman.naim@gmail.com"
                    className="text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <FloatingIcon icon={Mail} color={theme.iconColors[2]} />
                  </a>
                </motion.div>
              </>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${theme.border} shadow-xl shadow-${theme.primary}/10`}
            >
              <img
                src={ProfileImg}
                alt="Md. Naimur Rahman"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${theme.primary} opacity-20`}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="rgb(24 24 27)"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
