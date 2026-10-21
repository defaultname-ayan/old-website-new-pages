import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: "Madavi",
      title: "Madavi:Multi-Temporal and Dimensional aging Views in India",
      description:
        "This project's main goal is to understand the impact of day-to-day dynamic-level changes in aging on older adults' physical and mental health.",
      image: "/projects/madavi.jpg",
    },
    {
      id: "Gaman",
      title: "Gaman: Generational Assessment of Marginalization: Adversity and Navigating Resilience",
      description:
        "Evaluating socioeconomic barriers' impact on mental health and performance in academic and work environments among Indian Millennials and Gen-Z.",
      image: "/projects/gaman.jpg",
    },
    {
      id: "ActiveIndia",
      title: "Active India: Advancing cognitive and physical health through technology-driven intervention for vibrant elderly.",
      description:
        "The project's goal is to improve cognitive function, physical health, and well-being, addressing ageism and reducing health disparities of Indian elderly people through technology-based interventions.",
      image: "/projects/active.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the various initiatives we offer to support older people.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-1">
            <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">How We Help</h2>
            <p className="text-lg text-gray-600 max-w-9xl mx-auto mb-6">
              At Satoru Foundation™, one of our main goals is to address the challenges that affect human life, i.e., poor health and poor quality of life. Satoru Foundation wants to make significant progress towards a more equitable and inclusive society by addressing and combating inequality. Its initiatives and projects are aimed at leading to tangible improvements in enhancing the quality of life, improving livelihoods, promoting sustainability, supporting marginalised communities, reducing poverty and hunger, especially improving the lives of older individuals, and fostering a more inclusive and supportive community.
            </p>
            <div className="h-1 w-full bg-[#ecc750] mx-auto rounded-full mb-1 mt-1"></div>
          </div>
        </div>
      </section>

      {/* Alternating background project sections */}
      <section>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`py-16 px-4 md:px-0 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center container mx-auto ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">{project.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                  <p className="text-lg text-gray-600 mb-8">
                    Through our {project.title.toLowerCase()} projects, we've been able to impact thousands of lives and
                    create lasting positive change for older adults across India.
                  </p>
                  <Button size="lg" className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white">
                    <Link href={`/projects/${project.id}`}>Learn More</Link>
                  </Button>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            There are many ways you can support our projects and help us make a difference in the lives of older people.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white font-bold">
              <Link href="https://donate.satorufoundation.org">Support Our Work</Link>
            </Button>
            <Button
              size="lg"
              className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white font-bold"
            >
              <Link href="https://forms.gle/JXMZWr6euHobNas9A">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
