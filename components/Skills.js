export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Three.js', 'Git', 'C', 'Python']
  return (
    <section id="skills" className="mt-6">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl card-shadow">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map(s => (
            <div key={s} className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-center text-sm">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
