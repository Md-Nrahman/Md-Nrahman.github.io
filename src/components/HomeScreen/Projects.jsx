import { Badge } from "../ui/badge"
import { motion } from "framer-motion"
import { ProjectCard } from "../project-card"
import { GradientText } from "../animated-text"
import { theme } from "../../theme.js";
import { projectInfo } from "../../data/projectInfo";

const Projects = () => {
  
  return (
    <section id="projects" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className={`mb-4 px-4 py-1 ${theme.badge}`}>
              My Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Featured</span>
              <GradientText text="Projects" gradient={`bg-gradient-to-r ${theme.primary}`} className="font-bold ml-2" />
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A selection of my recent work and personal projects</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
            // [
            //   {
            //     title: "Go Chat",
            //     description: "A realtime chatting application",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "Tailwind CSS", "React"],
            //     link: "#",
            //     color: theme.iconColors[0],
            //   },
            //   {
            //     title: "Suffix IT SMS Gateway",
            //     description: "A dynamic web application for sending bulk SMS to the customers",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "React", "Tailwind CSS"],
            //     link: "#",
            //     color: theme.iconColors[1],
            //   },
            //   {
            //     title: "Ramadan Times",
            //     description: "A web application to view the Sehri and Iftar time of a particular location",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "CSS3", "React", "Node.js", "Express.js", "MongoDB"],
            //     link: "https://ramadantimes.netlify.app",
            //     color: theme.iconColors[2],
            //   },
            //   {
            //     title: "TRW: An International Law Firm",
            //     description: "A personal portfolio website for an international law firm with dynamic Articles Section",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "MongoDB"],
            //     link: "#",
            //     color: theme.iconColors[0],
            //   },
            //   {
            //     title: "Wasa Meter Reading",
            //     description: "A web application to monitor the meter reading of the water supply system of Dhaka WASA",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "CSS3", "React"],
            //     link: "#",
            //     color: theme.iconColors[1],
            //   },
            //   {
            //     title: "Hyundai Car Exchange Program",
            //     description:
            //       "A flagship web application designed to revolutionize the buying and selling experience for four wheels",
            //     image: "/placeholder-project.jpg",
            //     technologies: ["HTML5", "CSS3", "React", "Node.js", "Express.js", "MongoDB"],
            //     link: "#",
            //     color: theme.iconColors[2],
            //   },
            // ]
            projectInfo.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  link={project.link}
                  color={project.color}
                  theme={theme}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;
