import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function AwarenessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rights & Advocacy</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-20">

          {/* Card 1 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Empowering Marginalized Communities</h2>
              <p className="text-lg text-gray-600 mb-4">
              At our organization, we are dedicated to uplifting marginalized communities facing unfair treatment and limited access to essential services like healthcare, education, and employment. Our mission is to ensure that every individual, regardless of background, is treated with equality and respect.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/awareness/marginalized.jpg"
                alt="Empowering Marginalized Communities"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Text Right, Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Supporting Older Adults</h2>
              <p className="text-lg text-gray-600 mb-4">
              Older adults deserve to live with dignity, care, and support. Unfortunately, many seniors face challenges such as loneliness, poor health, and financial insecurity. We work tirelessly to ensure they remain healthy, active, and connected to their communities by providing access to vital services.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
              <Image
                src="/ourwork/awareness/older.jpg" // Replace with your real image path
                alt="Supporting Older Adults"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Advocating for Equal Rights</h2>
              <p className="text-lg text-gray-600 mb-4">
              Every person deserves equal rights, and we are committed to addressing ageism and all forms of prejudice. Our advocacy focuses on protecting everyone’s rights through laws and policies that promote fairness in education, healthcare, and employment opportunities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/awareness/equal.jpg"
                alt="Advocating for Equal Rights"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">A Vision for the Future</h2>
              <p className="text-lg text-gray-600 mb-4">
              We envision a future where marginalized communities and older individuals have the same chances as everyone else. By raising awareness and providing support, we strive to build a more just world where everyone’s rights are respected. Join us in this vital mission!
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
              <Image
                src="/ourwork/awareness/vision.jpg" // Replace with your real image path
                alt="A Vision for the Future"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#5e6f47]">Assistance to Vulnerable Populations</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none text-gray-700 mb-6">
  {[
    { title: "Social & Cultural Exclusion", desc: "Community integration, awareness campaigns, and legal aid for those facing discrimination due to social or cultural norms." },
    { title: "Age Discrimination / Ageism", desc: "Promoting older adults' rights and training programs to educate individuals and organisations on combating ageism." },
    { title: "Community Support Groups", desc: "Safe spaces where people connect, share experiences, and access emotional support." },
    { title: "Funding & Grants", desc: "Financial assistance to projects and groups advancing the foundation's mission of justice and equality." },
    { title: "Public Awareness Campaigns", desc: "Initiatives raising awareness about challenges faced by underprivileged communities and promoting social inclusion." },
    { title: "Research & Advocacy", desc: "Studies and advocacy driving policy change for better protections and opportunities for marginalised communities." },
  ].map(({ title, desc }) => (
    <li key={title} className="p-3 rounded-xl bg-gray-50 border-1 border-amber-300">
      <p className="font-semibold text-gray-800 text-sm underline">{title}</p>
      <p className="text-gray-500 text-md mt-0.5">{desc}</p>
    </li>
  ))}
</ul>
                      </div>
                      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/ourwork/awareness/assistance.jpg"
                          alt="Assistance to Vulnerable Populations"
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
