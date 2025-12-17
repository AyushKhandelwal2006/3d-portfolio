export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Tailwind", "Three.js", "Git",
    "C", "Python"
  ];

  return (
    <section id="skills" className="py-24 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl bg-white/5 border border-white/10 py-4 text-center hover:border-primary hover:text-primary transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
