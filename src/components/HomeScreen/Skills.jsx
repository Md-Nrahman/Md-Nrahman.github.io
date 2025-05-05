import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { SkillCard } from "../skill-card";
import { GradientText } from "../animated-text";
import { theme } from "../../theme.js";
import { techIcons } from "../../data/techInfo";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className={`mb-4 px-4 py-1 ${theme.badge}`}>
            What I Know
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Technical</span>
            <GradientText
              text="Skills"
              gradient={`bg-gradient-to-r ${theme.primary}`}
              className="font-bold"
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            The main area of expertise is front end development (client side of
            the web). I also develop full stack applications using MERN Stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techIcons?.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SkillCard
                name={skill.name}
                icon={`/assets/images/${skill.img}`}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
