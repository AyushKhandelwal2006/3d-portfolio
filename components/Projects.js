export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
     
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary transition">
          <h3 className="text-2xl font-semibold mb-2">
            Foodiehub 
          </h3>

          <p className="text-gray-300 mb-4">
            A Next.js + Three.js + TailwindCSS based project 
          </p>

          <p className="text-sm text-primary mb-4">
            Next.js · Three.js · TailwindCSS · Lucide Icons
          </p>

          <a
            href="https://foodiehub-lake.vercel.app/"
            className="text-primary hover:text-primaryDark transition"
          >
            View Project →
          </a>
        </div>

       
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary transition">
          <h3 className="text-2xl font-semibold mb-2">
            Rohit Sharma Portfolio Website
          </h3>

          <p className="text-gray-300 mb-4">
            A  frontend focused project with stats, career timeline and gallery access.
          </p>

          <p className="text-sm text-primary mb-4">
            React · API · TailwindCSS · Next.js
          </p>

          <a
           
            href="https://rohit-sharma-portfolio-tau.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
  className="text-primary hover:text-primaryDark transition"
>
  View Project →
</a>
</div>

      </div>
    </section>
  );
}


