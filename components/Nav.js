import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export default function Nav({ theme, toggleTheme }) {
  return (
   <nav className="pointer-events-auto z-[9999] w-full sticky top-0 bg-white/60 backdrop-blur-sm dark:bg-black/40 border-b border-slate-200 dark:border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        
        <a href="/" className="text-xl font-bold">Ayush Khandelwal</a>

       
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm font-medium hover:text-primary">Projects</a>
          <a href="#skills" className="text-sm font-medium hover:text-primary">Skills</a>
         

          
         <a
  href="https://github.com/AyushKhandelwal2006"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline decoration-transparent hover:no-underline"
>
  <Github size={20} />
</a>

          <a
  href="https://www.linkedin.com/in/ayush-khandelwal-39783529a"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline decoration-transparent hover:no-underline"
>
  <Linkedin size={20} />
</a>
<a
  href="mailto:ayushkhandelwal1974@gmail.com"
  className="pointer-events-auto"
  title="Email me"
>
  <Mail size={20} />
</a>

         
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
