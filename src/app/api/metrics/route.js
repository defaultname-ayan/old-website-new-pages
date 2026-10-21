import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";

export async function GET() {
  try {
    const metrics = await prisma.metrics.findUnique({ where: { id: 1 } });
    return NextResponse.json(
      metrics ?? { camps: 0, peopleScreened: 0, identifiedcases: 0 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
