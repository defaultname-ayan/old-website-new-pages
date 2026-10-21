import { prisma, withDemoFallback } from 'lib/prisma'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Pre-generate all blog slugs at build time
export async function generateStaticParams() {
  const blogs = await withDemoFallback(prisma.blog.findMany({
    select: { slug: true },
  }))

  return blogs.map(blog => ({
    blogname: blog.slug, // Must match the [blogname] param
  }))
}

// Fetch blog from DB by slug
async function getBlog(slug) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  })
  return blog
}

// Blog Page Component
export default async function BlogPage({ params }) {
  const blogname= params.blogname
  const blog = await getBlog(blogname)

  if (!blog) {
    return <div className="text-center p-10 text-red-500 text-2xl">Blog not found.</div>
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-grow max-w-3xl mx-auto p-6">
        <h1 className="text-4xl text-black font-bold mb-4">{blog.title}</h1>
        <p className="text-black mb-6">{blog.summary}</p>

        {blog.headImage && (
          <Image src={blog.headImage} alt={blog.title} className="rounded mb-6 w-full object-cover" />
        )}

        <div className="space-y-6">
          {blog.blocks.map((block, index) => (
            block.type === "paragraph" ? (
              <p key={index} className="text-black leading-relaxed">{block.text}</p>
            ) : block.type === "image" ? (
              <Image key={index} src={block.url} alt={`block-${index}`} className="rounded w-full object-cover" />
            ) : null
          ))}
        </div>
      </div>

      <div className="mt-10 text-center py-2 m-20">
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            ← Back to Blogs
          </button>
        </Link>
      </div>


      <Footer />
    </main>
  )
}
