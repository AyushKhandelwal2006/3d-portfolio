import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Khandelwal — Frontend Engineer</title>
        <meta name="description" content="Frontend engineer crafting immersive 3D web experiences with React, Next.js, and Three.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.main initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.4 }}
        style={{ minHeight:"100vh", background:"var(--obsidian)", color:"var(--star-white)" }}>
        <Nav />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </motion.main>
    </>
  );
}