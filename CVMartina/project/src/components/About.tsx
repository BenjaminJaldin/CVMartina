import { ClipboardList } from 'lucide-react';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="sobre-mi" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-soft">
            Perfil Profesional
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Sobre mí
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-soft to-rose-deep" />
        </Reveal>

        <Reveal delay={100}>
          <div className="group relative overflow-hidden rounded-3xl border border-rose-soft/20 bg-white p-8 shadow-card transition-all duration-500 hover:shadow-float sm:p-12">
            {/* Decorative corner */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose-mist opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-mist to-rose-petal shadow-soft">
                <ClipboardList className="h-8 w-8 text-rose-deep" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  Estudiante de <strong className="font-semibold text-ink">Ingeniería en Administración de Empresas</strong> con habilidades en <strong className="font-semibold text-ink">ERP</strong>, control de inventarios y marketing digital. Certificada por <strong className="font-semibold text-ink">INACAP</strong> en Asistencia Financiera, Marketing y Remuneraciones. Experiencia en ventas efectivas, atención al cliente y fidelización.
                </p>

                {/* Quick stats */}
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { value: '3+', label: 'Años de experiencia' },
                    { value: '990', label: 'Horas certificadas' },
                    { value: '5', label: 'Roles desempeñados' },
                    { value: '4', label: 'Certificaciones' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-rose-soft/20 bg-rose-mist/40 p-4 text-center transition-all duration-300 hover:bg-rose-mist/70 hover:shadow-soft"
                    >
                      <div className="font-display text-2xl font-bold text-rose-deep">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-ink-muted">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
