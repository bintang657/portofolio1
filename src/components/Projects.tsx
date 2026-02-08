import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'NeuroSync AI',
    description: 'An AI-powered productivity platform with real-time collaboration, smart task management, and predictive analytics.',
    tags: ['React', 'Python', 'OpenAI', 'WebSocket'],
    image: '🧠',
    color: 'from-violet-600 to-indigo-600',
    category: 'web',
  },
  {
    title: 'CryptoVault',
    description: 'A modern cryptocurrency portfolio tracker with real-time charts, alerts, and DeFi integration.',
    tags: ['Next.js', 'TypeScript', 'Web3', 'D3.js'],
    image: '💎',
    color: 'from-cyan-600 to-teal-600',
    category: 'web',
  },
  {
    title: 'Artscape Studio',
    description: 'An immersive 3D art gallery experience built with WebGL, featuring interactive exhibits and spatial audio.',
    tags: ['Three.js', 'GLSL', 'React', 'Blender'],
    image: '🎨',
    color: 'from-pink-600 to-rose-600',
    category: '3d',
  },
  {
    title: 'EcoTrack',
    description: 'A sustainability tracking app helping businesses measure and reduce their carbon footprint with ML insights.',
    tags: ['React Native', 'Node.js', 'TensorFlow', 'IoT'],
    image: '🌿',
    color: 'from-emerald-600 to-green-600',
    category: 'mobile',
  },
  {
    title: 'SoundWave',
    description: 'A music streaming platform with AI-powered recommendations, social features, and live concert streaming.',
    tags: ['Next.js', 'Rust', 'WebRTC', 'ML'],
    image: '🎵',
    color: 'from-orange-600 to-amber-600',
    category: 'web',
  },
  {
    title: 'MetaSpace VR',
    description: 'A virtual reality social platform for remote teams with spatial computing and hand tracking support.',
    tags: ['WebXR', 'Three.js', 'WebRTC', 'Go'],
    image: '🥽',
    color: 'from-blue-600 to-sky-600',
    category: '3d',
  },
];

const categories = ['all', 'web', '3d', 'mobile'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-32">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Image Area */}
              <div className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-7xl"
                >
                  {project.image}
                </motion.div>
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.button>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-[Space_Grotesk] mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/50 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
