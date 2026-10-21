import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    // Validate required fields
    const requiredFields = [
      'slug', 'bannerTitle', 'projectName', 'projectDescription',
      'rationaleTitle', 'rationaleText', 'duration', 'location',
      'contact', 'progressStatus', 'progressImpact', 'ctaText', 'ctaLink', 'investigators'
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }
    // Create project
    const project = await prisma.project.create({
      data: {
        slug: data.slug,
        bannerTitle: data.bannerTitle,
        projectName: data.projectName,
        projectDescription: data.projectDescription,
        rationaleTitle: data.rationaleTitle,
        rationaleText: data.rationaleText,
        duration: data.duration,
        location: data.location,
        contact: data.contact,
        progressStatus: data.progressStatus,
        progressImpact: data.progressImpact,
        ctaText: data.ctaText,
        ctaLink: data.ctaLink,
        investigators: data.investigators,
        isActive: true,
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const data = await request.json();
    if (!data.slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }
    const updateData = { ...data };
    delete updateData.slug;
    const project = await prisma.project.update({
      where: { slug: data.slug },
      data: updateData,
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    if (!data.slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }
    await prisma.project.delete({ where: { slug: data.slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 