import { NextRequest, NextResponse } from "next/server";
import { getMcpTransport } from "@/lib/mcp";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    console.log("GET Request Path:", req.nextUrl.pathname, "Accept:", req.headers.get("accept"));
    const transport = getMcpTransport();
    return await transport.handleRequest(req as Request);
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const transport = getMcpTransport();
    return await transport.handleRequest(req as Request);
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
