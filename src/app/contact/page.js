import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactSection from "../components/ContactSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to learn more about our work.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* New: Organization Info Section */}
      {/* <section className="py-16 bg-[#fdf8f2] text-gray-800"> */}
        {/* <div className="container mx-auto px-4 max-w-3xl space-y-4 text-base md:text-lg leading-relaxed">
          <p><strong>Organisation Name:</strong> SATORU FOUNDATION™</p>
          <p>Legal Compliance: Non-Profit Organisation, Registered under Section 8 of the Companies Act, 2013,</p>
          <p>Recognized By Ministry of Corporate Affairs, Government of India, Niti Aayog.</p>
          <p>Our main registered office located in Hyderabad, Telangana state, India</p>
          <p><strong>CIN:</strong>  U72200TS2024NPL189603</p>
          <p><strong>Darpan:</strong>  TS/2024/0454519</p>
          <p><strong>PAN:</strong> ABOCS3612C</p>
          <p><strong>Income TAX (12A/80G Approved)</strong></p>
          <p>12A : ABOCS3612CE20241</p>
          <p>80G : ABOCS3612CF20241</p>
        </div> */}
      {/* </section> */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">How can I donate to the Satoru Foundation?</h3>
              <p className="text-gray-600">
                You can donate online through our website, by mail, or by phone. Visit our Donate page for more
                information on how to contribute.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">How is my donation used?</h3>
              <p className="text-gray-600">
              Your contribution supports our research-driven initiatives, grassroots community development, and humanitarian outreach. We ensure that your support creates direct and lasting impact where it's needed most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Can I volunteer with the Satoru Foundation?</h3>
              <p className="text-gray-600">
                Yes! We welcome volunteers who are passionate about our mission. Visit our Volunteer page to learn about
                current opportunities and how to get involved.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Does the Satoru Foundation accept in-kind donations?
              </h3>
              <p className="text-gray-600">
                Yes, we accept in-kind donations that align with our mission and program needs. Please contact us to
                discuss your potential donation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                How is my donation used?
              </h3>
              <p className="text-gray-600">
                The donations are used for senior citizen welfare initiatives and for the improvement of health (physical and mental) and overall wellbeing of senior citizens and marginalized communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Whom do we accept donations from?
              </h3>
              <p className="text-gray-600">
                We only accept donations from Indian citizens and NRI's with Indian passport.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Do I get any tax benefits by donating?
              </h3>
              <p className="text-gray-600">
                Yes you'll get tax benefits by donating to our organization (80G approved organization).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
