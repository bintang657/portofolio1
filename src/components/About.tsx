import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative z-10 py-32">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4 block">Who Am I</span>
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin-slow_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent/10 animate-[spin-slow_15s_linear_infinite_reverse]" />
              
              {/* Avatar */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.ibb.co/tMcrT8fC/photo.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-4 right-4 glass-card rounded-xl px-3 py-2 text-xs font-medium"
              >
                🎨 UI/UX
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute bottom-8 left-0 glass-card rounded-xl px-3 py-2 text-xs font-medium"
              >
                ⚡ Full-Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute bottom-20 right-0 glass-card rounded-xl px-3 py-2 text-xs font-medium"
              >
                🚀 Performance
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-[Space_Grotesk]">
              Hi, I'm <span className="gradient-text">Bintang Developer</span> 👋
            </h3>
            <p className="text-white/50 leading-relaxed">
              Seorang developer dari <strong className="text-white/70">Banyuwangi, Indonesia</strong> dengan pengalaman lebih dari 5 tahun di bidang web development. 
              Saya spesialisasi dalam membangun aplikasi web modern, responsif, dan interaktif. 
              Passion saya adalah menciptakan user experience yang menggabungkan desain estetik dengan fungsionalitas yang kuat.
            </p>
            <p className="text-white/50 leading-relaxed">
              Saya percaya pada clean code, arsitektur modern, dan mendorong batas-batas apa yang 
              mungkin di web. Dari konsep hingga deployment, saya menangani setiap aspek proses 
              pengembangan dengan perhatian pada detail yang teliti.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🎯', title: 'Problem Solver', desc: 'Creative solutions' },
                { icon: '💡', title: 'Innovator', desc: 'Cutting-edge tech' },
                { icon: '🤝', title: 'Team Player', desc: 'Collaborative spirit' },
                { icon: '📚', title: 'Learner', desc: 'Always growing' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-white/40 text-xs">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
