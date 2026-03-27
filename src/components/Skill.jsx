import React from 'react';
import { motion } from 'framer-motion';
// Lucide-react is much more stable with Vite
import { Code2, Database, Terminal, Palette } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: Code2, 
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Data & API",
    icon: Database,
    skills: ["RESTful API Integration", "JSON", "Asynchronous Programming", "Fetch/Axios"]
  },
  {
    category: "Workflow",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "npm/Vite"]
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["Figma-to-Code", "Responsive Web Design (RWD)", "Mobile-First Workflow", "Cross-Browser Compatibility"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const DevelopmentToolkit = () => {
  return (
    <section className="py-16 bg-zinc-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-violet-600 font-semibold tracking-wide uppercase">My Capabilities</h2>
          <p className="text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">Development Toolkit</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillsData.map((item, index) => {
            const IconComponent = item.icon; 
            
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-zinc-100">
                  <div className="p-3 bg-violet-50 rounded-xl text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">{item.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentToolkit;