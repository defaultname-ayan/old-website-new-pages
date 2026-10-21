import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"

export default function ResearchPage() {
  const research = [
    {
      id: "SATORU",
      title: "Satoru Centre for Longevity, Aging and Society in India",
      description:
        "The Centre for Longevity and aging Research in India engages in various activities aimed at promoting healthy  and advancing research in longevity. Here are detailed list of activities we undertake:",
      image: "/ourwork/research/ageing.jpg",
    },
    {
      id: "IAANSH",
      title: "IAANSH: Institute for applied research & advocacy in natural, social and health sciences",
      description:
        "",
      image: "/ourwork/research/applied-research.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">

          <div className="space-y-20">
            {research.map((research, index) => (
              <div
                key={research.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">{research.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{research.description}</p>
                  <p className="text-lg text-gray-600 mb-8">
                    Through our {research.title.toLowerCase()} projects, we've been able to impact thousands of lives and
                    create lasting positive change for older adults across India.
                  </p>
                  <Button size="lg" className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white">
                    <Link href={`/ourwork/Research/${research.id}`}>Learn More</Link>
                  </Button>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image src={research.image || "/placeholder.svg"} alt={research.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
