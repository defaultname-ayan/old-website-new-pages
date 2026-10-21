import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function getProjectData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/projects/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const projectData = await getProjectData(slug);

  if (!projectData) return <div>Project not found</div>;

  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="bg-[#5c6e45] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectData.bannerTitle}</h1>
      </div>
      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
                {projectData.projectName}
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                {projectData.projectDescription}
              </p>
              {/* Rationale */}
              <div className="bg-green-50 p-6 rounded-xl shadow-inner text-[#1e1e1e]">
                <h3 className="text-2xl md:text-xl font-semibold text-green-900 mb-3">{projectData.rationaleTitle}</h3>
                <p className="text-green-900 text-lg leading-relaxed">
                  {projectData.rationaleText}
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE - Cards */}
          <div className="space-y-6 mt-15">
            {/* Card 1 - Details */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#5e6f47]">Duration:</h3>
              <p>{projectData.duration}</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Location:</h3>
              <p>{projectData.location}</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Investigators:</h3>
              <ul>
                {projectData.investigators.map((inv, i) => (
                  <li key={i}>{inv}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Contact:</h3>
              <p className="text-blue-600">{projectData.contact}</p>
            </div>
            {/* Card 2 - Progress */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-[#5e6f47]">Progress till date</h3>
              <p><strong>Current Status:</strong> {projectData.progressStatus}</p>
              <p><strong>Impact:</strong> {projectData.progressImpact}</p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="mt-16 text-center">
          <a href={projectData.ctaLink}>
            <button className="bg-[#ecc750] hover:bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-full">
              {projectData.ctaText}
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
} 