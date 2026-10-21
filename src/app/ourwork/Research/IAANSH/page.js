import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";


export default function IAANSHPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IAANSH: Institute for Applied Research & Advocacy in Natural, Social and Health Sciences
          </h1>
        </div>
      </section>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-6">
                IAANSH
              </span>
              <p className="text-gray-900 mb-8 leading-relaxed text-[20px]">
                Transforming scientific discovery into real-world impact. Our research and advocacy integrate natural, social, and health sciences to create sustainable, equitable solutions.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none text-gray-700 mb-12">
                {[
                  { title: "Interdisciplinary Research", desc: "Integrating natural, social, and health sciences to tackle complex challenges like public health crises and environmental sustainability." },
                  { title: "Community Engagement", desc: "Collaborating with local communities to identify needs and implement research-based solutions that enhance quality of life." },
                  { title: "Policy Advocacy", desc: "Promoting evidence-based policies on health, environment, and social issues to ensure research findings shape decision-making." },
                  { title: "Capacity Building", desc: "Training programs and workshops for researchers, community leaders, and healthcare professionals in research and health interventions." },
                  { title: "Public Health Initiatives", desc: "Preventive healthcare, nutrition, and wellness programs focused on underserved areas to improve health outcomes." },
                  { title: "Environmental Sustainability", desc: "Advocating for sustainable agriculture, water management, and waste reduction to promote ecological balance." },
                  { title: "Social Science Studies", desc: "Studying psychological, cultural, and economic factors to understand their impact on health and well-being." },
                  { title: "Collaborative Projects", desc: "Partnering with academic institutions, NGOs, and government agencies for meaningful, society-focused research." },
                  { title: "Awareness Campaigns", desc: "Educating the public on health issues, environmental conservation, and social justice to foster informed communities." },
                  { title: "Publications & Dissemination", desc: "Producing research papers, policy briefs, and reports to share findings with stakeholders and the general public." },
                ].map(({ title, desc }) => (
                  <li key={title} className="p-3 rounded-xl bg-gray-50 border-1 border-amber-300">
                    <p className="font-semibold text-gray-800 text-sm underline">{title}</p>
                    <p className="text-gray-500 text-md mt-0.5">{desc}</p>
                  </li>
                ))}
              </ul>

              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                These activities reflect IAANSH's commitment to applying scientific research to real-world challenges, promoting advocacy, and improving health and social outcomes across India.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Images */}
          <div className="space-y-8">
            {/* First Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/IAANSH/first.jpg"
                alt="Researchers studying longevity data"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/IAANSH/second.jpg"
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