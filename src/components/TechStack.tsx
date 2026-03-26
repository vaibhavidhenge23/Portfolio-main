import { motion } from "framer-motion";

const categories = [
  {
    label: "Backend Core",
    description: "Primary expertise",
    techs: ["Java 17", "Spring Boot", "Spring Cloud", "Node.js", "Express.js", "Next.js"],
    color: "bg-[hsl(142_70%_45%/0.15)] text-[hsl(142_70%_60%)]",
  },
  {
    label: "Architecture",
    description: "Distributed systems",
    techs: ["Microservices", "Eureka", "API Gateway", "REST APIs", "JWT Auth", "Passport.js"],
    color: "bg-[hsl(0_80%_55%/0.15)] text-[hsl(0_80%_65%)]",
  },
  {
    label: "Frontend",
    description: "UI & Styling",
    techs: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui", "HTML5"],
    color: "bg-primary/15 text-primary",
  },
  {
    label: "Database & ORM",
    description: "Data layer",
    techs: ["PostgreSQL", "MongoDB", "JPA/Hibernate", "Drizzle ORM", "Mongoose"],
    color: "bg-[hsl(280_80%_50%/0.15)] text-[hsl(280_80%_65%)]",
  },
  {
    label: "Tools & Validation",
    description: "Dev workflow",
    techs: ["GitHub", "Maven", "Zod", "React Query", "Postman", "Agile/Scrum"],
    color: "bg-[hsl(30_90%_55%/0.15)] text-[hsl(30_90%_60%)]",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const TechStack = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              className="group glass rounded-xl p-6 hover:glow-border transition-all duration-500"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-mono font-medium mb-4 ${cat.color}`}>
                {cat.label}
              </div>
              <p className="text-xs text-muted-foreground mb-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground font-mono hover:bg-secondary/80 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;