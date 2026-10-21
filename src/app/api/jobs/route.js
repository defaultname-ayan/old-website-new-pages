import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

// Add revalidation time (24 hours)
export const revalidate = 86400;

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 