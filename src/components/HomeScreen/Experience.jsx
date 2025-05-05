import {
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Badge } from "../ui/badge"
import { motion } from "framer-motion"
import { GradientText } from "../animated-text"
import { CollapsibleTimeline } from "../collapsible-timeline"
import { theme } from "../../theme.js";
import { jobExperience } from "../../data/jobExperience"
import { educationInfo } from "../../data/educationInfo"

const Experience = () => {
  
  return (
    <section id="experience" className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className={`mb-4 px-4 py-1 ${theme.badge}`}>
              My Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Experience</span>
              <GradientText text="/" gradient={`bg-gradient-to-r ${theme.primary}`} className="font-bold mx-2" />
              <span className="text-white">Education</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">My professional journey and educational background</p>
          </motion.div>

          <Tabs defaultValue="job" className="w-full max-w-4xl mx-auto">
            <TabsList className={`grid w-full grid-cols-2 mb-12 bg-zinc-800/50`}>
              <TabsTrigger value="job" className={`data-[state=active]:${theme.text}`}>
                <Briefcase className="w-4 h-4 mr-2" />
                Professional Experience
              </TabsTrigger>
              <TabsTrigger value="education" className={`data-[state=active]:${theme.text}`}>
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="job">
              <CollapsibleTimeline
                items={jobExperience}
                colorTheme={theme}
              />
            </TabsContent>
            <TabsContent value="education">
              <CollapsibleTimeline
                items={educationInfo}
                colorTheme={theme}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
  );
};

export default Experience;
