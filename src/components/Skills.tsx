import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "Next.js", "Flutter", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Firebase", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Hive"],
  },
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript"],
  },
  {
    title: "Security",
    skills: ["API Validation", "SSH", "Token Auth", "RBAC"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code", "IntelliJ"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover-tilt"
              >
                <h3 className="font-display font-semibold text-primary mb-4 text-lg">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
