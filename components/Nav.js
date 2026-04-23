import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Portfolio",  href: "#projects" },
  { label: "Philosophy", href: "#about"    },
  { label: "Skills",     href: "#skills"   },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,  opacity: 1  }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="nav-blur sticky top-0 z-50 w-full"
      style={{ boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.4)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" style={{ cursor: "none", textDecoration: "none" }}>
          <span className="display-text" style={{ fontSize: "1.1rem", color: "var(--star-white)" }}>AK</span>
          <span className="mono-text ml-2" style={{ color: "var(--muted)", fontSize: "0.65rem" }}>/ portfolio</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ cursor: "none", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--aurora)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials + CTA */}
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/AyushKhandelwal2006", Icon: Github },
            { href: "https://www.linkedin.com/in/ayush-khandelwal-39783529a", Icon: Linkedin },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{ cursor: "none", color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--star-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
              <Icon size={18} />
            </a>
          ))}
          <a href="mailto:ayushkhandelwal1974@gmail.com"
            className="shimmer-btn"
            style={{ cursor: "none", padding: "7px 18px", fontSize: "0.8rem" }}>
            Hire →
          </a>
        </div>
      </div>
    </motion.nav>
  );
}