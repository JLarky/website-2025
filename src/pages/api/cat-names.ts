import type { APIRoute } from 'astro';
import { getCatNames } from '../../utils/catData';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(await getCatNames()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
