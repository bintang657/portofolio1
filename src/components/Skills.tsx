import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 80 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python / Django', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'Docker', level: 75 },
    ],
  },
  {
    title: 'Design & Tools',
    icon: '🛠️',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS / Cloud', level: 75 },
      { name: 'Testing', level: 85 },
    ],
  },
];

const techLogos = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Docker',
  'AWS', 'GraphQL', 'PostgreSQL', 'Figma', 'Git',
  'Next.js', 'Tailwind',
];

function SkillBar({ name, level, delay, isInView }: { name: string; level: number; delay: number; isInView: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="text-white/40">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary-light"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative z-10 py-32">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4 block">What I Do</span>
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Marquee tech logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-xl text-sm font-medium text-white/60 whitespace-nowrap hover:text-white hover:border-primary/40 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-[Space_Grotesk]">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.5 + catIndex * 0.15 + skillIndex * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
