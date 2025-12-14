import { motion } from "framer-motion";

const projects = [
  {
    title: "3D Portfolio Website",
    description: "A Next.js + Three.js based portfolio with interactive 3D models.",
    tech: "Next.js • Three.js • TailwindCSS",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting using open weather API.",
    tech: "React • API • TailwindCSS",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-slate-300 mb-3">{project.description}</p>
            <p className="text-sm text-blue-400 mb-4">{project.tech}</p>

            <a
              className="text-primary font-semibold"
              href={project.link}
              target="_blank"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

