import { Reveal } from './Reveal';
import { education, certifications } from '@/data';

export function Education() {
  return (
    <section id="educacion" className="relative px-5 py-20 sm:px-8 sm:py-28">
      {/* Soft background tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose-mist/25 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-soft">
            Formación
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Educación y Certificaciones
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-soft to-rose-deep" />
        </Reveal>

        {/* Education cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <Reveal key={edu.title} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-rose-soft/20 bg-white p-7 shadow-soft transition-all duration-500 hover:shadow-card hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-mist to-rose-petal shadow-soft transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7 text-rose-deep" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold leading-snug text-ink">
                        {edu.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-rose-deep">
                        {edu.institution}
                      </p>
                      <p className="mt-1.5 text-xs font-medium text-ink-muted">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications heading */}
        <Reveal className="mb-6">
          <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
            <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-rose-soft to-rose-deep" />
            Certificaciones
          </h3>
        </Reveal>

        {/* Certification cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <Reveal key={cert.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-rose-soft/25 bg-rose-mist/50 p-6 text-center transition-all duration-500 hover:bg-rose-mist hover:shadow-card hover:-translate-y-1">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-rose-soft to-rose-deep transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-rose-deep" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-display text-sm font-bold leading-snug text-ink">
                    {cert.title}
                  </h4>
                  <p className="mt-1.5 text-xs font-semibold text-rose-deep">
                    {cert.institution}
                  </p>
                  {cert.hours && (
                    <p className="mt-1 text-xs font-medium text-ink-muted">
                      {cert.hours}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
