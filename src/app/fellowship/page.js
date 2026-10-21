'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

const GeneralQuestions = [
  {
    question: "What is this fellowship program?",
    answer:
      "Satoru Foundation Fellowship is a hands-on, immersive program designed to develop committed individuals who want to contribute meaningfully to grassroots development and social change. Fellows work on real-world challenges alongside communities and the foundation’s team.",
  },
  {
    question: "What is the goal of the fellowship?",
    answer:
      "The fellowship aims to build a new generation of changemakers who understand the realities of underserved communities (senior citizens) and are equipped with the skills, empathy, and leadership to create long-term impact.",
  },
  {
    question: "How long is the program?",
    answer:
      "The standard duration of the fellowship is 6 months, including a training period at the beginning.",
  },
  {
    question: "Will I be paid a stipend?",
    answer:
      "Yes, fellows receive a monthly stipend to cover basic travel and field expenses.",
  },
];

const EligibilityAndApplication = [
  {
    question: "Who can apply for this fellowship?",
    answer:
      "Anyone (aged 22 to 32) who can speak the local language and who is familiar with Andhra Pradesh and Telangana society and culture.",
  },
  {
    question: "What educational qualifications or skills are required?",
    answer:
      "A postgraduate degree in any discipline (ideal streams: social sciences, humanities, behavioural and health sciences, social work) is required. We also welcome researchers, grassroots workers, and social workers without postgraduate degrees but with at least 2–5 years of field experience. Knowledge of Telugu and Hindi (speaking and reading) is mandatory.",
  },
  {
    question: "Is prior experience in the NGO sector or fellowships necessary?",
    answer:
      "No, prior experience is not mandatory. However, experience through volunteering, internships, community initiatives, or field-based research projects is a plus.",
  },
  {
    question: "How do I apply?",
    answer:
      "You can apply online through Satoru Foundation’s official website or designated application portal. Follow the instructions and ensure all required documents are submitted.",
  },
  {
    question: "What documents do I need to submit?",
    answer:
      "Typically: (A) Completed application form, (B) Statement of Purpose (SOP-short video introduction), (C) Resume or CV, and (D) Optional relevant certificates.",
  },
  {
    question: "What is the deadline for applications?",
    answer:
      "The exact deadline will be mentioned on the application page. It is recommended to apply early, as applications may be reviewed on a rolling basis.",
  },
  {
    question: "What is the selection process like?",
    answer:
      "The process includes: (A) Application & SOP review, (B) Skills assessment or task, (C) Virtual interview, (D) Immersive assessment day (in-person), and (E) Final interview and background checks.",
  },
  {
    question: "Is this a full-time commitment?",
    answer:
      "Yes, this is a full-time commitment. Fellows are expected to dedicate their time (Monday to Saturday) to fieldwork, training, and team collaboration.",
  },
];

const LifeAsAFellow = [
  {
    question: "What kind of work will I do?",
    answer:
      "You’ll work on grassroots initiatives focusing on senior citizens such as community engagement, lifelong education support, technology re-skilling, intergenerational activities, or research and advocacy, depending on your role and project needs.",
  },
  {
    question: "What support or training will I receive?",
    answer:
      "Fellows undergo structured training and orientation at the start, followed by ongoing mentorship, capacity-building workshops, and periodic reviews.",
  },
  {
    question: "Where will I be based?",
    answer:
      "Fellows’ work is primarily based in and around the Hyderabad metropolitan region, with possible travel to nearby rural or semi-urban areas.",
  },
  {
    question: "Will there be opportunities for fieldwork?",
    answer:
      "Yes, fieldwork is a core part of the fellowship to help fellows understand ground realities and engage directly with local communities.",
  },
  {
    question: "Will I be assigned a mentor?",
    answer:
      "Yes, each fellow is assigned a mentor from the Satoru Foundation team who will guide, support, and track their progress throughout the fellowship.",
  },
  {
    question: "How will my performance be evaluated?",
    answer:
      "Performance is evaluated based on field engagement, professional conduct, leadership growth, contribution to outcomes, and participation in training and team activities.",
  },
  {
    question:
      "How does the NGO collaborate with local communities and government bodies?",
    answer:
      "The Satoru Foundation collaborates with local communities, panchayats, schools, government departments, and NGOs to ensure community-driven and sustainable initiatives.",
  },
];

