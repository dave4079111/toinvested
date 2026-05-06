import { OpenAI } from 'openai';

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function POST(req: Request) {
  if (!openai) {
    return Response.json(
      { error: 'OPENAI_API_KEY is not configured.' },
      { status: 500 },
    );
  }

  const { prompt } = (await req.json()) as { prompt?: unknown };

  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    return Response.json(
      { error: 'A non-empty prompt is required.' },
      { status: 400 },
    );
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You create conversion-focused, compliant real estate and lending website sections. Return only complete, accessible HTML without markdown fences.',
      },
      {
        role: 'user',
        content: `Build a real estate, lending, and broker landing page concept for this business brief: ${prompt.trim()}`,
      },
    ],
  });

  return new Response(completion.choices[0].message.content ?? '', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
