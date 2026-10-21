import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"

export default function OurWorkPage() {
  const activities = [
    {
      id: "Holistic",
      title: "Holistic Health & Well-being",
      description:
        "We bring preventive health screenings, cognitive wellness check-ups, and psychosocial support directly to older adults in their communities — reaching those who would otherwise go unserved.",
      impact:
        "Through community health camps across Hyderabad and Telangana, we have conducted cognitive screenings, depression assessments, and brain health counselling — helping seniors and their families take early action before crisis occurs.",
      image: "/activities/holistic-health.jpg",
    },
    {
      id: "Research",
      title: "Research & Innovation",
      description:
        "We develop and validate community-based screening models for early detection of cognitive impairment and dementia among India's ageing population. Our research focuses on building evidence for scalable, culturally adapted tools that work in low-resource settings - bridging the gap between clinical science and community-level practice.",
      impact:
        "Through our projects, we have used a rigorously developed protocol to generate one of the first community-level datasets on cognitive health, depression, and functional ability in this population. Our findings are shaping how India approaches early detection of cognitive and mental health issues in older adults.",
      image: "/activities/scientific.jpg",
    },
    {
      id: "Skills",
      title: "Skills Training & Capacity Building",
      description:
        "We train the next generation of psychologists, social workers, and community health workers in cognitive screening, post-assessment counselling, and elder-sensitive clinical practices — building India's frontline capacity for dementia care.",
      impact:
        "We have trained Psychologists, public health practitioners, nursing & social work students and field practitioners on the neuro-cognitive screening Protocols, culturally appropriate geriatric assessment techniques, and ethical practices in working with older adults.",
      image: "/activities/skills.png",
    },
    {
      id: "Awareness",
      title: "Awareness & Advocacy",
      description:
        "We work to break the silence and stigma around dementia and cognitive decline — reaching families, communities, and policymakers with the message that memory health matters, and early detection saves lives.",
      impact:
        "Through public awareness campaigns, community screenings, caregiver education, and multilingual outreach in Telugu and English, we are changing how Hyderabad's communities understand, talk about, and respond to cognitive ageing.",
      image: "/activities/awareness.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#fdf8f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-9xl mx-auto mb-6">
              Satoru Foundation works to ensure that no older adult in India faces cognitive decline alone and undetected. Through community health screenings, scientific research, professional training, and public advocacy, we are building a system for early dementia detection that is accessible, dignified, and rooted in the communities it serves.
            </p>
            <div className="h-1 w-full bg-[#ecc750] mx-auto rounded-full mb-6 mt-1"></div>
          </div>
        </div>

        <div className="space-y-0">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center container mx-auto px-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">{activity.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{activity.description}</p>
                  <p className="text-lg text-gray-600 mb-8">
                    {activity.impact}
                  </p>
                  <Button size="lg" className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white">
                    <Link href={`/ourwork/${activity.id}`}>Learn More</Link>
                  </Button>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
