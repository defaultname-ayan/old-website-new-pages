import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';
import { hashPassword, validatePassword, requireRole, getSession } from '@/app/lib/auth';

// Middleware to ensure only super admin can access these routes
const requireSuperAdmin = requireRole('SUPER_ADMIN');

// GET /api/admin/users/[id] - Get user details
export async function GET(request, { params }) {
  try {
    const session = await requireSuperAdmin(request);
    if (session instanceof NextResponse) return session;

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/users/[id] - Update user
export async function PATCH(request, { params }) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { isActive } = await request.json();

    // Prevent deactivating the last super admin
    if (!isActive) {
      const superAdminCount = await prisma.user.count({
        where: {
          role: 'SUPER_ADMIN',
          isActive: true,
        },
      });

      const targetUser = await prisma.user.findUnique({
        where: { id },
        select: { role: true },
      });

      if (targetUser?.role === 'SUPER_ADMIN' && superAdminCount <= 1) {
        return NextResponse.json(
          { message: 'Cannot deactivate the last super admin' },
          { status: 400 }
        );
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { message: 'Error updating user' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/users/[id] - Delete user
export async function DELETE(request, { params }) {
  try {
    const session = await requireSuperAdmin(request);
    if (session instanceof NextResponse) return session;

    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/admin/users/[id]/reset-password - Reset user password
export async function POST(request, { params }) {
  try {
    const session = await requireSuperAdmin(request);
    if (session instanceof NextResponse) return session;

    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Validate password requirements
    const isValidPassword = await validatePassword(password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Update user password
    await prisma.user.update({
      where: { id: params.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExp: null,
      },
    });

    return NextResponse.json(
      { message: 'Password reset successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 