export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Tailwind", "Three.js", "Git",
    "C", "Python"
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-10 overflow-hidden"
    >
    
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-purple-600/20 blur-[160px]" />
      </div>

      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl bg-black/60
              border border-white/10
              py-4 text-center
              hover:border-primary
              hover:text-primary
              transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
