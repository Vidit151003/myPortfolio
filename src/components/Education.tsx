import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "B.Tech in Information Technology", school: "JSS Academy of Technical Education, Noida", period: "2022 — 2026", score: "GPA: 7.553" },
  { degree: "Minor in Project Management", school: "JSS Academy of Technical Education, Noida", period: "2023 — 2026", score: "" },
  { degree: "Higher Secondary (CISCE)", school: "St. Peter's College", period: "2021 — 2022", score: "92.25%" },
  { degree: "High School (CISCE)", school: "St. Peter's College", period: "2019 — 2020", score: "95.6%" },
];

const certifications = [
  "Java (Basic) — HackerRank",
  "SQL (Advanced) — HackerRank",
  "NLP — Infosys Springboard",
  "Software Engineering — Electronic Arts",
  "Advanced Software Engineering — Walmart USA",
  "Data Visualization — Tata Group",
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-primary" size={22} />
                <h3 className="font-display font-semibold text-lg text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4"
                  >
                    <h4 className="font-display font-semibold text-foreground text-sm">{edu.degree}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{edu.school}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-primary font-mono">{edu.period}</span>
                      {edu.score && <span className="text-xs text-accent font-mono">{edu.score}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-primary" size={22} />
                <h3 className="font-display font-semibold text-lg text-foreground">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="glass-card px-4 py-3 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
