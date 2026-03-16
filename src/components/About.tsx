import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Rocket } from "lucide-react";

const highlights = [
  { icon: <MapPin size={16} />, text: "Nagpur, Maharashtra" },
  { icon: <GraduationCap size={16} />, text: "B.Tech CSE, 2026" },
  { icon: <Code2 size={16} />, text: "Backend Developer" },
  { icon: <Rocket size={16} />, text: "Open to Full-time Roles" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated and detail-oriented Backend Developer with hands-on internship experience
              using <span className="text-foreground font-medium">Java, Spring Boot, Node.js, and Express.js</span>.
              Currently in my final year of B.Tech CSE at Nagpur Institute of Technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I actively work on real-world production-grade projects involving REST APIs, backend logic,
              and database integration. My experience spans across building scalable e-commerce platforms,
              voting systems, and enterprise-grade APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive in Agile environments, collaborate with cross-functional teams, and am constantly
              deepening my expertise in modern backend systems and microservices architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-3 hover:glow-border transition-all duration-300"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
