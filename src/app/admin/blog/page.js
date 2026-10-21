"use client"

import { useState } from "react"
import Image from 'next/image'

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [summary, setSummary] = useState("")
  const [headImage, setHeadImage] = useState("")
  const [blocks, setBlocks] = useState([])

  const addParagraph = () => {
    setBlocks([...blocks, { type: "paragraph", text: "" }])
  }

  const addImage = () => {
    setBlocks([...blocks, { type: "image", url: "" }])
  }

  const updateBlock = (index, key, value) => {
    const updated = [...blocks]
    updated[index][key] = value
    setBlocks(updated)
  }

  const updateImageBase64 = (index, file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      const updated = [...blocks]
      updated[index].url = reader.result // base64 string
      setBlocks(updated)
    }
  }

  const handleHeadImageUpload = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setHeadImage(reader.result)
    }
  }

  const handleSubmit = async () => {
    if (!title || !slug) {
      alert("Title and Slug are required.")
      return
    }

    const res = await fetch('/api/admin/create-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        slug,
        summary,
        headImage,
        blocks,
      }),
    })

    if (res.ok) {
      alert("Blog created successfully!")
      window.location.reload()
    } else {
      alert("Error creating blog.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-6 text-black">Create New Blog</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border p-2 rounded text-black placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Slug (url-friendly name)"
          value={slug}
          onChange={e => setSlug(e.target.value)}
          className="w-full border p-2 rounded text-black placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          className="w-full border p-2 rounded text-black placeholder-gray-500"
        />

        <div>
          <label className="block mb-2 font-semibold text-black">Head Image Upload:</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => handleHeadImageUpload(e.target.files[0])}
            className="w-full border p-2 rounded text-black"
          />
          {headImage && <Image src={headImage} alt="Head Preview" width={400} height={300} className="mt-2 rounded" />}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-black">Content Blocks</h2>

        {blocks.map((block, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            {block.type === "paragraph" ? (
              <textarea
                value={block.text}
                onChange={e => updateBlock(index, "text", e.target.value)}
                placeholder="Paragraph text"
                className="w-full border p-2 rounded text-black placeholder-gray-500"
              />
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => updateImageBase64(index, e.target.files[0])}
                  className="w-full border p-2 rounded text-black"
                />
                {block.url && <Image src={block.url} alt="Block Preview" width={400} height={300} className="mt-2 rounded" />}
              </>
            )}
          </div>
        ))}

        <div className="flex gap-4">
          <button onClick={addParagraph} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Paragraph</button>
          <button onClick={addImage} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Image</button>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-black text-white px-6 py-3 rounded w-full hover:bg-gray-800"
        >
          Publish Blog
        </button>
      </div>
    </div>
  )
}