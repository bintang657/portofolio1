import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-xl font-bold font-[Space_Grotesk] gradient-text">
              Bintang.dev
            </a>
            <p className="text-white/30 text-sm mt-2">Bintang Developer — Crafting digital experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/30 hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/20"
          >
            © 2024 Bintang Developer. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
