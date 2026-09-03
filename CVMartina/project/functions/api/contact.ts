interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

interface ContactRequest {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  );

export const onRequestPost = async ({ request, env }: PagesContext) => {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return json({ error: 'Formato de solicitud no válido.' }, 415);
  }

  let body: ContactRequest;
  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return json({ error: 'No se pudo leer el mensaje.' }, 400);
  }

  // Campo trampa: los visitantes reales nunca lo completan.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return json({ ok: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || name.length > 100) {
    return json({ error: 'Ingresa un nombre válido.' }, 400);
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return json({ error: 'Ingresa un correo válido.' }, 400);
  }
  if (message.length < 10 || message.length > 5000) {
    return json({ error: 'El mensaje debe tener entre 10 y 5000 caracteres.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    console.error('Faltan variables de configuración del formulario de contacto.');
    return json({ error: 'El formulario no está configurado todavía.' }, 503);
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Nuevo mensaje de ${name} desde el CV`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
      html: `<h2>Nuevo mensaje desde el CV</h2><p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Correo:</strong> ${escapeHtml(email)}</p><p><strong>Mensaje:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend rechazó el envío:', resendResponse.status, await resendResponse.text());
    return json({ error: 'No se pudo enviar el mensaje. Intenta nuevamente.' }, 502);
  }

  return json({ ok: true });
};
