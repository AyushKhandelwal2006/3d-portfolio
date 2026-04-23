import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ParticleField from "./ParticleField";
import LighthouseIcon from "./LighthouseIcon";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const wordVariant = {
  hidden:  { opacity: 0, y: 48, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16,1,0.3,1] } },
};

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <ParticleField />

      {/* Atmosphere orbs */}
      <div className="atm-orb" style={{ width:700, height:700, top:"-20%", left:"-10%", background:"radial-gradient(circle, rgba(78,205,196,0.08) 0%, transparent 70%)" }} />
      <div className="atm-orb" style={{ width:600, height:600, bottom:"-20%", right:"-5%", background:"radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 w-full" style={{
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem",
        alignItems:"center", position:"relative", zIndex:1,
        paddingTop:"6rem", paddingBottom:"6rem"
      }}>
        {/* Left — Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Status badge */}
          <motion.div variants={wordVariant} style={{ marginBottom:"2rem" }}>
            <div className="glass-card" style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 16px", borderRadius:"100px" }}>
              <div className="status-dot" />
              <span className="mono-text" style={{ color:"var(--muted)", fontSize:"0.68rem" }}>
                Available for internships & cool projects
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={wordVariant} className="display-text"
            style={{ fontSize:"clamp(2.8rem,5vw,4.5rem)", color:"var(--star-white)", marginBottom:"0.5rem" }}>
            Building at the
          </motion.h1>
          <motion.h1 variants={wordVariant} className="display-text"
            style={{ fontSize:"clamp(2.8rem,5vw,4.5rem)", background:"linear-gradient(135deg,#4ecdc4 0%,#ff6b35 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:"0.5rem" }}>
            intersection
          </motion.h1>
          <motion.h1 variants={wordVariant} className="display-text"
            style={{ fontSize:"clamp(2.8rem,5vw,4.5rem)", color:"var(--star-white)" }}>
            of 3D & Web.
          </motion.h1>

          <motion.p variants={wordVariant}
            style={{ marginTop:"1.75rem", color:"var(--muted)", fontSize:"1.05rem", lineHeight:1.75, maxWidth:"480px" }}>
            Frontend engineer crafting immersive, performant digital experiences.
            Specialising in React Three Fiber, cinematic motion design, and scalable UI architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={wordVariant} style={{ marginTop:"2.5rem", display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <a href="#projects" className="shimmer-btn" style={{ padding:"12px 28px", fontSize:"0.9rem", cursor:"none" }}>
              View Work
            </a>
            <a href="mailto:ayushkhandelwal1974@gmail.com" className="outline-btn" style={{ padding:"12px 28px", fontSize:"0.9rem", cursor:"none" }}>
              Get in Touch
            </a>
          </motion.div>

          {/* Lighthouse tag */}
          <motion.div variants={wordVariant} style={{ marginTop:"3.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
            <LighthouseIcon size={40} />
            <div>
              <p className="mono-text" style={{ color:"var(--aurora)", marginBottom:"2px" }}>/ guidance in the sea of data</p>
              <p style={{ color:"var(--muted)", fontSize:"0.78rem" }}>Every line of code is a beacon.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Three.js */}
        <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.2, delay:0.4, ease:[0.16,1,0.3,1] }} style={{ position:"relative" }}>
          <div style={{ position:"absolute", inset:"-30px", borderRadius:"50%", background:"radial-gradient(circle,rgba(78,205,196,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />
          <ThreeScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"8px", zIndex:1 }}>
        <span className="mono-text" style={{ color:"var(--muted)", fontSize:"0.6rem" }}>scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" }}
          style={{ width:1, height:32, background:"linear-gradient(to bottom,var(--muted),transparent)" }} />
      </motion.div>
    </section>
  );
}