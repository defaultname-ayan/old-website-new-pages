import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

export default function CLARPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Satoru Centre for Longevity, Aging and Society in India</h1>
        </div>
      </section>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-6">
                SCLASI
              </span>
              <p className="text-gray-900 mb-8 leading-relaxed text-[20px]">
                Satoru Centre for Longevity, Aging and Society in India engages in various activities aimed at promoting healthy aging and advancing research in longevity. 
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none text-gray-700 mb-12">
  {[
    { title: "Research Initiatives", desc: "Studying psycological, environmental, and lifestyle factors influencing longevity." },
    { title: "Public Awareness", desc: "Workshops and seminars on healthy aging, nutrition, and preventive care." },
    { title: "Policy Advocacy", desc: "Collaborating with governments on elder care and age-friendly policies." },
    { title: "Community Outreach", desc: "Fitness classes, social activities, and mental health support for active aging." },
    { title: "Training Programs", desc: "Holistic geriatric care training for healthcare professionals." },
    { title: "NGO Collaboration", desc: "Partnering with NGOs to enhance services for older adults." },
    { title: "Tech Innovations", desc: "Telemedicine and senior-focused health apps for better self-management." },
    { title: "Research Publications", desc: "Publishing findings in journals and presenting at global conferences." },
    { title: "Support Groups", desc: "Peer groups to reduce isolation and boost mental well-being." },
    { title: "Nutrition Programs", desc: "Dietary guidelines and meal programs tailored for older adults." },
  ].map(({ title, desc }) => (
    <li key={title} className="p-3 rounded-xl bg-gray-50 border-1 border-amber-300">
      <p className="font-semibold text-gray-800 text-sm underline ">{title}</p>
      <p className="text-gray-500 text-md mt-0.5">{desc}</p>
    </li>
  ))}
</ul>

              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                These activities collectively aim to enhance the quality of life for older adults in India and foster a society that values and supports its aging population
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Images */}
          <div className="space-y-8">
            {/* First Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/CLAR/first.png" // Update with your image path
                alt="Researchers studying longevity data"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/CLAR/second.jpg" // Update with your image path
                alt="Elderly community program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}