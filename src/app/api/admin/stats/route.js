import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';
import { getSession } from '@/app/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Fetch all stats in parallel
    const [users, blogs, jobs, team, testimonials] = await Promise.all([
      prisma.user.count(),
      prisma.blog.count(),
      prisma.job.count({ where: { isActive: true } }),
      prisma.team.count({ where: { isActive: true } }),
      prisma.testimonial.count({ where: { isActive: true } }),
    ]);

    return NextResponse.json({
      users,
      blogs,
      jobs,
      team,
      testimonials,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { message: 'Error fetching dashboard stats' },
      { status: 500 }
    );
  }
} 