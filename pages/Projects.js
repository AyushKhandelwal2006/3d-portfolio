import Projects from "@/components/Projects";
import Nav from "@/components/Nav";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <Projects />
      </div>
    </main>
  );
}
