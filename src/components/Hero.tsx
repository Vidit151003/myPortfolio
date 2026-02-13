import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "MERN Specialist",
  "Flutter Developer",
  "AI Integration Engineer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPED = 2000;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      const next = currentRole.slice(0, displayText.length + 1);
      setDisplayText(next);
      if (next === currentRole) {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
        return;
      }
    } else {
      const next = currentRole.slice(0, displayText.length - 1);
      setDisplayText(next);
      if (next === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Warm gradient background for light, cool for dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(var(--primary)/0.08)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,_hsla(var(--accent)/0.06)_0%,transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image - large and centered like references */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <img
                src={profileImg}
                alt="Vidit Dixit"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover animate-float"
              />
            </div>
          </motion.div>

          {/* Split text inspired by reference */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-right"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                developer
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-[250px]">
                Building scalable full-stack apps with modern technologies.
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl md:text-7xl font-bold gradient-text"
            >
              Vidit Dixit
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-left"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                {"<coder>"}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-[250px]">
                Passionate about clean architecture and exceptional UX.
              </p>
            </motion.div>
          </div>

          {/* Typewriter role subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-10 mb-8"
          >
            <span className="text-xl md:text-2xl font-display gradient-text font-semibold inline-block min-w-[280px]">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 flex items-center gap-2 glow"
            >
              View Projects <ExternalLink size={16} />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              Contact Me <FileDown size={16} />
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
