import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const INIT_FLAG_FILE = path.join(process.cwd(), '.admin-initialized');

export async function POST() {
  try {
    // Check if already initialized
    if (fs.existsSync(INIT_FLAG_FILE)) {
      return NextResponse.json(
        { error: 'Admin already initialized' },
        { status: 400 }
      );
    }

    // Check if super admin already exists
    const existingSuperAdmin = await prisma.user.findFirst({
      where: {
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    if (existingSuperAdmin) {
      return NextResponse.json(
        { error: 'Super admin already exists' },
        { status: 400 }
      );
    }

    // Validate environment variables
    const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_NAME, SUPER_ADMIN_PASSWORD } = process.env;
    
    if (!SUPER_ADMIN_EMAIL || !SUPER_ADMIN_NAME || !SUPER_ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Missing required environment variables for super admin' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(SUPER_ADMIN_PASSWORD, 10);

    // Create super admin
    const superAdmin = await prisma.user.create({
      data: {
        email: SUPER_ADMIN_EMAIL,
        name: SUPER_ADMIN_NAME,
        password: hashedPassword,
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    // Create initialization flag file
    fs.writeFileSync(INIT_FLAG_FILE, new Date().toISOString());

    return NextResponse.json({
      message: 'Super admin created successfully',
      email: superAdmin.email,
      password: SUPER_ADMIN_PASSWORD,
      hashedPassword: hashedPassword,
    });
  } catch (error) {
    console.error('Error creating super admin:', error);
    return NextResponse.json(
      { error: 'Failed to create super admin' },
      { status: 500 }
    );
  }
} 