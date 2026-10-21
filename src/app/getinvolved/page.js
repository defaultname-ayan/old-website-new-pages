import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import Link from "next/link";
import SliderComponent from "../components/SliderComponent";
import { prisma, withDemoFallback } from 'lib/prisma';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const revalidate = 86400;

async function getJobs() {
  const jobs = await withDemoFallback(prisma.job.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  }));
  return jobs;
}

async function getTestimonials() {
  const testimonials = await withDemoFallback(prisma.testimonial.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  }));
  return testimonials;
}

export default async function GetInvolved() {
  // Fetch data in parallel
  const [jobOpenings, testimonials] = await Promise.all([
    getJobs(),
    getTestimonials(),
  ]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you're looking to work with us, volunteer your time, or intern to learn and contribute — we welcome you!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#5e6f47] mb-12">Current Openings</h2>
          {jobOpenings.length === 0 ? (
            <div className="text-center text-gray-600">No current openings available.</div>
          ) : (
            <div className="grid md:grid-cols-1 gap-10">
              {jobOpenings.map((job) => (
                <div key={job.id} className="p-6 border rounded-xl shadow-md">
                  <h3 className="text-xl text-black font-semibold mb-2">{job.title}</h3>
                  {job.description && (<p className="text-gray-700 mb-4">{job.description}</p>)}

                  {/* Display Job Details */}
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-500">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="text-gray-500">
                      <strong>Type:</strong> {job.type}
                    </p>
                    {job.requirements && (
                      <p className="text-gray-500">
                      <strong>Requirements:</strong> {job.requirements}
                    </p>
                  )}
                    {job.salary && (
                      <p className="text-gray-500">
                        <strong>Salary:</strong> {job.salary}
                      </p>
                    )}
                    <p className="text-gray-500">
                      <strong>Application Deadline:</strong> {job.deadline}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={`data:${job.pdfType};base64,${job.pdfBase64}`}
                      download={`${job.title.replace(/\s+/g, '_')}_description.pdf`}
                      className="inline-block"
                    >
                      <Button className="bg-[#ecc750] hover:bg-[#eab308] text-black">
                        Download PDF
                      </Button>
                    </a>
                    <Link href={job.applyLink}>
                      <Button className="bg-[#5e6f47] hover:bg-[#5e6f47]/90 text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#fef9ef]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#5e6f47] mb-8">Become a Volunteer or Intern</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Join our mission to create a better world. Whether you're looking to give back or gain experience, we have a place for you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="https://forms.gle/JXMZWr6euHobNas9A">
              <Button className="bg-[#ecc750] text-black hover:bg-[#eab308]">Apply to be a Volunteer</Button>
            </Link>
            <Link href="https://forms.gle/5Ua6qiVWdZVWDZoz8">
              <Button className="bg-[#5e6f47] text-white hover:bg-[#5e6f47]/90">Apply to be an Intern</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#5e6f47] font-bold text-center mb-12">What Our Interns Say</h2>
          <div className="max-w-4xl mx-auto">
            {console.log(testimonials.length)}
            {testimonials.length === 0 ? (
              <div className="text-center text-gray-600">No testimonials available.</div>
            ) : (
              <SliderComponent testimonials={testimonials} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
