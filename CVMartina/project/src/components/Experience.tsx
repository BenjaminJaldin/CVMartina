import { Reveal } from './Reveal';
import { experiences } from '@/data';

export function Experience() {
  return (
    <section id="experiencia" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-soft">
            Trayectoria
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Experiencia Laboral
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-soft to-rose-deep" />
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-rose-soft via-rose-soft/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={`${exp.company}-${exp.role}`} delay={i * 80}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-5 top-2 z-10 -translate-x-1/2 sm:left-1/2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-rose-soft to-rose-deep shadow-soft">
                        <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                      </span>
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* Card */}
                    <div className="ml-14 flex-1 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div
                        className={`group rounded-2xl border border-rose-soft/20 bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-card hover:-translate-y-1 ${
                          isLeft ? 'sm:mr-8' : 'sm:ml-8'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-lg font-bold text-ink">
                              {exp.role}
                            </h3>
                            <p className="mt-0.5 text-sm font-semibold text-rose-deep">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {exp.period && (
                          <span className="mt-3 inline-block rounded-full bg-rose-mist px-3 py-1 text-xs font-medium text-rose-ink">
                            {exp.period}
                          </span>
                        )}

                        <ul className="mt-4 space-y-2">
                          {exp.duties.map((duty) => (
                            <li
                              key={duty}
                              className="flex items-start gap-2.5 text-sm text-ink-soft"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-soft" />
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
