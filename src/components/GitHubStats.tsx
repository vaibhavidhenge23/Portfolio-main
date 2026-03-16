import { motion } from "framer-motion";
import { Github, GitBranch, Star, Code2 } from "lucide-react";

const stats = [
  { label: "GitHub Profile", value: "vaibhavidhenge23", icon: <Github size={18} />, href: "https://github.com/vaibhavidhenge23" },
  { label: "Repositories", value: "Public Projects", icon: <GitBranch size={18} />, href: "https://github.com/vaibhavidhenge23?tab=repositories" },
  { label: "Primary Language", value: "Java", icon: <Code2 size={18} />, href: null },
  { label: "Also Works In", value: "JavaScript / Node.js", icon: <Star size={18} />, href: null },
];

const GitHubStats = () => {
  return (
    <section id="github" className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Open Source</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub stats card via shields/readme-stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Github size={20} className="text-primary" />
              <span className="font-semibold text-foreground">GitHub Stats</span>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=vaibhavidhenge23&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=9ca3af"
              alt="GitHub Stats"
              className="w-full rounded-lg"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaibhavidhenge23&layout=compact&theme=dark&bg_color=00000000&hide_border=true&title_color=3b82f6&text_color=9ca3af"
              alt="Top Languages"
              className="w-full rounded-lg"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:glow-border transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary">{s.icon}</span>
                      <div>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-medium text-foreground">{s.value}</p>
                      </div>
                    </div>
                    <Github size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ) : (
                  <div className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                    <span className="text-primary">{s.icon}</span>
                    <div>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-medium text-foreground">{s.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
