import { PrismaClient } from '@/generated/prisma'

// For JavaScript, don't use TypeScript type assertions
const globalForPrisma = global

// Check if prisma exists on the global object
export const prisma = 
  globalForPrisma.prisma || 
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })

// Add prisma to the global object in development
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Demo deploys without a database set DEMO_NO_DB=1: failed queries return the fallback
// instead of breaking the build. Real deploys leave it unset and errors are thrown as before.
export async function withDemoFallback(query, fallback = []) {
  try {
    return await query
  } catch (error) {
    if (process.env.DEMO_NO_DB === '1') return fallback
    throw error
  }
}