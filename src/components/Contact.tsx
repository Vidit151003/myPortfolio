import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:itsviditdixit1@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "itsviditdixit1@gmail.com", href: "mailto:itsviditdixit1@gmail.com" },
                  { icon: Phone, text: "+91 8923462893", href: "tel:+918923462893" },
                  { icon: MapPin, text: "Noida, Uttar Pradesh, India", href: "#" },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </a>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name" as const, placeholder: "Your Name", type: "text" },
                { name: "email" as const, placeholder: "Your Email", type: "email" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                />
              ))}
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 glow"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border/50">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Vidit Dixit. Built with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
