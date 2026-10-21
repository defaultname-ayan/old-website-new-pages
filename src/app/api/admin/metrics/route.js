import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { getSession } from "@/app/lib/auth";

export async function POST(req) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { camps, peopleScreened, identifiedcases } = await req.json();

    const metrics = await prisma.metrics.upsert({
      where: { id: 1 },
      update: {
        camps,
        peopleScreened,
        identifiedcases,
      },
      create: {
        id: 1,
        camps,
        peopleScreened,
        identifiedcases,
      },
    });

    return NextResponse.json({ success: true, metrics });
  } catch (error) {
    console.error("Error updating metrics:", error);
    return NextResponse.json(
      { error: "Failed to update metrics" },
      { status: 500 },
    );
  }
}
