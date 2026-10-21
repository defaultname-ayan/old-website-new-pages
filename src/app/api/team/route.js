import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

// Add revalidation time (24 hours)
export const revalidate = 86400;

export async function GET() {
  try {
    const team = await prisma.team.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(team);
  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 