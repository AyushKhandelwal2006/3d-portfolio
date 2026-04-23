import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const projects = [
  {
    id: "01", title: "FoodieHub", tagline: "Full-stack restaurant discovery platform",
    description: "A performant food discovery experience engineered with Next.js App Router and Three.js product showcases. Built with a focus on sub-second load times and fluid UX transitions.",
    stack: ["Next.js", "Three.js", "TailwindCSS", "Lucide Icons"],
    win: "Achieved <1s LCP via image pipeline optimisation & lazy Three.js loading",
    architecture: "Next.js 14 → API Routes → Vercel Edge",
    pivot: "Migrated from client-side state to server components, cutting bundle by 38%.",
    href: "https://foodiehub-lake.vercel.app/", accent: "var(--ember)",
  },
  {
    id: "02", title: "Rohit Sharma Portfolio", tagline: "Data-driven athlete showcase with live stats",
    description: "A frontend-focused project featuring real-time API integration, career timeline visualisation, and dynamic gallery — built for performance and editorial clarity.",
    stack: ["React", "Next.js", "TailwindCSS", "REST API"],
    win: "Dynamic data from cricket APIs rendered with zero layout shift (CLS = 0)",
    architecture: "React → SWR → External Sports API → CDN",
    pivot: "Replaced polling with SWR's revalidation strategy, eliminating stale-data flickering.",
    href: "https://rohit-sharma-portfolio-tau.vercel.app/", accent: "var(--aurora)",
  },
  {
    id: "03", title: "Digital Freeform Board", tagline: "Real-time collaborative canvas — neobrutalist edition",
    description: "An interactive digital board experience with a neobrutalist design system. Focused on low-latency pointer events and a cohesive, intentional UI language.",
    stack: ["React", "Next.js", "TailwindCSS", "UI/UX Systems"],
    win: "Pointer latency kept under 16ms via requestAnimationFrame rendering loop",
    architecture: "React Canvas → Custom Hook Layer → LocalStorage Sync",
    pivot: "Replaced CSS transforms with direct canvas draw calls for 3× smoother interaction.",
    href: "https://csi-inky.vercel.app/", accent: "#a78bfa",
  },
  {
    id: "04", title: "Imperial Stays", tagline: "Hotel booking system with protected auth flow",
    description: "A modern booking platform featuring protected routes, real-time state management, and debounce-optimised search — engineered for reliability and conversion.",
    stack: ["React", "Next.js", "TailwindCSS", "Auth"],
    win: "Debounce + memoisation cut redundant API calls by 60% during search",
    architecture: "Next.js → Protected Routes → Optimistic UI → API Layer",
    pivot: "Moved auth guard to middleware layer, eliminating flash-of-unauthenticated-content.",
    href: "https://imperial-stays.vercel.app/", accent: "#f59e0b",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"8rem 1.5rem", position:"relative" }}>
      <div className="atm-orb" style={{ width:800, height:500, top:"10%", left:"50%", transform:"translateX(-50%)", background:"radial-gradient(ellipse,rgba(78,205,196,0.05) 0%,transparent 70%)" }} />

      <div className="max-w-6xl mx-auto" style={{ position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          style={{ marginBottom:"5rem" }}>
          <p className="mono-text" style={{ color:"var(--ember)", marginBottom:"0.75rem" }}>/ case study vault</p>
          <h2 className="display-text" style={{ fontSize:"clamp(2.2rem,4vw,3.5rem)", color:"var(--star-white)" }}>Selected Work</h2>
          <p style={{ color:"var(--muted)", marginTop:"0.75rem", maxWidth:"480px", lineHeight:1.7 }}>
            Each project is a deliberate exploration of a technical challenge — built with scalability, maintainability, and user intent at the core.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,520px),1fr))", gap:"1.5rem" }}>
          {projects.map((p, i) => (
            <GlassCard key={p.id} delay={i * 0.1} hover={false} className="project-card">
              <div style={{ padding:"2rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.25rem" }}>
                  <div>
                    <span className="mono-text" style={{ color:p.accent }}>{p.id}</span>
                    <h3 className="display-text" style={{ fontSize:"1.4rem", color:"var(--star-white)", marginTop:"4px" }}>{p.title}</h3>
                    <p style={{ color:"var(--muted)", fontSize:"0.82rem", marginTop:"2px" }}>{p.tagline}</p>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    style={{ cursor:"none", color:p.accent, fontSize:"1.4rem", lineHeight:1, transition:"transform 0.2s", flexShrink:0, textDecoration:"none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(3px,-3px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>↗</a>
                </div>

                <p style={{ color:"var(--muted)", fontSize:"0.88rem", lineHeight:1.75, marginBottom:"1.5rem" }}>{p.description}</p>

                {/* Tech Spotlight */}
                <div style={{ background:"rgba(0,0,0,0.3)", border:"0.5px solid rgba(255,255,255,0.05)", borderRadius:"12px", padding:"1rem 1.25rem", marginBottom:"1.25rem" }}>
                  <p className="mono-text" style={{ color:p.accent, marginBottom:"0.75rem" }}>/ technical spotlight</p>
                  {[
                    { icon:"⚡", label:"Win",  text:p.win },
                    { icon:"⬡", label:"Arch", text:p.architecture },
                    { icon:"↻", label:"Pivot",text:p.pivot },
                  ].map(({ icon, label, text }) => (
                    <div key={label} style={{ display:"flex", gap:"8px", marginBottom:"0.4rem" }}>
                      <span style={{ color:"var(--muted)", fontSize:"0.75rem", flexShrink:0 }}>{icon} {label}</span>
                      <span style={{ color:"var(--star-white)", fontSize:"0.78rem", lineHeight:1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {p.stack.map((s) => (
                    <span key={s} className="mono-text" style={{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.08)", borderRadius:"6px", padding:"3px 10px", color:"var(--muted)", fontSize:"0.67rem" }}>{s}</span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}