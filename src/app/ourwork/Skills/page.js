import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills Training & Capacity Building</h1>
          
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-20">

          {/* Card 1 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
              We train the next generation of psychologists, social workers, and community health workers in cognitive screening, post-assessment counselling, and elder-sensitive clinical practices — building India's frontline capacity for dementia care. The following are some of the main projects and facets of the foundation's work:
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li> <strong>Workshops and Seminars:</strong> Holding workshops and seminars to develop skills appropriate for different age groups (major focus on older people), emphasising improving self-sufficiency and employment.</li>
                <li> <strong>Equity Tech Literacy:</strong> Providing digital and financial literacy classes to assist senior citizens in maintaining their connections and navigating the digital world with assurance.</li>
                <li> <strong>Mentorship Programs:</strong> Assisting senior citizens with personal growth and professional transitions by matching them with mentors.</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/skills/skills.png"
                alt="Holistic Health"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
