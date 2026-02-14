import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";



export default function Home({ theme, toggleTheme }) {
  return (
    <main className="min-h-screen bg-black text-white">
      

      <section id="hero"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
    </main>
  );
}
