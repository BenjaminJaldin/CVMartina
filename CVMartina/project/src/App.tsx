import { Briefcase, Heart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

function Footer() {
  return (
    <footer className="border-t border-rose-soft/20 bg-rose-mist/30 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-mist to-rose-soft shadow-soft">
            <Briefcase className="h-4 w-4 text-rose-deep" strokeWidth={2.2} />
          </span>
          <span className="font-display text-sm font-semibold text-ink">
            Martina Belén Espinoza Vargas
          </span>
        </div>
        <p className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
          Diseñado con
          <Heart className="h-3.5 w-3.5 text-rose-soft" fill="currentColor" />
          para procesos de selección
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
