import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ShoppingCart, Vote, X, GitBranch, Database, Shield, Server, ArrowRight, Ambulance, Scale, Layers, BookOpen, Wallet } from "lucide-react";

const projects = [
  {
    title: "Real-Time Emergency Response System",
    subtitle: "Spring Boot Microservices · Kafka · WebSocket",
    shortDesc: "Distributed emergency response system tackling India's 15–20 min ambulance delay crisis with live GPS tracking and automated coordination.",
    tags: ["Spring Boot", "Microservices", "Kafka", "WebSocket", "Google Maps API"],
    icon: <Ambulance size={20} />,
    accent: "from-[hsl(0_80%_55%/0.2)] to-[hsl(0_80%_55%/0.05)]",
    span: "md:col-span-2 md:row-span-2",
    link: "https://github.com/vaibhavidhenge23/Emergency-alert-system",
    problem: "India's emergency response suffers from 15–20 minute average ambulance delays due to manual coordination, no real-time tracking, and fragmented communication between hospitals and drivers.",
    solution: "A distributed Spring Boot Microservices system with Kafka for async event processing, WebSocket for live ambulance tracking, and Google Maps routing to automate the full emergency coordination pipeline.",
    metrics: [
      "Spring Boot Microservices architecture",
      "Kafka-based async event processing",
      "WebSocket live GPS ambulance tracking",
      "Google Maps API for optimal routing",
      "End-to-end automated emergency coordination",
    ],
    architecture: [
      { label: "Emergency Call", color: "bg-[hsl(0_80%_55%/0.2)] text-[hsl(0_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "API Gateway", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Kafka Queue", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Dispatch Service", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "WebSocket Track", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Google Maps", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "CourtAlert",
    subtitle: "Real-Time Court Hearing Tracker · AI Legal Assistant",
    shortDesc: "Microservices platform for tracking CNR cases across District & Supreme Courts with predictive hearing ETAs, verified advocate search, and multilingual AI legal document summarization.",
    tags: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Microservices"],
    icon: <Scale size={20} />,
    accent: "from-[hsl(280_80%_50%/0.15)] to-[hsl(280_80%_50%/0.05)]",
    span: "md:col-span-1 md:row-span-2",
    link: "https://github.com/vaibhavidhenge23/court-alert",
    problem: "Navigating India's judicial system is opaque and time-consuming — 3.5 crore+ pending cases with no centralized real-time tracker accessible to advocates and litigants.",
    solution: "A scalable microservices platform with an API Gateway routing 5 independent services — Auth, Case, Parser, Prediction, and Notification — backed by MongoDB, with a React dark-themed PWA and multilingual AI document summarization (EN/HI/MR).",
    metrics: [
      "CNR case tracking across District & Supreme Courts",
      "Predictive hearing ETA algorithm",
      "AI doc summarization in English, Hindi & Marathi",
      "Verified advocate directory (Bar Council cross-ref)",
      "API Gateway routing 5 microservices (:3001–:3005)",
      "JWT auth with Bcrypt password security",
    ],
    architecture: [
      { label: "React PWA", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "API Gateway :3000", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "User :3001", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "Case :3002", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "Parser :3003", color: "bg-[hsl(0_80%_55%/0.2)] text-[hsl(0_80%_65%)]" },
      { label: "Predict :3004", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
      { label: "Notify :3005", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "MongoDB", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "Ink-Well",
    subtitle: "Daily Journaling SPA · React · Frontend",
    shortDesc: "A web-based article reading platform that allows users to freely browse and read content with a personalized experience, powered by a headless CMS for efficient content delivery., and styled with Tailwind CSS and shadcn/ui components.",
    tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
    icon: <BookOpen size={20} />,
    accent: "from-[hsl(142_70%_45%/0.15)] to-[hsl(142_70%_45%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/daily-ink",
    problem: "Existing platforms either rely on intrusive ads or restrict access via paywalls, leading to poor user retention and limited monetization efficiency",
    solution: "Created a user-friendly, personalized reading platform that enhances engagement and is structured to enable sustainable monetization through scalable business models.",
    metrics: [
      "100% TypeScript — strict type-safe codebase",
      "React 18 component-driven architecture",
      "Vite for instant HMR and optimized builds",
      "shadcn/ui for accessible UI components",
      "Responsive across all screen sizes",
    ],
    architecture: [
      { label: "index.html", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Vite Bundler", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "React DOM", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "shadcn/ui", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "+", color: "text-muted-foreground" },
      { label: "Tailwind CSS", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "Expense Tracker",
    subtitle: "Full-Stack Finance App · React · Node.js",
    shortDesc: "Personal expense tracking app with income/expense logging, category breakdowns, and financial summaries — full-stack with REST API backend.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    icon: <Wallet size={20} />,
    accent: "from-[hsl(45_90%_55%/0.15)] to-[hsl(45_90%_55%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23",
    problem: "Tracking personal finances manually is error-prone — needed a simple full-stack tool to log, categorize and visualize expenses.",
    solution: "A full-stack expense tracker with React frontend, Node.js/Express REST API backend, and MongoDB for persistent storage across sessions.",
    metrics: [
      "Income & expense entry management",
      "Category-wise breakdown & summaries",
      "REST API backend with Express.js",
      "MongoDB for persistent data storage",
    ],
    architecture: [
      { label: "React UI", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Express API", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "MongoDB", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
    ],
  },
  {
    title: "E-Commerce Web Application",
    subtitle: "Spring Boot · PostgreSQL · JWT",
    shortDesc: "Scalable e-commerce platform with product, cart and order modules, secure JWT auth, and clean layered Spring Boot architecture.",
    tags: ["Spring Boot", "PostgreSQL", "JPA/Hibernate", "JWT"],
    icon: <ShoppingCart size={20} />,
    accent: "from-[hsl(170_70%_45%/0.15)] to-[hsl(170_70%_45%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/E-Commerce-micro-Services-",
    problem: "Need for a reliable backend handling products, carts, orders and user auth without tight coupling between modules.",
    solution: "Clean layered Spring Boot architecture with domain-driven modules, JWT security, and JPA/Hibernate ORM backed by PostgreSQL.",
    metrics: [
      "Modules: Products, Cart, Orders, Auth",
      "JWT-based login & role-based access",
      "JPA/Hibernate ORM with PostgreSQL",
      "REST APIs with clean layered design",
    ],
    architecture: [
      { label: "Client", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Controller", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Service", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Repository", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "PostgreSQL", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "Voting Web Application",
    subtitle: "Node.js · Express.js · JWT Auth",
    shortDesc: "Secure backend voting app with Aadhaar-based verification, one user–one vote enforcement, and admin live vote count.",
    tags: ["Node.js", "Express.js", "JavaScript", "JWT"],
    icon: <Vote size={20} />,
    accent: "from-[hsl(212_100%_48%/0.15)] to-[hsl(212_100%_48%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/Voting-application",
    problem: "Campus voting was manual and prone to fraud — needed a verifiable, tamper-proof digital system.",
    solution: "Node.js/Express.js backend with Aadhaar verification, server-side vote deduplication, and admin control panel with live results.",
    metrics: [
      "Aadhaar-based identity verification",
      "One user–one vote enforced server-side",
      "Admin dashboard with live vote count",
      "Secure JWT authentication pipeline",
    ],
    architecture: [
      { label: "Voter", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Auth Middleware", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Vote Controller", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "DB (Dedupe)", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
    ],
  },
];

const smallCards = [
  { title: "Microservices", icon: <Layers size={16} />, desc: "API Gateway, service isolation, event-driven design", tags: ["Spring Boot", "Node.js", "Kafka"] },
  { title: "REST API Design", icon: <Server size={16} />, desc: "Layered MVC, validation, error handling", tags: ["Spring Boot", "Express.js"] },
  { title: "JWT Auth Systems", icon: <Shield size={16} />, desc: "Token generation, role-based access control", tags: ["Spring Security", "Node.js"] },
  { title: "Database Design", icon: <Database size={16} />, desc: "JPA/Hibernate ORM, PostgreSQL, MongoDB", tags: ["PostgreSQL", "MongoDB"] },
  { title: "Real-Time Systems", icon: <GitBranch size={16} />, desc: "WebSocket live tracking, async Kafka events", tags: ["WebSocket", "Kafka"] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const BentoGrid = () => {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Click any project to see the full case study & architecture.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              onClick={() => setActiveProject(project)}
              className={`group relative rounded-xl glass overflow-hidden hover:glow-border transition-all duration-500 cursor-pointer ${project.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs text-primary font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Case Study <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Small skill cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {smallCards.map((card) => (
            <motion.div key={card.title} variants={item} className="glass rounded-xl p-4 hover:glow-border transition-all duration-300">
              <div className="flex items-center gap-2 mb-2 text-primary">{card.icon}<span className="text-sm font-medium text-foreground">{card.title}</span></div>
              <p className="text-xs text-muted-foreground mb-3">{card.desc}</p>
              <div className="flex flex-wrap gap-1">
                {card.tags.map((t) => <span key={t} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-mono">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            >
              <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {activeProject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{activeProject.title}</h3>
                  <p className="text-sm text-muted-foreground">{activeProject.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Problem</span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{activeProject.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Solution</span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{activeProject.solution}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Architecture</span>
                  <div className="mt-3 p-4 rounded-xl bg-secondary/50 flex flex-wrap items-center gap-2">
                    {activeProject.architecture.map((node, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium ${node.color}`}>
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Key Features</span>
                  <ul className="mt-3 space-y-2">
                    {activeProject.metrics.map((m) => (
                      <li key={m} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">{tag}</span>
                  ))}
                </div>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Github size={15} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;
