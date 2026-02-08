import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const Scene3D = lazy(() => import('./components/Scene3D'));

function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-0 bg-dark flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <div className="noise-bg relative">
      <CustomCursor />
      
      {/* 3D Background */}
      <Suspense fallback={<LoadingFallback />}>
        <Scene3D />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
