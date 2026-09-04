import { Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { contactInfo } from '@/data';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:min-h-screen sm:px-8 sm:pb-16 sm:pt-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-rose-mist blur-3xl opacity-70 animate-float-slow" />
        <div className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-rose-petal blur-3xl opacity-50 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-rose-soft/20 blur-3xl opacity-60 animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Reveal animation="scale-in" className="relative">
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-rose-soft/25 bg-rose-mist/60 p-5 shadow-float backdrop-blur-xl sm:rounded-[2rem] sm:p-12 lg:p-16">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-rose-soft to-transparent" />

            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-soft/40 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-rose-deep shadow-soft">
                <Sparkles className="h-3.5 w-3.5" />
                Portafolio Profesional
              </span>
            </div>

            {/* Name */}
            <h1 className="text-center font-display text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Martina Belén
              <br />
              <span className="gradient-text">Espinoza Vargas</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-center text-sm font-medium leading-relaxed text-ink-soft sm:text-base lg:text-lg">
              Estudiante de Ingeniería en Administración de Empresas
            </p>
            <ul className="mx-auto mt-3 flex max-w-xl flex-wrap justify-center gap-2 text-xs font-semibold text-rose-deep sm:text-sm">
              {['Gestión Administrativa', 'Marketing', 'Atención al Cliente'].map((specialty) => (
                <li key={specialty} className="rounded-full border border-rose-soft/30 bg-white/65 px-3 py-1.5">
                  {specialty}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mx-auto my-7 h-px w-32 bg-gradient-to-r from-transparent via-rose-soft to-transparent" />

            {/* Presentation */}
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-ink-soft sm:text-base">
              Profesional en formación con experiencia en administración, ventas, marketing digital y atención al cliente. Destaco por mi capacidad de organización, resolución de problemas y orientación hacia resultados.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="/CV-Martina-Espinoza.pdf"
                download="CV-Martina-Espinoza.pdf"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-soft px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-rose-deep hover:shadow-card hover:-translate-y-0.5 sm:w-auto"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Descargar CV
              </a>
              <a
                href="#contacto"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-soft/50 bg-white/80 px-7 py-3.5 text-sm font-semibold text-rose-deep transition-all duration-300 hover:bg-rose-mist hover:shadow-soft hover:-translate-y-0.5 sm:w-auto"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Contactarme
              </a>
            </div>

            {/* Location chip */}
            <div className="mt-8 flex items-center justify-center gap-1.5 text-xs font-medium text-ink-muted">
              <MapPin className="h-3.5 w-3.5 text-rose-soft" />
              {contactInfo.location}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
