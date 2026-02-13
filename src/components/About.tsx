import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Full Stack", desc: "MERN, Flutter, Angular" },
    { icon: Globe, label: "5+ Projects", desc: "Shipped & Deployed" },
    { icon: Zap, label: "Optimized", desc: "30% Faster Performance" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full Stack Developer with hands-on experience building scalable web applications 
                using MongoDB, Express.js, React.js, and Node.js. Skilled in developing secure RESTful APIs, 
                responsive frontend interfaces, and performance-optimized backend services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in integrating third-party APIs, improving application scalability, 
                and collaborating across cross-functional teams. Currently pursuing B.Tech in Information Technology 
                at JSS Academy of Technical Education, Noida.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default About;
