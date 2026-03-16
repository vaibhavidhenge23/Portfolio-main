import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Strategic Technical Associate",
    org: "Spirecrest Solution",
    period: "Dec 2025 — Present",
    bullets: [
      "Developing and maintaining backend services using Java, Spring Boot and Node.js (Express.js, Next.js)",
      "Building and maintaining RESTful APIs for core application features",
      "Collaborating in Agile methodologies with a cross-functional team of 4–6 members",
      "Driving modern web architecture across multiple production-grade projects",
    ],
  },
  {
    title: "Java Developer Intern",
    org: "Cognifyz Technology",
    period: "Jun 2024 — Jul 2024",
    bullets: [
      "Built projects using Java Swing for GUI and Java as backend logic",
      "Gained hands-on experience with OOP principles and Java fundamentals",
      "Uploaded and managed projects on GitHub repository",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                    </div>
                    <span className="font-mono text-xs text-primary shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
