import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function HolisticPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Holistic Health</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We support holistic well-being across all aspects of health. Our efforts help aging individuals live healthier, fulfilling lives.          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-20">

          {/* Card 1 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Holistic Health & Well-being Initiatives</h2>
              <p className="text-lg text-gray-600 mb-4">
                We bring preventive health screenings, cognitive wellness check-ups, and psychosocial support directly to older adults in their communities — reaching those who would otherwise go unserved. Our initiatives include:
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li> <strong>Organizing health camps and mobile clinics</strong> that provide free medical consultations and screenings.</li>
                <li> <strong>Conducting geriatric assessments</strong> to detect early signs of memory loss, mobility challenges, malnutrition, and sensory impairments.</li>
                <li> <strong>Offering tailored yoga sessions and physical activities</strong> designed to suit the abilities of older adults.</li>
                <li> <strong>Providing nutrition counseling and awareness programs</strong> focused on the dietary needs of seniors.</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/holistic/holistic.jpg"
                alt="Holistic Health"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Text Right, Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Social Engagement – Rebuilding Connections</h2>
              <p className="text-lg text-gray-600 mb-4">
                We strive to foster a sense of belonging and social inclusion among seniors by:
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li> <strong>Establishing Elderly Support Groups</strong> to strengthen community connections.</li>
                <li> <strong>Hosting regular social events and meetups</strong> to alleviate loneliness and isolation.</li>
                <li> <strong>Providing mental health support and counseling services</strong> to address emotional well-being.</li>
                <li> <strong>Developing mentorship programs</strong> that connect seniors with youth, fostering intergenerational relationships.</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
              <Image
                src="/ourwork/holistic/social.jpg" // Replace with your real image path
                alt="Social Engagement"
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
