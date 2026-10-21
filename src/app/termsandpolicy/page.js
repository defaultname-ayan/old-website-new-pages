"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* content container */}
      <section className="flex-grow py-12 px-6 md:px-16 max-w-5xl mx-auto text-black">
        {/* --------------- Terms & Conditions --------------- */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#5e6f47] mb-8 text-center">
          Terms and Conditions
        </h1>

        <p className="mb-4">Effective Date: 29th April 2025</p>
        <p className="mb-4">
          Welcome to the website of Satoru Foundation (“we,” “us,” “our”). By
          accessing or using our website, you accept and agree to comply with
          these Terms and Conditions. If you do not agree with them, please do
          not use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. About Satoru Foundation
        </h2>
        <p className="mb-4">
          Satoru Foundation is a nonprofit organisation registered as section 8
          of the companies act, 2013 (Act No. 18 of 2013) dedicated to enhancing
          the well-being, livelihood opportunities, skill development, and
          dignity of older adults and marginalised communities through research,
          intervention programs, services, and advocacy efforts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Purpose</h2>
        <p className="mb-4">
          The Satoru Foundation website provides information regarding our
          programs, activities, events, and initiatives aimed at improving
          mental health and wellbeing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Website Use</h2>
        <p className="mb-4">
          You agree to use the website lawfully and respectfully and in a manner
          that does not infringe upon the rights of others or inhibit their use
          of the website.
        </p>
        <p className="mb-4">You must not:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Violate any laws or third-party rights,</li>
          <li>Upload or distribute harmful material,</li>
          <li>
            Engage in any activity that could damage or impair the functioning
            of the site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All website content (including text, images, videos, logos, graphics,
          and software) is the property of Satoru Foundation or its licensors,
          or its content suppliers and is protected by applicable intellectual
          property laws.{" "}
        </p>
        <p className="mb-4">
          Satoru Foundation website contains content specifically provided by
          us, our partners or other users and such content is protected by
          copyrights, trademarks, service marks, patents, trade secrets or other
          proprietary rights and laws.
        </p>
        <p className="mb-4">
          You may view, download, or print information for academic, research,
          personal, non-commercial purposes only.
        </p>
        <p className="mb-4">You may not:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Reproduce, distribute, sell, modify, or otherwise exploit any
            content from our website content without our prior written consent
            from Satoru Foundation is prohibited.
          </li>
        </ul>
        <p className="mb-4">
          Any use of our content, including attempts to alter or tamper or
          remove trademarks, copyrights, or proprietary notices with downloaded
          content from Satoru Foundation website is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Donations and Payments
        </h2>
        <p className="mb-4">
          Donations made through the website or other means are voluntary and
          non-refundable.
        </p>
        <p className="mb-4">
          We use secure third-party platforms to process donations and do not
          store any payment information on our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Disclaimer</h2>
        <p className="mb-4">
          The website and its content are provided on an 'as is' and 'as
          available' basis. Satoru Foundation makes no warranties, express or
          implied, including but not limited to warranties of merchantability or
          fitness for a particular purpose.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Privacy</h2>
        <p className="mb-4">
          We respect your privacy. Our Privacy Policy explains how we collect,
          use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. External Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites for your
          convenience. We are not responsible for the content, policies, or
          practices of external websites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          9. Limitation of Liability
        </h2>
        <p className="mb-4">
          Satoru Foundation strives to provide accurate and updated information,
          but it does not guarantee its completeness, accuracy, or the
          reliability of any content.
        </p>
        <p className="mb-4">
          We are not responsible for any loss or damage arising from the use of
          our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Changes</h2>
        <p className="mb-4">
          We reserve the right to update or modify these Terms and Conditions at
          any time. Changes will be effective immediately upon posting on the
          website.
        </p>
        <p className="mb-4">
          Your continued use of our website following any changes constitutes
          your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">11. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of the Republic of India, without regard to
          its conflict of law principles. The courts of Hyderabad, Telangana
          shall have exclusive jurisdiction over any disputes arising from these
          Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">12. Contact</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please
          contact us:
        </p>
        <p className="mb-4">
          Satoru Foundation <br />
          Email: info@satorufoundation.org
          <br />
          Phone: +91 9959485500
          <br />
          Address: Model House Building, Saibaba Temple Rd, Dwarakapuri,
          Punjagutta, Hyderabad, Telangana, 500082
        </p>

        {/* --------------- Privacy Policy --------------- */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#5e6f47] mt-16 mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">Effective Date: 29th April 2025</p>
        <p className="mb-4">
          Satoru Foundation (“we,” “us,” “our”) respects your privacy and is
          committed to protecting the personal information you share with us
          through our website. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">We may collect:</p>
        <p className="mb-4">
          Personal information: This includes your Name, email address, phone
          number, postal address, subject, and message details. Information
          voluntarily provided via survey forms, signup for updates, make a
          donation, or volunteering, visitors comments on the website.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Non-personal information: IP address, cookies, browser type, device
            type, access times, pages visited.
          </li>
          <li>
            Share information while submitting job applications, signing up for
            courses, events, campaigns etc.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use collected information to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Respond to your inquiries,</li>
          <li>Process donations,</li>
          <li>Send updates about our programs and initiatives,</li>
          <li>Improve our website and outreach efforts.</li>
          <li>
            To support academic and scientific research, when used for research
            purposes, your personal data will be anonymized or used only with
            your explicit consent, in accordance with ethical and legal
            guidelines.
          </li>
        </ul>
        <p className="mb-4">
          We do not sell, rent, or trade your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Sharing Information
        </h2>
        <p className="mb-4">
          We may share your information with trusted service providers who
          assist us in operating our website, conducting outreach, and
          processing donations.
          <br />
          All donation transactions are handled securely by trusted third-party
          payment processors.
          <br />
          We ensure that such third parties maintain confidentiality and data
          protection standards.
          <br />
          We may also disclose information if required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Security</h2>
        <p className="mb-4">
          We implement industry-standard technical and organizational measures
          to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction. However, no method of data
          transmission over the Internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Cookies and Analytics
        </h2>
        <p className="mb-4">
          Our website may use cookies and similar tracking technologies to
          enhance user experience, understand user behaviour, and improve our
          services. You may adjust your browser settings to manage or disable
          cookies, though some features of the website may not function properly
          as a result.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Access the personal information we hold about you,</li>
          <li>Request corrections or updates,</li>
          <li>
            Request deletion of your data, subject to legal and operational
            obligations.
          </li>
        </ul>
        <p className="mb-4">
          To exercise any of your rights, please contact us using the
          information provided below. We may verify your identity before
          responding to such requests
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          7. Children’s Privacy
        </h2>
        <p className="mb-4">
          We do not knowingly collect information from individuals under the age
          of 13 without parental consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Links to Other Sites
        </h2>
        <p className="mb-4">
          Our website may link to external sites. We are not responsible for
          these third-party websites' content or privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          9. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Changes will be posted
          on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-4">
          For any questions about this Privacy Policy or your personal data,
          please contact:
        </p>
        <p className="mb-4">
          Satoru Foundation <br /> Email: info@satorufoundation.org
          <br />
          Phone: +91 9959485500
          <br />
          Address: Model House Building, Saibaba Temple Rd, Dwarakapuri,
          Punjagutta, Hyderabad, Telangana, 500082
        </p>
      </section>

      <Footer />
    </main>
  );
}
