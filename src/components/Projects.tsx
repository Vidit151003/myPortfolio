import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import todoImg from "@/assets/project-todo.jpg";
import newsImg from "@/assets/project-news.jpg";
import lawImg from "@/assets/project-lawfirm.jpg";

const projects = [
  {
    title: "ToDo Application",
    description: "Full-stack task management app with React + Express.js REST APIs, backed by MongoDB. Optimized task retrieval by ~30% through MongoDB indexing.",
    image: todoImg,
    tags: ["React", "Express.js", "MongoDB", "REST APIs"],
    metrics: ["100% API coverage", "30% faster retrieval", "500+ test records"],
  },
  {
    title: "News App",
    description: "Fast, responsive React.js news aggregator with live updates, region-based feeds, and optimized caching reducing API usage by 60%.",
    image: newsImg,
    tags: ["React.js", "REST APIs", "Caching", "Google Analytics"],
    metrics: ["60% less API usage", "25% longer sessions"],
  },
  {
    title: "Law Firm App",
    description: "Cross-platform legal platform (Web + Mobile) with Firebase real-time database, secure auth, role-based access, and document management.",
    image: lawImg,
    tags: ["Flutter", "Firebase", "REST APIs", "RBAC"],
    metrics: ["20% more daily active users", "Real-time sync"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card overflow-hidden group hover-tilt"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-foreground text-lg">{project.title}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
