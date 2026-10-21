import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

export async function GET(request, { params }) {
  const { slug } = params;
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    });
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 