import { prisma, withDemoFallback } from 'lib/prisma'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

async function getBlogs() {
  const blogs = await withDemoFallback(prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  }))
  return blogs
}

export default async function BlogListPage() {
  const blogs = await getBlogs()

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto p-6 w-11/12">
        <h1 className="text-5xl font-bold mb-12 text-center text-black">Latest Blogs</h1>

        <div className="space-y-14">
          {blogs.map(blog => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="block">
              <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg overflow-hidden shadow-xl transition">
                {/* Left side - Image with Aspect Ratio Maintained */}
                {blog.headImage && (
                  <div className="w-1/5 h-[230px] relative">
                    <Image
                      src={blog.headImage}
                      alt={blog.title}
                      width={800}
                      height={400}
                      className="rounded mb-6 w-full object-cover"
                    />
                  </div>
                )}

                {/* Right side - Title & Summary */}
                <div className="flex-grow p-7">
                  <h2 className="text-3xl font-semibold text-black">{blog.title}</h2>
                  <p className="text-lg text-gray-700 mt-4">{blog.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-center text-black mt-12">No blogs found. 🚀</p>
        )}
      </div>

      <Footer />
    </main>
  )
}

// Add ISR configuration here
export const revalidate = 86400; // 86400 seconds = 24 hours