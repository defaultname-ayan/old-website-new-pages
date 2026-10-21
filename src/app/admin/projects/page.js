"use client";
import React, { useEffect, useState } from "react";

const API_URL = "/api/projects";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    slug: "",
    bannerTitle: "",
    projectName: "",
    projectDescription: "",
    rationaleTitle: "",
    rationaleText: "",
    duration: "",
    location: "",
    contact: "",
    progressStatus: "",
    progressImpact: "",
    ctaText: "",
    ctaLink: "",
    investigators: "",
    isActive: true,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleEdit(project) {
    setEditing(project.slug);
    setForm({ ...project, investigators: project.investigators.join(", ") });
  }

  function handleCancelEdit() {
    setEditing(null);
    setForm({
      slug: "",
      bannerTitle: "",
      projectName: "",
      projectDescription: "",
      rationaleTitle: "",
      rationaleText: "",
      duration: "",
      location: "",
      contact: "",
      progressStatus: "",
      progressImpact: "",
      ctaText: "",
      ctaLink: "",
      investigators: "",
      isActive: true,
    });
  }

  async function handleSave(e) {
    e.preventDefault();
    const payload = {
      ...form,
      investigators: form.investigators.split(",").map((s) => s.trim()),
      isActive: form.isActive === "true" || form.isActive === true,
    };
    if (editing) {
      await fetch(API_URL, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, slug: editing }),
      });
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    handleCancelEdit();
    fetchProjects();
  }

  async function handleDelete(slug) {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    fetchProjects();
  }

  async function handleToggleActive(project) {
    await fetch(API_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: project.slug, isActive: !project.isActive }),
    });
    fetchProjects();
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>
      <button
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => {
          setEditing(null);
          setForm({
            slug: "",
            bannerTitle: "",
            projectName: "",
            projectDescription: "",
            rationaleTitle: "",
            rationaleText: "",
            duration: "",
            location: "",
            contact: "",
            progressStatus: "",
            progressImpact: "",
            ctaText: "",
            ctaLink: "",
            investigators: "",
            isActive: true,
          });
        }}
      >
        Add New Project
      </button>
      <form className="mb-8 space-y-2" onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-2">
          <input name="slug" value={form.slug} onChange={handleInputChange} placeholder="Slug" required className="border p-2" disabled={!!editing} />
          <input name="bannerTitle" value={form.bannerTitle} onChange={handleInputChange} placeholder="Banner Title" required className="border p-2" />
          <input name="projectName" value={form.projectName} onChange={handleInputChange} placeholder="Project Name" required className="border p-2" />
          <input name="duration" value={form.duration} onChange={handleInputChange} placeholder="Duration" required className="border p-2" />
          <input name="location" value={form.location} onChange={handleInputChange} placeholder="Location" required className="border p-2" />
          <input name="contact" value={form.contact} onChange={handleInputChange} placeholder="Contact" required className="border p-2" />
          <input name="progressStatus" value={form.progressStatus} onChange={handleInputChange} placeholder="Progress Status" required className="border p-2" />
          <input name="progressImpact" value={form.progressImpact} onChange={handleInputChange} placeholder="Progress Impact" required className="border p-2" />
          <input name="ctaText" value={form.ctaText} onChange={handleInputChange} placeholder="CTA Text" required className="border p-2" />
          <input name="ctaLink" value={form.ctaLink} onChange={handleInputChange} placeholder="CTA Link" required className="border p-2" />
          <input name="investigators" value={form.investigators} onChange={handleInputChange} placeholder="Investigators (comma separated)" required className="border p-2" />
          <select name="isActive" value={form.isActive} onChange={handleInputChange} className="border p-2">
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <textarea name="projectDescription" value={form.projectDescription} onChange={handleInputChange} placeholder="Project Description" required className="border p-2 w-full" />
        <input name="rationaleTitle" value={form.rationaleTitle} onChange={handleInputChange} placeholder="Rationale Title" required className="border p-2 w-full" />
        <textarea name="rationaleText" value={form.rationaleText} onChange={handleInputChange} placeholder="Rationale Text" required className="border p-2 w-full" />
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded mr-2">{editing ? "Save Changes" : "Add Project"}</button>
          {editing && <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded" onClick={handleCancelEdit}>Cancel</button>}
        </div>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Slug</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Active</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug}>
                <td className="border p-2">{project.slug}</td>
                <td className="border p-2">{project.projectName}</td>
                <td className="border p-2">{project.isActive ? "Yes" : "No"}</td>
                <td className="border p-2 space-x-2">
                  <button className="px-2 py-1 bg-yellow-500 text-white rounded" onClick={() => handleEdit(project)}>Edit</button>
                  <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => handleDelete(project.slug)}>Delete</button>
                  <button className="px-2 py-1 bg-gray-600 text-white rounded" onClick={() => handleToggleActive(project)}>
                    {project.isActive ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 