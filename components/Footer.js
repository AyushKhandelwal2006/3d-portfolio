import { Github, Linkedin, Mail } from "lucide-react";
import LighthouseIcon from "./LighthouseIcon";

export default function Footer() {
  return (
    <footer style={{ borderTop:"0.5px solid rgba(255,255,255,0.05)", padding:"4rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"2rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          <LighthouseIcon size={28} />
          <div>
            <p className="display-text" style={{ fontSize:"1rem", color:"var(--star-white)" }}>Ayush Khandelwal</p>
            <p className="mono-text" style={{ color:"var(--muted)", fontSize:"0.6rem", marginTop:"2px" }}>Frontend Engineer · 2024</p>
          </div>
        </div>

        <div style={{ display:"flex", gap:"1.5rem", alignItems:"center" }}>
          {[
            { href:"https://github.com/AyushKhandelwal2006", Icon:Github },
            { href:"https://www.linkedin.com/in/ayush-khandelwal-39783529a", Icon:Linkedin },
            { href:"mailto:ayushkhandelwal1974@gmail.com", Icon:Mail },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color:"var(--muted)", cursor:"none", transition:"color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--star-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="mono-text" style={{ color:"var(--muted)", fontSize:"0.62rem" }}>
          Built with Next.js · Framer Motion · Three.js
        </p>
      </div>
    </footer>
  );
}