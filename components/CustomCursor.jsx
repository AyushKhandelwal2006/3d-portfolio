import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      }, 60);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="cursor-trail"
        style={{ left: trail.x, top: trail.y }}
      />
    </>
  );
}
