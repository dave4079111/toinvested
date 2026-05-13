import { saveSite } from "../../../lib/store";
import { generateFallbackHtml } from "../../../lib/template";

let OpenAI: any;
try {
  OpenAI = require("openai").OpenAI;
} catch {}

export async function POST(req: Request) {
  const { name, city, role } = await req.json();

  if (!name || !city) {
    return Response.json(
      { error: "name and city are required" },
      { status: 400 },
    );
  }

  const siteId =
    Math.random().toString(36).substring(2, 8) + Date.now().toString(36);
  const agentRole = role || "agent";
  let html: string;

  if (process.env.OPENAI_API_KEY && OpenAI) {
    try {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Build a professional real estate landing page for ${name}, a ${agentRole} in ${city}. Include: hero section with name and city, about the local market section, services (buying/selling/investing), and a contact form. Return only complete HTML with embedded CSS. Make it modern, clean, and mobile-responsive. Include a footer that says "Powered by YPNUS".`,
          },
        ],
      });
      html = completion.choices[0].message.content || "";
    } catch {
      html = generateFallbackHtml(name, city, agentRole);
    }
  } else {
    html = generateFallbackHtml(name, city, agentRole);
  }

  saveSite(siteId, html);

  return Response.json({ siteId, url: `/site/${siteId}` });
}
