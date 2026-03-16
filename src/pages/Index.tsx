import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <TechStack />
      <Experience />
      <Contact />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 Vaibhavi Dhenge · Backend Developer &nbsp;|&nbsp; Java, Spring Boot, PostgreSQL &amp; Node.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
