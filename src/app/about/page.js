import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import DirectorProfile from "../components/Director";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Satoru Foundation
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We don't just add years to life we add life to years. Satoru
            Foundation exists to ensure every senior citizen in India ages with
            dignity, health, and purpose.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The generation that built modern India now faces loneliness,
                poor health, and neglect. At Satoru Foundation, we believe
                ageing is not a burden it is a profound stage of life that
                deserves dignity, care, safety, and purpose.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We work exclusively on ageing and senior citizen welfare,
                combining gerontological research with grassroots community
                action to directly improve the everyday lives of older adults
                across India.
              </p>
              <p className="text-lg text-gray-600">
                Every program we run, every partnership we build, every campaign
                we lead all of it serves one goal: ensuring that every senior
                citizen in India lives with health, dignity, and a sense of
                belonging.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about/whoweare.jpg"
                alt="Satoru Foundation team members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#5e6f47] text-center">
            Our Mission and Purpose
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f47]">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To improve the quality of life of senior citizens across India
                by addressing the personal and societal challenges of ageing so
                every elder lives with health, dignity, and belonging.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f47]">
                Our Purpose
              </h3>
              <p className="text-gray-700">
                To build an India that truly cares for its elders through direct
                support to senior citizens and by equipping younger generations
                with the skills and compassion to serve and advocate for them.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f47]">
                The Story Behind Our Name
              </h3>
              <p className="text-gray-700">
                Satoru (悟る) is rooted in Zen Buddhism, meaning "to understand"
                or "to attain enlightenment" the deep wisdom earned through a
                life fully lived. Senior citizens carry that wisdom. Our role is
                to honour it, protect it, and ensure it is never diminished by
                neglect or indifference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-8 text-[#5e6f47] text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-[#5e6f47]">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f47]">
                  Compassion
                </h3>
                <p className="text-gray-600">
                  Every elder's story is met with empathy and respect —
                  recognising that dignity is non-negotiable regardless of
                  circumstance.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-[#5e6f47]">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f47]">
                  Dignity First
                </h3>
                <p className="text-gray-600">
                  Senior citizens are rights-holders, not charity recipients.
                  Our programs are built with elders, not just for them.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-[#5e6f47]">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f47]">
                  Evidence-Based
                </h3>
                <p className="text-gray-600">
                  Gerontological research and real data drive every program we
                  run, ensuring meaningful and measurable impact in the lives of
                  older adults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#5e6f47]">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            By 2050, one in every five Indians will be a senior citizen. We're
            looking for passionate individuals and organisations to help us
            build an India that truly honours its elders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#5e6f47] hover:bg-[#5e6f47]/90">
              <a
                href="https://forms.gle/JXMZWr6euHobNas9A"
                className="text-white hover:underline"
              >
                Volunteer With Us
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-[#ecc750] text-black hover:bg-[#eab308]"
            >
              <a
                href="https://donate.satorufoundation.org"
                className="text-black hover:underline"
              >
                Support Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
