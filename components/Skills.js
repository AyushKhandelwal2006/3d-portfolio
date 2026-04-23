import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skillGroups = [
  { category:"Core Systems",       icon:"⬡", accent:"var(--aurora)", skills:["React","Next.js","Node.js","JavaScript","TypeScript"] },
  { category:"Visual Engine",      icon:"◈", accent:"var(--ember)",  skills:["Three.js","React Three Fiber","Framer Motion","GSAP","TailwindCSS"] },
  { category:"Engineering Rigour", icon:"◎", accent:"#a78bfa",       skills:["Git","CI/CD","Performance Auditing","Python","C"] },
];

const activityFeed = [
  { time:"now",    label:"Optimising 3D portfolio motion pipeline",               color:"var(--aurora)" },
  { time:"2d ago", label:"Shipped Imperial Stays auth middleware refactor",        color:"var(--ember)"  },
  { time:"4d ago", label:"Exploring GSAP ScrollTrigger depth orchestration",       color:"#a78bfa"       },
  { time:"1w ago", label:"Implemented SWR revalidation in Rohit Sharma project",  color:"#f59e0b"       },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"8rem 1.5rem", position:"relative" }}>
      <div className="atm-orb" style={{ width:700, height:700, top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"radial-gradient(circle,rgba(167,139,250,0.06) 0%,transparent 70%)" }} />

      <div className="max-w-6xl mx-auto" style={{ position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          style={{ marginBottom:"4rem" }}>
          <p className="mono-text" style={{ color:"var(--aurora)", marginBottom:"0.75rem" }}>/ engineering identity</p>
          <h2 className="display-text" style={{ fontSize:"clamp(2.2rem,4vw,3.5rem)", color:"var(--star-white)" }}>My Stack</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
          {/* Skill groups */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            {skillGroups.map((group, gi) => (
              <GlassCard key={group.category} delay={gi * 0.1}>
                <div style={{ padding:"1.75rem" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"1.25rem" }}>
                    <span style={{ color:group.accent, fontSize:"1rem" }}>{group.icon}</span>
                    <span className="mono-text" style={{ color:group.accent }}>{group.category}</span>
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                    {group.skills.map((skill, si) => (
                      <motion.div key={skill} className="skill-tag"
                        initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
                        viewport={{ once:true }} transition={{ delay:gi*0.1+si*0.05, duration:0.4 }}>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Activity Pulse */}
          <GlassCard delay={0.3}>
            <div style={{ padding:"1.75rem", height:"100%" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"1.5rem" }}>
                <div className="status-dot" />
                <span className="mono-text" style={{ color:"var(--aurora)" }}>/ activity pulse</span>
              </div>
              <p style={{ color:"var(--muted)", fontSize:"0.8rem", marginBottom:"1.5rem" }}>What I'm building & learning right now.</p>

              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {activityFeed.map((item, i) => (
                  <motion.div key={i} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }} transition={{ delay:0.3+i*0.1, duration:0.5 }}
                    style={{ display:"flex", gap:"12px", alignItems:"flex-start", paddingBottom:"1rem",
                      borderBottom: i < activityFeed.length-1 ? "0.5px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:item.color, flexShrink:0, marginTop:"6px" }} />
                    <div>
                      <p style={{ color:"var(--star-white)", fontSize:"0.83rem", lineHeight:1.5 }}>{item.label}</p>
                      <p className="mono-text" style={{ color:"var(--muted)", fontSize:"0.62rem", marginTop:"2px" }}>{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop:"1.5rem", padding:"1rem", background:"rgba(78,205,196,0.05)", border:"0.5px solid rgba(78,205,196,0.15)", borderRadius:"10px" }}>
                <p className="mono-text" style={{ color:"var(--aurora)", marginBottom:"4px", fontSize:"0.62rem" }}>current focus</p>
                <p style={{ color:"var(--star-white)", fontSize:"0.85rem" }}>Mastering GSAP ScrollTrigger + R3F depth orchestration</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
