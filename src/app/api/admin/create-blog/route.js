import { prisma } from 'lib/prisma'

export async function POST(req) {
  try {
    const body = await req.json()
    const { title, slug, summary, headImage, blocks } = body

    if (!title || !slug || !summary || !headImage || !blocks) {
      return new Response("Missing fields", { status: 400 })
    }

    const content = blocks
      .filter(b => b.type === "paragraph")
      .map(b => b.text)
      .join('\n\n')

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        summary,
        headImage,
        content,
        blocks,
      },
    })

    return new Response(JSON.stringify(blog), { status: 201 })
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
