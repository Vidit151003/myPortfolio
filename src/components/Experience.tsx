import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Telecom Engineering Center, Govt. of India",
    role: "Research Intern",
    period: "Jan 2026 — Present",
    location: "New Delhi, India",
    points: [
      "Researched under Conformity Assessment Department on technical standards implementation.",
      "Analyzed testing and certification requirements for telecom & ICT equipment (DoT regulations).",
      "Resolved certificate approval queries on the MTCTE portal.",
      "Conducted research on national/international telecom standards.",
    ],
  },
  {
    company: "Fate",
    role: "Software Engineering Intern",
    period: "Jun 2025 — Sep 2025",
    location: "New Delhi",
    points: [
      "Developed responsive web interfaces with React.js & Node.js — 30% faster loading.",
      "Integrated AI/ML-powered APIs — boosted engagement by 20%.",
      "Optimized backend API performance and debugged UI across platforms.",
    ],
  },
  {
    company: "Zymo",
    role: "Software Engineering Team Lead",
    period: "May 2025",
    location: "Remote",
    points: [
      "Led React.js frontend optimization — 15% bounce rate reduction.",
      "Integrated Twilio, ZoomCar APIs — 25% faster data sync.",
      "Refactored codebase — 20% fewer crashes (Firebase Crashlytics).",
    ],
  },
  {
    company: "Zymo",
    role: "Application Developer Intern",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    points: [
      "Led frontend dev enhancements, reducing bounce rate by 15%.",
      "Collaborated with backend teams on functional requirements.",
      "Refactored codebase for maintainability and null safety.",
    ],
  },
  {
    company: "Upscale",
    role: "Software Engineering Intern",
    period: "Jan 2024 — Jun 2024",
    location: "New Delhi, India",
    points: [
      "Built Flutter-based legal platform with Firebase real-time sync.",
      "Implemented secure auth and clean, intuitive UI.",
      "Designed secure anonymous interaction systems.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[18px] top-5 w-3 h-3 rounded-full bg-primary glow" />

                  <div
                    className="glass-card p-5 cursor-pointer hover:border-primary/30 transition-all"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-primary" />
                          <span className="text-xs text-primary font-mono">{exp.period}</span>
                        </div>
                        <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company} · {exp.location}</p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-muted-foreground transition-transform shrink-0 mt-1 ${expanded === i ? "rotate-180" : ""}`}
                      />
                    </div>

                    {expanded === i && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 space-y-2"
                      >
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            {point}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
