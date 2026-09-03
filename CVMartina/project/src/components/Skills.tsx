import { Reveal } from './Reveal';
import { skillGroups } from '@/data';

export function Skills() {
  return (
    <section id="habilidades" className="relative px-5 py-20 sm:px-8 sm:py-28">
      {/* Soft background tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-rose-mist/30 via-transparent to-transparent" />

      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-soft">
            Competencias
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Habilidades
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-soft to-rose-deep" />
        </Reveal>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 120}>
              <div className="rounded-3xl border border-rose-soft/20 bg-white p-6 shadow-soft sm:p-8">
                <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-ink">
                  <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-rose-soft to-rose-deep" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.label}
                        className="group inline-flex items-center gap-2.5 rounded-full border border-rose-soft/30 bg-rose-mist/50 px-4 py-2.5 text-sm font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-soft hover:bg-rose-mist hover:text-rose-deep hover:shadow-soft"
                      >
                        <Icon className="h-4 w-4 text-rose-soft transition-colors duration-300 group-hover:text-rose-deep" strokeWidth={2} />
                        {skill.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
