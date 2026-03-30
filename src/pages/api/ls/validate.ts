export const prerender = false;

import type { APIRoute } from 'astro';

const UPSTREAM = 'https://api.lemonsqueezy.com/v1/licenses/validate';

export const GET: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST' } });

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.LS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server misconfigured: LS_API_KEY missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const upstream = await fetch(UPSTREAM, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const text = await upstream.text();
  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  return new Response(text, { status: upstream.status, headers: { 'Content-Type': contentType } });
};
