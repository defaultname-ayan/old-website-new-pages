import { NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/app/lib/auth';
import { prisma } from 'lib/prisma';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session
    const session = await createSession(user);

    return NextResponse.json(
      { message: 'Login successful' },
      {
        status: 200,
        headers: {
          'Set-Cookie': `session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000`,
        },
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  }
} 