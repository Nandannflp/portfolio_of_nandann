import { NextRequest, NextResponse } from "next/server";
import { getMcpTransport } from "@/lib/mcp";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    console.log("GET Request Path:", req.nextUrl.pathname, "Accept:", req.headers.get("accept"));
    const transport = getMcpTransport();
    return await transport.handleRequest(req as Request);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    return NextResponse.json({ error: message, stack }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const transport = getMcpTransport();
    return await transport.handleRequest(req as Request);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    return NextResponse.json({ error: message, stack }, { status: 500 });
  }
}
