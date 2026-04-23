import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, vx: 0, vy: 0, lx: 0, ly: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current.lx = mouse.current.x;
      mouse.current.ly = mouse.current.y;
      mouse.current.x  = e.clientX;
      mouse.current.y  = e.clientY;
      mouse.current.vx = mouse.current.x - mouse.current.lx;
      mouse.current.vy = mouse.current.y - mouse.current.ly;
    };
    window.addEventListener("mousemove", onMove);

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * 1920, y: Math.random() * 1080,
        r: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.6 + 0.1,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.1,
        hue: Math.random() > 0.7 ? "ember" : "star",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }
        p.vx += mouse.current.vx * 0.0008;
        p.vy += mouse.current.vy * 0.0008;
        p.vx *= 0.97; p.vy *= 0.97;
        p.x += p.vx;  p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        p.alpha += (Math.random() - 0.5) * 0.015;
        p.alpha = Math.max(0.05, Math.min(0.75, p.alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === "ember"
          ? `rgba(255,120,60,${p.alpha})`
          : `rgba(200,220,255,${p.alpha})`;
        ctx.fill();
      });
      mouse.current.vx *= 0.9;
      mouse.current.vy *= 0.9;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}