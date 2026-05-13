import { getSite } from "../../../../lib/store";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const html = getSite(params.id);
  if (!html) {
    return Response.json({ error: "site not found" }, { status: 404 });
  }
  return Response.json({ html });
}
