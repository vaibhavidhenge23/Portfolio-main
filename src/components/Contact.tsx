import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "vaibhavidhenge2302@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Connect</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm looking for full-time Backend / Full-Stack Developer roles. Let's build something great together.
          </p>
        </motion.div>

        {/* Contact form only */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 space-y-5 max-w-xl mx-auto"
        >
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1.5 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1.5 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1.5 block">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-none"
              placeholder="Let's build something amazing..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_hsl(212_100%_48%/0.3)]"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com/vaibhavidhenge23", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vaibhavi-dhenge", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: `mailto:${EMAIL}`, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-border transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
