import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { motion } from "framer-motion";
import { GradientText } from "../animated-text";
import { ConfettiButton } from "../confetti-button";
import { PulsingIcon } from "../animated-icons";
import { theme } from "../../theme.js";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_sx3oamb",
        "template_txyzt3s",
        form.current,
        "nHMTj6uq-H9BJY0C6"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Message not sent!");
          form.current.reset();
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-zinc-800/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className={`mb-4 px-4 py-1 ${theme.badge}`}>
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Send Me A</span>
            <GradientText
              text="Message"
              gradient={`bg-gradient-to-r ${theme.primary}`}
              className="font-bold ml-2"
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </motion.div>
        <ToastContainer />
        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardContent className="p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className={`bg-zinc-900/50 border-zinc-700 focus:border-${theme.text}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className={`bg-zinc-900/50 border-zinc-700 focus:border-${theme.text}`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className={`bg-zinc-900/50 border-zinc-700 focus:border-${theme.text}`}
                  />
                </div>
                <ConfettiButton type="Submit" className={theme.button}>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </ConfettiButton>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-12 gap-6">
            <a
              href="https://github.com/Md-Nrahman"
              target="_blank"
              className="text-zinc-400 hover:text-purple-400 transition-colors"
            >
              <PulsingIcon
                icon={Github}
                color={theme.iconColors[0]}
                size={28}
              />
            </a>
            <a
              href="http://linkedin.com/in/mdnrahman/"
              target="_blank"
              className="text-zinc-400 hover:text-pink-400 transition-colors"
            >
              <PulsingIcon
                icon={Linkedin}
                color={theme.iconColors[1]}
                size={28}
              />
            </a>
            <a
              href="mailto:md.naimur.rahman.naim@gmail.com"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <PulsingIcon icon={Mail} color={theme.iconColors[2]} size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
