import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <section className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Hi, I’m Ayush — I build immersive <span className="text-primary">3D web experiences</span>.
          </motion.h1>

          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="mt-4 text-slate-300 max-w-xl">
            Frontend dev experimenting with React Three Fiber, Tailwind, and cinematic UI. I make small ideas feel big.I love to learn and always eager to explore new domains.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-lg bg-primary text-white font-medium shadow hover:brightness-105 transition">See Projects
              
            </a>
          </motion.div>

          <div className="mt-6 text-sm text-slate-500">Available for internships & cool projects.</div>
        </div>

        <div className="w-full">
          <ThreeScene />
        </div>
      </div>
    </section>
  )
}