const StipendAndFacilities = [
  {
    question:
      "How much stipend do the fellows get in a month? And what other facilities are provided?",
    answer:
      "Fellows receive a monthly stipend (exact amount shared in the Fellowship application form and job description). Additional benefits include access to training materials, professional development support, and resources.",
  },
  {
    question: "Are there any medical benefits given to the fellows?",
    answer:
      "Basic medical support, emergency assistance, and accidental insurance coverage are available during the fellowship. However, fellows are advised to have their own health insurance for comprehensive coverage.",
  },
];

const BenefitsFAQs = [
  {
    question: "Do fellows get holidays?",
    answer:
      "Yes, fellows are entitled to weekly offs and public holidays as per the Satoru Foundation’s calendar. Fellows may also apply for personal leave with prior approval, but flexibility is essential to avoid disrupting fieldwork or project timelines.",
  },
  {
    question:
      "Can a fellow be allowed to continue or extend their fellowship after the program ends?",
    answer:
      "Extensions may be considered based on performance, project needs, and mutual interest. High-performing fellows may be offered leadership roles or opportunities to join the Satoru Foundation team full-time.",
  },
];

const TrainingPeriod = [
  {
    question: "What is the training period for fellows?",
    answer:
      "The initial 1-month training period serves as a probationary phase with orientation, workshops, and community exposure visits.",
  },
  {
    question: "Are fellows compensated during the training period?",
    answer:
      "Yes, fellows receive their stipend during the training period as well.",
  },
  {
    question: "What happens at the end of the training period?",
    answer:
      "Fellows are evaluated, and those who meet expectations continue into the full fellowship phase.",
  },
  {
    question: "What are the expectations during training?",
    answer:
      "Fellows are expected to attend all sessions, participate actively, show learning aptitude, demonstrate team spirit, and complete assignments.",
  },
  {
    question: "What if a fellow leaves during training?",
    answer:
      "If a fellow withdraws during the training, they may not receive the full stipend and will not continue to the full fellowship stage.",
  },
  {
    question:
      "What if the organisation feels the candidate is not suitable for the fellowship during training?",
    answer:
      "The foundation provides an opportunity to improve, but if no progress is observed, the fellow may be advised to leave the fellowship during the training program.",
  },
];

const LocationFAQs = [
  {
    question: "Which state in India is the fellowship functional?",
    answer:
      "Currently, the fellowship is primarily based in Telangana, centered around Hyderabad. Expansion to other regions may happen in the future.",
  },
  {
    question: "Do I get to choose my location?",
    answer:
      "Fellows can indicate preferences, but placements depend on project needs, skills, and language compatibility.",
  },
  {
    question: "Do we get the same base location for the entire fellowship?",
    answer:
      "In most cases, yes. Fellows remain in the same base location, though some may travel occasionally for training or short-term assignments.",
  },
];

const FellowshipPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Satoru Foundation Fellowship
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Be the change you want to see in society — through empathy,
            dialogue, and inclusion.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-3xl font-semibold text-[#5e6f47] mb-4">
            Fellowship Overview
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Duration:</strong> 6 months (Full-time, Paid Position)</li>
            <li><strong>Location:</strong> Hyderabad</li>
            {/* <li><strong>Stipend:</strong> ₹15,000/month</li> */}
            <li><strong>Application Deadline:</strong> 25 November 2025</li>
            <li><strong>Start Date:</strong> December 2025</li>
          </ul>

          <p className="leading-relaxed text-lg">
            The Satoru Foundation Fellowship is a field-based research program
            designed to explore how aging unfolds across urban field sites within
            the Hyderabad metropolitan region, Telangana. Through this project,
            fellows engage directly with communities to study the lived experiences
            of senior adults, understand social and cultural patterns of aging, and
            identify key issues affecting their well-being and participation in society.
          </p>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-[#f7f7f7] text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-3xl font-semibold text-[#5e6f47]">About Satoru Foundation</h2>
          <p className="text-lg leading-relaxed">
            Satoru Foundation is a non-profit organization based in Hyderabad,
            dedicated to improving societal well-being. With a strong focus on
            aging and longevity, our mission is to enhance the quality of life and
            health of marginalized communities, especially senior citizens.
          </p>
          <p className="text-lg leading-relaxed">
            Through evidence-based interventions, advocacy, and capacity building,
            we address challenges such as poor health, limited livelihoods, and
            lack of awareness across four key areas:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Holistic Health</li>
            <li>Research and Innovation</li>
            <li>Skill Development</li>
            <li>Awareness Campaigns</li>
          </ul>
        </div>
      </section> */}

      {/* Fellowship Details */}
      <section className="py-16 bg-[#f7f7f7] text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-3xl font-semibold text-[#5e6f47]">
            About the Fellowship
          </h2>
          <p className="text-lg leading-relaxed">
            The fellowship offers passionate, socially engaged individuals a unique
            opportunity to immerse themselves in understanding how aging unfolds
            in India’s urban contexts. Fellows will work closely with senior citizens
            to explore their lived experiences, daily routines, and social interactions
            in fast-changing cities.
          </p>
          <p className="text-lg leading-relaxed">
            Through community engagement and applied research, fellows will observe,
            listen, and document how senior citizens navigate everyday life — from
            family interactions to participation in community spaces. The insights
            generated will help shape inclusive aging policies, programs, and
            public understanding.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-semibold text-[#5e6f47] mb-4">
            Fellowship Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Conduct fieldwork and engage meaningfully with senior citizens.</li>
            <li>Collaborate with partner organizations and public institutions.</li>
            <li>Observe, listen, and document experiences and challenges.</li>
            <li>Participate in training, reflection sessions, and team discussions.</li>
            <li>Build qualitative and quantitative datasets for research and advocacy.</li>
            <li>Work on <strong>Aatmeeya Sparsha</strong> and a self-chosen research topic related to aging, longevity, or public health.</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-[#f7f7f7] text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-semibold text-[#5e6f47] mb-4">Who Can Apply</h2>
          <p className="text-lg mb-4">
            We welcome applicants with a postgraduate degree in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-6">
            <li>Social Sciences and Humanities</li>
            <li>Natural and Behavioural Sciences</li>
            <li>Medical and Health Sciences</li>
            <li>Allied and Interdisciplinary fields related to aging, health, and society</li>
          </ul>
          <p className="text-lg leading-relaxed">
            We also invite researchers, social workers, and community practitioners
            with 2–5 years of field experience in relevant areas, even without a
            postgraduate degree. Candidates must be able to speak and read both
            <strong> Telugu and Hindi (mandatory)</strong>.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-3xl font-semibold text-[#5e6f47] mb-4">Fellowship Benefits</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Monthly stipend of ₹15,000</li>
            <li>Research training and mentorship</li>
            <li>Workspace, software tools, and accident insurance</li>
            <li>Access to research resources and literature</li>
            <li>Chance to co-author reports or publications</li>
            <li>Networking with professionals and NGOs across India</li>
            <li>Potential collaborations with national and international researchers</li>
          </ul>
        </div>
      </section>

      {/* Contact & Apply */}
{/* Fellowship Join CTA */}
<section className="py-12 px-4 bg-[#5e6f47] text-white text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      Join the Satoru Fellowship 2025
    </h2>
    <p className="text-lg mb-8 max-w-2xl mx-auto">
      Be part of a 6-month journey of empathy, research, and social impact — working closely 
      with senior citizens across Hyderabad to build a more inclusive and compassionate society.
    </p>

    <button
      onClick={() => window.open("https://www.satorufoundation.org/getinvolved", "_blank")}
      className="bg-[#ecc750] hover:bg-[#e6b836] text-gray-800 font-semibold py-3 px-6 rounded transition-colors"
    >
      Apply for the Fellowship
    </button>

    <p className="text-lg mt-3 max-w-2xl mx-auto">
      <strong>Application Deadline:</strong> 25 November 2025 &nbsp;&nbsp;
      <strong>Start Date:</strong> December 2025
    </p>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Frequently Asked Questions
          </h2>

          <FAQSection faqs={GeneralQuestions} title="General Questions" />
          <FAQSection faqs={EligibilityAndApplication} title="Eligibility and Application" />
          <FAQSection faqs={LifeAsAFellow} title="Life as a Fellow" />
          <FAQSection faqs={StipendAndFacilities} title="Stipend and Facilities" />
          <FAQSection faqs={BenefitsFAQs} title="Benefits" />
          <FAQSection faqs={TrainingPeriod} title="Training Period" />
          <FAQSection faqs={LocationFAQs} title="Location" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FellowshipPage;
