import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl card-shadow">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          I am a first-year student learning programming, building projects, and exploring modern frontend tech.
          I love solving problems and learning by doing. I’m comfortable with JavaScript, React, and I’m picking up
          UI/UX and 3D concepts quickly.
        </p>
      </div>
    </motion.section>
  )
}
