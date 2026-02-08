import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socials = [
  { name: 'GitHub', icon: '🐙', link: '#', color: 'hover:border-white/40' },
  { name: 'LinkedIn', icon: '💼', link: '#', color: 'hover:border-blue-400/40' },
  { name: 'Twitter', icon: '🐦', link: '#', color: 'hover:border-sky-400/40' },
  { name: 'Dribbble', icon: '🏀', link: '#', color: 'hover:border-pink-400/40' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: '📧', title: 'Email', value: 'dwatu8720@gmail.com', subtitle: 'Drop me a line anytime' },
                { icon: '📍', title: 'Location', value: 'Banyuwangi, Indonesia', subtitle: 'Available for remote work' },
                { icon: '⏰', title: 'Availability', value: 'Open to opportunities', subtitle: 'Response within 24h' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="text-2xl mt-1">{item.icon}</div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">{item.title}</div>
                    <div className="font-semibold">{item.value}</div>
                    <div className="text-xs text-white/30 mt-0.5">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-white/40 mb-4">Follow me</h4>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl transition-all ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-white/40 mb-2 block">Your Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/40 mb-2 block">Email Address</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/40 mb-2 block">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden"
            >
              {submitted ? (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  ✅ Message Sent!
                </motion.span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
