import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import LighthouseIcon from "./LighthouseIcon";

const values = [
  { icon:"◈", title:"Scalability First",      color:"var(--aurora)", body:"Architecture decisions are made for the codebase at 10×, not just today. Clean abstractions, atomic components." },
  { icon:"⬡", title:"User-Centric Design",    color:"var(--ember)",  body:"Every micro-interaction is intentional. Performance is a feature. Sub-16ms render loops, zero layout shift." },
  { icon:"◎", title:"Continuous Learning",    color:"#a78bfa",       body:"The frontier of frontend moves fast. R3F, GSAP, Server Components — I chase the edge, not the comfortable." },
];

export default function About() {
  return (
    <section id="about" style={{ padding:"8rem 1.5rem", position:"relative" }}>
      <div className="atm-orb" style={{ width:500, height:500, top:"20%", right:"-10%", background:"radial-gradient(circle,rgba(255,107,53,0.07) 0%,transparent 70%)" }} />

      <div className="max-w-6xl mx-auto" style={{ position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          style={{ marginBottom:"4rem" }}>
          <p className="mono-text" style={{ color:"var(--ember)", marginBottom:"0.75rem" }}>/ philosophy</p>
          <h2 className="display-text" style={{ fontSize:"clamp(2.2rem,4vw,3.5rem)", color:"var(--star-white)" }}>The Engineer Behind the Work</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:"2rem", alignItems:"start" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            <GlassCard delay={0}>
              <div style={{ padding:"2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", marginBottom:"1.5rem" }}>
                  <LighthouseIcon size={52} />
                  <div>
                    <h3 className="display-text" style={{ fontSize:"1.3rem", color:"var(--star-white)" }}>Ayush Khandelwal</h3>
                    <p className="mono-text" style={{ color:"var(--muted)", fontSize:"0.68rem", marginTop:"4px" }}>frontend engineer · first year · always building</p>
                  </div>
                </div>
                <p style={{ color:"var(--muted)", lineHeight:1.8, fontSize:"0.92rem" }}>
                  I'm a first-year computer science student who builds before understanding everything —
                  because that's the fastest path to understanding. I specialise in immersive frontend
                  experiences: React Three Fiber scenes, GSAP-driven storytelling, and UI systems that feel intentional rather than assembled.
                </p>
                <p style={{ color:"var(--muted)", lineHeight:1.8, fontSize:"0.92rem", marginTop:"1rem" }}>
                  My goal is to close the gap between engineering rigour and creative vision — to build
                  things that are as elegant under the hood as they are on screen.
                </p>
              </div>
            </GlassCard>

            {values.map((v, i) => (
              <GlassCard key={v.title} delay={0.1*(i+1)}>
                <div style={{ padding:"1.5rem 2rem", display:"flex", gap:"1rem", alignItems:"flex-start" }}>
                  <span style={{ color:v.color, fontSize:"1.1rem", flexShrink:0 }}>{v.icon}</span>
                  <div>
                    <p style={{ color:"var(--star-white)", fontWeight:500, marginBottom:"4px", fontSize:"0.9rem" }}>{v.title}</p>
                    <p style={{ color:"var(--muted)", fontSize:"0.82rem", lineHeight:1.65 }}>{v.body}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            {[
              { label:"Projects Shipped",       value:"4+",    accent:"var(--ember)"  },
              { label:"Technologies Used",       value:"10+",   accent:"var(--aurora)" },
              { label:"Lighthouse Score Target", value:"100",   accent:"#a78bfa"       },
              { label:"Learning Mode",           value:"Always",accent:"#f59e0b"       },
            ].map((stat, i) => (
              <GlassCard key={stat.label} delay={0.15*i}>
                <div style={{ padding:"1.75rem 2rem" }}>
                  <motion.p className="display-text"
                    style={{ fontSize:"3rem", color:stat.accent, lineHeight:1 }}
                    initial={{ opacity:0, scale:0.7 }} whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }} transition={{ delay:0.2+i*0.1, duration:0.5, ease:[0.16,1,0.3,1] }}>
                    {stat.value}
                  </motion.p>
                  <p style={{ color:"var(--muted)", fontSize:"0.8rem", marginTop:"6px" }}>{stat.label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}