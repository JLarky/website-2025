import type { APIRoute } from 'astro';

const catNames = ['Alonzo', 'Bill Bailey', 'Bombalurina', 'Electra', 'Plato'];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ catNames }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
