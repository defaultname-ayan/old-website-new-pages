import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';
import { getSession } from '@/app/lib/auth';

export async function GET() {
  try {
    const configs = await prisma.fieldVisitConfig.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        order: 'asc',
      },
    });

    return NextResponse.json(configs);
  } catch (error) {
    console.error('Error fetching field visit configurations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch configurations' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['heading', 'buttonText', 'buttonUrl'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Get the highest order number
    const lastConfig = await prisma.fieldVisitConfig.findFirst({
      orderBy: {
        order: 'desc',
      },
    });

    const newOrder = lastConfig ? lastConfig.order + 1 : 1;

    const config = await prisma.fieldVisitConfig.create({
      data: {
        ...data,
        order: newOrder,
      },
    });

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error creating field visit configuration:', error);
    return NextResponse.json(
      { error: 'Failed to create configuration' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { id, ...updateData } = data;

    const config = await prisma.fieldVisitConfig.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error updating field visit configuration:', error);
    return NextResponse.json(
      { error: 'Failed to update configuration' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    await prisma.fieldVisitConfig.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Configuration deleted successfully' });
  } catch (error) {
    console.error('Error deleting field visit configuration:', error);
    return NextResponse.json(
      { error: 'Failed to delete configuration' },
      { status: 500 }
    );
  }
} 