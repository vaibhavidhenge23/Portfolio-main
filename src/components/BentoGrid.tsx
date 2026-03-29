import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ShoppingCart, Vote, X, GitBranch, Database, Shield, Server, ArrowRight, Ambulance, Scale, Layers, BookOpen, Wallet, FileText, Calculator } from "lucide-react";

const projects = [
  {
    title: "Emergency Alert System",
    subtitle: "Spring Boot Microservices · Eureka · API Gateway",
    shortDesc: "Real-time emergency coordination platform solving India's 15–20 min ambulance delay — smart dispatch using Haversine GPS, hospital bed tracking, and instant SMS/email alerts.",
    tags: ["Java 17", "Spring Boot", "Spring Cloud", "PostgreSQL", "React"],
    icon: <Ambulance size={20} />,
    accent: "from-[hsl(0_80%_55%/0.2)] to-[hsl(0_80%_55%/0.05)]",
    span: "md:col-span-2 md:row-span-2",
    link: "https://github.com/vaibhavidhenge23/Emergency-alert-system",
    liveLink: null,
    problem: "India's average ambulance response time is 15–20 minutes vs WHO's recommended 8–10 minutes. Manual coordination between dispatchers, ambulances, and hospitals causes critical delays in life-threatening emergencies.",
    solution: "A distributed Spring Boot Microservices platform with Eureka service discovery, API Gateway routing, Haversine formula for nearest ambulance dispatch, real-time GPS tracking, hospital bed availability, and automated SMS/email notifications.",
    metrics: [
      "SOS trigger with auto nearest-ambulance dispatch (Haversine GPS)",
      "Real-time hospital bed availability tracking",
      "Role-based dashboards: Admin, Responder, Officer",
      "Automated SMS/Email alerts on emergency events",
      "5 independent microservices via Eureka + API Gateway",
      "Incident logging with automated audit history",
    ],
    architecture: [
      { label: "SOS Trigger", color: "bg-[hsl(0_80%_55%/0.2)] text-[hsl(0_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "API Gateway :8080", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Emergency :8081", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "Resource :8082", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "Hospital :8083", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "Notify :8085", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "PostgreSQL", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "CourtAlert",
    subtitle: "Real-Time Court Hearing Tracker · AI Legal Assistant",
    shortDesc: "Microservices platform tracking CNR cases across District & Supreme Courts with predictive hearing ETAs, verified advocate search, and multilingual AI legal document summarization.",
    tags: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Microservices"],
    icon: <Scale size={20} />,
    accent: "from-[hsl(280_80%_50%/0.15)] to-[hsl(280_80%_50%/0.05)]",
    span: "md:col-span-1 md:row-span-2",
    link: "https://github.com/vaibhavidhenge23/court-alert",
    liveLink: null,
    problem: "Navigating India's judicial system is opaque and time-consuming — 3.5 crore+ pending cases with no centralized real-time tracker accessible to advocates and litigants.",
    solution: "A scalable microservices backend with API Gateway routing 5 independent Node.js/Express services backed by MongoDB, JWT + Bcrypt auth, and a React dark PWA with multilingual AI document summarization (EN/HI/MR).",
    metrics: [
      "CNR case tracking across District & Supreme Courts",
      "Predictive hearing ETA algorithm",
      "AI doc summarization in English, Hindi & Marathi",
      "Verified advocate directory (Bar Council cross-ref)",
      "API Gateway routing 5 microservices (:3001–:3005)",
      "JWT auth + Bcrypt password security",
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
    title: "GST Reconciliation & Tax Filing",
    subtitle: "Fintech · Microservices · Rule Engine · PDF Parsing",
    shortDesc: "Auto-reconcile purchases vs sales, detect GST mismatches, parse PDF invoices, and generate GSt-ready compliance reports — solving India's CA-dependency for small businesses.",
    tags: ["Next.js", "React", "PostgreSQL", "PDF Parsing"],
    icon: <FileText size={20} />,
    accent: "from-[hsl(45_90%_55%/0.2)] to-[hsl(45_90%_55%/0.05)]",
    span: "md:col-span-2",
    link: "https://github.com/vaibhavidhenge23/Gst-reconciliation-app",
    liveLink: "https://gst-reconciliation-app.vercel.app/",
    problem: "Small businesses in India must hire a CA just for GST filing — expensive, slow, and error-prone. Manual reconciliation of purchase vs sales invoices leads to compliance penalties and audit risks.",
    solution: "A microservices fintech platform with 5 services — Invoice, Reconciliation, Tax-Calculator, Report, and Compliance-Alert — featuring PDF invoice parsing, a rule engine for mismatch detection, and automated GSt-ready report generation.",
    metrics: [
      "Auto-reconcile purchases vs sales invoices",
      "PDF invoice parsing for data extraction",
      "Rule engine for GST mismatch detection",
      "ITR-ready compliance report generation",
      "Compliance-Alert service for deadline reminders",
      "Targets every Indian small business — massive market",
    ],
    architecture: [
      { label: "React Dashboard", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "API Gateway", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Invoice Service", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "Reconciliation", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "Tax-Calculator", color: "bg-[hsl(0_80%_55%/0.2)] text-[hsl(0_80%_65%)]" },
      { label: "Report", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
      { label: "Compliance-Alert", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "PostgreSQL", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
    ],
  },
  {
    title: "ITR Filing App",
    subtitle: "Fintech · Tax Engine · ITR-1 & ITR-4 · PDF Reports",
    shortDesc: "Full-stack ITR filing app supporting ITR-1 (salaried) and ITR-4 (freelancer/business) with live tax calculation, 80C/80D deductions, TDS records, and PDF-ready tax reports.",
    tags: ["React", "Node.js", "Next.js", "PostgreSQL", "Tax Engine"],
    icon: <Calculator size={20} />,
    accent: "from-[hsl(212_100%_48%/0.15)] to-[hsl(212_100%_48%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/ITR-Auto-app",
    liveLink: "https://itr-app.vercel.app",
    problem: "Filing ITR in India is complex — salaried individuals and freelancers both struggle with income declarations, deduction calculations, TDS reconciliation, and understanding their final tax liability.",
    solution: "A full-stack ITR app with a live tax engine supporting ITR-1 (salaried) and ITR-4 (freelancer/business), covering income sources, 80C/80D investments, TDS records, real-time tax slab computation, and PDF-ready final reports.",
    metrics: [
      "ITR-1 (salary + house + interest) & ITR-4 (business)",
      "Live tax calculator with Old/New regime slabs",
      "80C (₹1.5L), 80D (₹25K), standard deduction (₹75K)",
      "TDS records from employer & bank",
      "Dashboard: tax summary + payable amount",
      "PDF-ready ITR summary report generation",
    ],
    architecture: [
      { label: "React Dashboard", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Next.js API", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Tax Engine", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "PostgreSQL", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
    ],
  },
  {
    title: "Ink-well",
    subtitle: "Live Article Reader · React · No Paywall",
    shortDesc: "Fully client-side article reading app aggregating live content from Dev.to & Hacker News — 13 reading themes, personalization, bookmarks, and reading stats. No backend, no paywall.",
    tags: ["React", "Typescript", "Tailwind CSS", "Node.js", "Express.js"],
    icon: <BookOpen size={20} />,
    accent: "from-[hsl(142_70%_45%/0.15)] to-[hsl(142_70%_45%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/Ink-well",
    liveLink: "https://ink-well-vaibhavi-dhenge.vercel.app/",
    problem: "Platforms like Medium gate quality content behind paywalls. Readers need a polished, distraction-free reading experience with real personalization — for free.",
    solution: "A 100% static React SPA pulling live articles from Dev.to and Hacker News APIs, with interest-based personalization, 13 reading themes, bookmarks, and full reading stats — all in localStorage, zero backend.",
    metrics: [
      "Live article feed from Dev.to API + Hacker News",
      "Interest-based personalization from reading behavior",
      "13 reading themes (Light, Dark, Focus variants)",
      "Bookmarks, reading stats & badge system",
      "Infinite scroll with sessionStorage caching",
    ],
    architecture: [
      { label: "React SPA", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Dev.to API", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "HN API", color: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "localStorage", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
    ],
  },
  {
    title: "Expense Tracker",
    subtitle: "Full-Stack Finance App · Express · PostgreSQL",
    shortDesc: "Full-stack budgeting app with Passport.js auth, recharts visualizations, Drizzle ORM + PostgreSQL, and type-safe Zod validation.",
    tags: ["React", "Express.js", "PostgreSQL", "Drizzle ORM", "Passport.js"],
    icon: <Wallet size={20} />,
    accent: "from-[hsl(30_90%_55%/0.15)] to-[hsl(30_90%_55%/0.05)]",
    span: "md:col-span-1",
    link: "https://github.com/vaibhavidhenge23/Expense-tracker-MERN-",
    liveLink: null,
    problem: "Managing personal finances manually is error-prone — needed a full-stack tool to log, categorize, and visualize expenses with secure authentication.",
    solution: "A full-stack app with React 18 + Vite frontend, Express.js backend, PostgreSQL via Drizzle ORM for type-safe queries, Passport.js session auth, recharts for spending visualizations, and Zod schema validation.",
    metrics: [
      "Secure auth with Passport.js + session management",
      "Add, edit, categorize & delete transactions",
      "Interactive charts with recharts (spending trends)",
      "Type-safe DB queries with Drizzle ORM + PostgreSQL",
      "Schema validation with Zod + React Hook Form",
      "React Query for server state management",
    ],
    architecture: [
      { label: "React + Vite", color: "bg-primary/20 text-primary" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Express.js", color: "bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Passport.js", color: "bg-[hsl(280_80%_50%/0.2)] text-[hsl(280_80%_65%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "Drizzle ORM", color: "bg-[hsl(30_90%_55%/0.2)] text-[hsl(30_90%_60%)]" },
      { label: "→", color: "text-muted-foreground" },
      { label: "PostgreSQL", color: "bg-[hsl(170_70%_45%/0.2)] text-[hsl(170_70%_60%)]" },
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
    liveLink: null,
    problem: "Need for a reliable backend handling products, carts, orders and user auth without tight coupling between modules.",
    solution: "Clean layered Spring Boot architecture with domain-driven modules, JWT security, and JPA/Hibernate ORM backed by PostgreSQL.",
    metrics: [
      "Modules: Products, Cart, Orders, Auth",
      "JWT-based login & role-based access control",
      "JPA/Hibernate ORM with PostgreSQL",
      "Clean layered REST API design",
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
    liveLink: null,
    problem: "Campus voting was manual and prone to fraud — needed a verifiable, tamper-proof digital system.",
    solution: "Node.js/Express.js backend with Aadhaar-based identity verification, server-side vote deduplication, and admin control panel with live results.",
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
  { title: "Microservices", icon: <Layers size={16} />, desc: "Eureka discovery, API Gateway, service isolation", tags: ["Spring Cloud", "Node.js"] },
  { title: "REST API Design", icon: <Server size={16} />, desc: "Layered MVC, validation, error handling", tags: ["Spring Boot", "Express.js"] },
  { title: "Auth & Security", icon: <Shield size={16} />, desc: "JWT, Passport.js, Bcrypt, session management", tags: ["Spring Security", "Passport.js"] },
  { title: "Database Design", icon: <Database size={16} />, desc: "PostgreSQL, MongoDB, Drizzle ORM, JPA/Hibernate", tags: ["PostgreSQL", "MongoDB"] },
  { title: "Fintech & Tax", icon: <Calculator size={16} />, desc: "GST reconciliation, ITR tax engine, rule engine", tags: ["Tax Logic", "PDF Parsing"] },
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
                  <div className="flex items-center gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono px-2 py-0.5 rounded-full bg-[hsl(142_70%_45%/0.2)] text-[hsl(142_70%_60%)] hover:bg-[hsl(142_70%_45%/0.3)] transition-colors">
                        Live ↗
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors" title="View on GitHub">
                      <Github size={16} />
                    </a>
                  </div>
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

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

      <AnimatePresence>
        {activeProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative">
              <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{activeProject.icon}</div>
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
                      <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium ${node.color}`}>{node.label}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Key Features</span>
                  <ul className="mt-3 space-y-2">
                    {activeProject.metrics.map((m) => (
                      <li key={m} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={activeProject.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Github size={15} />
                    View on GitHub
                  </a>
                  {activeProject.liveLink && (
                    <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[hsl(142_70%_45%/0.4)] text-[hsl(142_70%_60%)] text-sm font-medium hover:bg-[hsl(142_70%_45%/0.1)] transition-colors">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;
