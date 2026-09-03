import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';
import { contactInfo } from '@/data';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: formData.get('website') ?? '',
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar el mensaje.');
      }

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'No se pudo enviar el mensaje.');
    }
  };

  const contactCards = [
    { icon: MapPin, label: 'Ubicación', value: contactInfo.location },
    { icon: Phone, label: 'Teléfono', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Correo', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  ];

  return (
    <section id="contacto" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-soft">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            ¿Hablemos?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-soft to-rose-deep" />
          <p className="mx-auto mt-5 max-w-lg text-sm text-ink-soft sm:text-base">
            Estoy disponible para nuevas oportunidades laborales. Escríbeme y te responderé a la brevedad.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info column */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="flex h-full flex-col gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-rose-soft/20 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-mist to-rose-petal shadow-soft transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-rose-deep" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        {card.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-ink">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a key={card.label} href={card.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal className="lg:col-span-3" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-rose-soft/20 bg-white p-7 shadow-card sm:p-9"
            >
              <div className="space-y-5">
                <div className="absolute -left-[10000px]" aria-hidden="true">
                  <label htmlFor="website">Sitio web</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                    <User className="h-4 w-4 text-rose-soft" />
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full rounded-xl border border-rose-soft/30 bg-rose-mist/20 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-300 focus:border-rose-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-soft/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                    <Mail className="h-4 w-4 text-rose-soft" />
                    Correo
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-rose-soft/30 bg-rose-mist/20 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-300 focus:border-rose-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-soft/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                    <MessageSquare className="h-4 w-4 text-rose-soft" />
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full resize-none rounded-xl border border-rose-soft/30 bg-rose-mist/20 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-300 focus:border-rose-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-soft/30"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-rose-soft px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-rose-deep hover:shadow-card hover:-translate-y-0.5 disabled:cursor-default disabled:from-rose-deep disabled:to-rose-deep"
                >
                  {status === 'sent' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      ¡Mensaje enviado!
                    </>
                  ) : status === 'sending' ? (
                    'Enviando…'
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      Enviar mensaje
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-center text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
