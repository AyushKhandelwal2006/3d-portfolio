import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.15,
        y: prev.y + (mouse.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(follow);
    };
    follow();
  }, [mouse]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: mouse.x, top: mouse.y }}
      />
      <div
        className="cursor-follower"
        style={{ left: follower.x, top: follower.y }}
      />
    </>
  );
}
