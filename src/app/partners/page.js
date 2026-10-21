import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"


export default function PartnershipsPage() {
  const partners = [
    {
      id: "dementia-india",
      title: "Dementia India Alliance",
      description:
        "A family carer-centered organization providing compassionate support and hope to persons with dementia and their families through comprehensive care, awareness, skill training and advocacy initiatives.",
      focus: [
        "Dementia awareness & early detection",
        "Family caregiver support",
        "Integrative care models",
        "DemClinic telemedicine services",
        "Provide skill training to address dementia and geriatric care."
      ],
      image: "/partners/DIA_icon.png",
      link: "https://dementia-india.org/",
    },
    {
      id: "elderly-care",
      title: "Elderly Care India",
      description:
        "A volunteer-driven knowledge and resource platform offering expert guidance on senior care homes, home care services, aging policies, and best practices.",
      focus: [
        "Care home best practices",
        "Home care guidance",
        "Aging policy resources",
        "Knowledge sharing platform",
      ],
      image: "/partners/elderly-care.svg",
      link: "https://elderlycareindia.org/",
    },{
      id: "united-way-hyderabad",
      title: "United Way of Hyderabad",
      description:
        "A non-profit organization mobilizing the caring power of communities to drive long-term social change through education, health, and financial stability for underserved communities across Telangana and Andhra Pradesh.",
      focus: [
        "Education & employability programs",
        "Health & well-being initiatives",
        "Financial stability & livelihoods",
        "Community-led CSR partnerships",
      ],
      image: "/partners/uwh.png",
      link: "https://www.unitedwayhyderabad.org/",
    },
    {
      id: "nims-partnership",
      title: "Nizam's Institute of Medical Sciences (NIMS)",
      description:
        "A healthcare and academic partnership with Nizam's Institute of Medical Sciences (NIMS), Hyderabad, supporting medical education, healthcare delivery, research, and community health initiatives.",
      focus: [
        "Medical education & training",
        "Healthcare & community health initiatives",
        "Clinical research & innovation",
        "Collaborative healthcare programs",
      ],
      image: "/partners/nims.jpg",
      link: "https://www.nims.edu.in/",
    },
    {
      id: "st-anns-college",
      title: "St. Ann's College for Women",
      description:
        "An academic partnership with St. Ann's College for Women, Hyderabad, focused on empowering students through quality education, skill development, career readiness, and opportunities for holistic growth.",
      focus: [
        "Education & skill development",
        "Student employability & career readiness",
        "Leadership & holistic development",
        "Academic and community initiatives",
      ],
      image: "/partners/stanns.png",
      link: "https://www.stannscollegehyd.com/",
    }

  ]


  const programs = [
    {
      title: "Memory Wellness Camps",
      icon: "/partners/icons/brain.png",
      desc: "Community-based awareness camps combining dementia screening and cognitive assessment.",
    },
    {
      title: "Geriatric Training",
      icon: "/partners/icons/hat.png",
      desc: "Equipping caregivers and professionals with essential skills to deliver compassionate, high-quality elder care."
    },
    {
      title: "Intergenerational Initiatives",
      icon: "/partners/icons/parents.png",
      desc: "Connecting younger generations with seniors to build social bridges and reduce isolation.",
    },
    {
      title: "Evidence-Based Research",
      icon: "/partners/icons/graph.png",
      desc: "Conducting RCTs and field studies to develop scalable aging interventions in India.",
    },
    {
      title: "Digital Literacy",
      icon: "/partners/icons/phone.png",
      desc: "Technology re-skilling programs empowering older adults for independent living.",
    }
  ]


  const testimonials = [
    {
      id: 1,
      name: "Ramani Sundaram",
      title: "Executive Director",
      organization: "Dementia India Alliance",
      image: "/partners/testimonials/ramani_DIA.webp",
      quote: "Partnerships with Sai Charan K harnesses community strengths to deliver culturally attuned dementia care, making services accessible and sustainable across India's diverse regions. Looking forward to more collaborative work.",
      highlight: "2025 has been a meaningful year for Satoru Foundation. Through multiple community screening camps conducted across Hyderabad, in collaboration with Dementia India Alliance, we have taken important strides toward improving awareness and enabling early detection of dementia."
    },
    {
      id: 2,
      name: "Pankaj Mehrotra",
      title: "Founder | Senior Living Consultant",
      organization: "Elderly Care India",
      image: "/partners/testimonials/pankaj_elder.jpeg",
      quote: "SATORU Foundation is a young NGO which is deeply committed to uplift and improve the lives of Older People through various intervention programs like Psycho-Gerontology, Geropsychology, Research, Well-being and many other initiatives.",
      highlight: "Satoru Foundation took up the initiative of validating the list of Care Homes in Andhra Pradesh and Telangana which we had earlier published on the website of Elderly Care India. They have diligently updated the list of Old Age Homes (Care Homes) in both states."
    }
  ]


  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />


      {/* Hero Section */}
      <section className="bg-[#5e6f47] text-white py-15">
  <div className="container mx-auto px-4 text-center">
   <div className="text-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
    Partnerships & Joint Initiatives
  </h1>
  <div className="h-1 w-full max-w-xs sm:max-w-md md:max-w-lg bg-[#ecc750] mx-auto rounded-full m-8 mb-10" />


</div>


    
    <p className="text-xl max-w-3xl mx-auto">
      We want to improve the quality of life and well-being of senior citizens through 
      strategic collaboration with like-minded organizations to achieve this goal.
    </p>
  </div>
</section>



      {/* Intro */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-5xl mx-auto mb-6">
              India's senior population faces unprecedented challenges, which requires collaborations between organizations to address. We need to unite around a common vision: to create a more inclusive, compassionate ecosystem where every senior citizen receives dignified care and evidence-based support.
            </p>
            <div className="h-1 w-32 bg-gray-200 mx-auto rounded-full"></div>
          </div>


          {/* Partners */}
          <div className="space-y-6">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="group bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-12 items-stretch">
                  {/* IMAGE */}
                  <div
                    className={`md:col-span-5 bg-[#f8f9fa] relative min-h-[250px] md:min-h-full flex border border-gray-200 items-center justify-center p-8
                      ${index % 2 === 1 ? "md:order-1" : "md:order-2"}
                    `}
                  >
                    <div className="relative w-full h-full max-h-[180px] transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={partner.image}
                        alt={partner.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>


                  {/* TEXT */}
                  <div
                    className={`md:col-span-7 p-8 lg:p-10 flex flex-col justify-center
                      ${index === 1 ? "md:order-2" : "md:order-1"}
                    `}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#5e6f47] mb-3">
                      {partner.title}
                    </h2>


                    <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-xl">
                      {partner.description}
                    </p>


                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#ecc750] mb-3">
                      Key Focus Areas
                    </h4>


                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                      {partner.focus.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <span className="text-[#ecc750] mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>


                    <Link
                      href={partner.link}
                      target="_blank"
                      className="inline-flex w-fit items-center justify-center bg-[#ecc750] text-[#5e6f47] px-6 py-2.5 font-bold rounded-lg border-2 border-[#ecc750] hover:bg-[#5e6f47] hover:text-[#ecc750] transition duration-300 text-sm shadow-sm"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Programs */}
      <section className="py-20 bg-white border border-t-gray-400 border-b-gray-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e6f47] mb-4">
              Joint Initiative Programs
            </h2>
            <p className="text-gray-600">
              Transformative programs advancing senior well-being across India.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-[#ecc750]  rounded-2xl hover:hover:shadow-2xl transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#f3f4f6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5e6f47] transition">
                  <Image
                    src={program.icon}
                    alt={program.title}
                    width={28}
                    height={28}
                    className="object-contain group-hover:invert"
                  />
                </div>


                <h4 className="text-xl font-bold text-[#5e6f47] mb-4">
                  {program.title}
                </h4>


                <div className="h-[2px] w-8 bg-[#5e6f47] mb-4 mx-auto group-hover:w-full transition-all"></div>


                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center mb-24">
      <h2 className="text-[14px] font-bold tracking-[0.4em] text-[#ecc750] uppercase mb-6">
        Testimonials
      </h2>
      <p className="text-3xl md:text-4xl font-light text-[#5e6f47] leading-tight tracking-tight">
        Voices from our <span className="italic">collaborative network</span>.
      </p>
    </div>


    {/* Content Grid */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 ">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className=" bg-white border border-gray-300 rounded-xl p-10 group relative">
          {/* Minimal Profile */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-[#5e6f47]">
                {testimonial.name}
              </h3>
              <p className="text-[9px] font-bold text-[#ecc750] uppercase tracking-widest">
                {testimonial.organization}
              </p>
              <p className="text-[10px] text-gray-400 font-medium">
                {testimonial.title}
              </p>
            </div>
          </div>


          {/* Editorial Quote */}
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-5xl text-gray-50 font-serif pointer-events-none">
              "
            </span>
            <blockquote className="relative z-10">
              <p className="text-base text-gray-600 font-light leading-relaxed">
                "{testimonial.quote}"
              </p>
            </blockquote>
            {/* Subtle accent line */}
            <div className="mt-6 h-[1px] w-12 bg-gray-100 group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* WANT TO PARTNER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#f8f9fa] rounded-3xl p-12 md:p-16 border border-gray-100 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#ecc750] rounded-b-full"></div>


            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5e6f47] mb-6 tracking-tight">
                Want to Partner With Us?
              </h2>


              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                We collaborate with nonprofits, research institutions, healthcare
                providers, corporates, and community organizations to co-create
                impactful, evidence-based solutions for healthy aging in India. 
              </p>
              


              <Link href="/contact" className="inline-block">
                <button 
                  className="inline-flex w-fit items-center justify-center bg-[#ecc750] text-[#5e6f47] px-8 py-3 font-bold rounded-lg border-2 border-[#ecc750] hover:bg-[#5e6f47] hover:text-[#ecc750] transition duration-300 text-base shadow-sm"
                >
                  Contact Us
                </button>
              </Link>
            </div>
            
            
            <div className="hidden md:block absolute -bottom-12 -right-12 w-48 h-48 bg-[#ecc750]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xl md:text-2xl font-bold text-[#5e6f47] mt-12 tracking-tight">
              "We welcome{" "}
                <span className="font-bold">employee engagement</span>{" "}
                from corporate and government organisations to 
              create meaningful impact in the lives of senior citizens."
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
