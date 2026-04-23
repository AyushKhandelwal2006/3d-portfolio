import { motion } from "framer-motion";

export default function LighthouseIcon({ size = 80 }) {
  return (
    <div style={{ position: "relative", width: size, height: size * 1.5 }}>
      <motion.div
        style={{
          position: "absolute", bottom: size * 0.35, left: "50%",
          transformOrigin: "bottom center",
          width: 1.5, height: size * 2.2,
          background: "linear-gradient(to top, rgba(78,205,196,0.8), transparent)",
          borderRadius: 2,
        }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg"
        width={size} height={size * 1.5} style={{ position: "relative", zIndex: 1 }}>
        <rect x="18" y="76" width="24" height="12" rx="3"
          fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
        <path d="M22 76 L18 30 L42 30 L38 76 Z"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <rect x="18.5" y="55" width="23" height="5" fill="rgba(255,107,53,0.15)" />
        <rect x="19.5" y="45" width="21" height="5" fill="rgba(255,107,53,0.1)" />
        <rect x="16" y="22" width="28" height="10" rx="2"
          fill="rgba(78,205,196,0.15)" stroke="rgba(78,205,196,0.3)" strokeWidth="0.5" />
        <motion.circle cx="30" cy="27" r="4" fill="rgba(78,205,196,0.9)"
          animate={{ opacity: [0.6, 1, 0.6], r: [3.5, 5, 3.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <path d="M20 22 L30 10 L40 22 Z"
          fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <line x1="16" y1="22" x2="44" y2="22" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <rect x="26" y="66" width="8" height="10" rx="4"
          fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}