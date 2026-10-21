"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const MadaviPage = () => {
  return (
    <>
      <Navbar />

      {/* MADAVi Banner Section */}
      <div className="bg-[#5c6e45] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GAMAN:Generational Assessment of Marginalization: Adversity and Navigating Resilience</h1>
      </div>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
                Gaman
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
              This project aims to uncover the intricate interplay of social and economic barriers that shape mental health and impact academic and work performance among millennials and Gen-Z, who constitute 51 per cent of the population in India. In a society marked by cultural stratification and social inequalities, economic status severely restricts access to essential resources, fostering systemic discrimination and a pervasive sense of powerlessness. By engaging with youth and middle-aged adults through surveys and qualitative interviews, we will explore their lived experiences. This research will examine the relationships between self-efficacy, resilience, and locus of control across two generational cohorts: millennials and Gen-Z. Conducted in urban and rural regions of Telangana and Andhra Pradesh, the study aims to identify critical psychological factors, providing valuable insights for mental health interventions and policies that champion social inclusion.
              </p>

              {/* Rationale */}
              <div className="bg-green-50 p-6 rounded-xl shadow-inner text-[#1e1e1e]">
                <p className="text-green-900 text-lg leading-relaxed">
                In India, social and economic factors impact marginalised people, affecting resilience and mental health. However, little is known about the psychological processes—such as locus of control and self-efficacy—through which these factors affect well-being. This study is important because it attempts to close this gap by examining how social barriers affect resilience and mental health. It offers vital information for specialised actions and legislative decisions that advance equality and social inclusion. Because it can direct the creation of successful interventions and policies to advance social inclusion and equality, this research has a substantial potential influence on policymaking.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Cards */}
          <div className="space-y-6 mt-15">
            {/* Card 1 - Details */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#5e6f47]">Duration:</h3>
              <p>2025–2028</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Location:</h3>
              <p>Telangana & Andhra Pradesh</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Investigators:</h3>
              <p>Kanagala Sai Charan</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Contact:</h3>
              <p className="text-blue-600">info@satorufoundation.org</p>
            </div>

            {/* Card 2 - Progress */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              {/* <h3 className="text-xl font-semibold text-[#5e6f47]">Progress till date</h3>
              <p><strong>Team Training:</strong> 20 field data collectors trained</p>
              <p><strong>Data Collection:</strong> Completed in 7 districts</p>
              <p>
                <strong>Andhra Pradesh:</strong> NTR, Guntur, Palnadu <br />
                <strong>Telangana:</strong> Hyderabad, Ranga Reddy, Sanga Reddy, Nalgonda
              </p> */}
              <p><strong>Current Status:</strong> Data collection is in progress</p>
              <p><strong>Impact:</strong> 1000 people</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link href={"/contact"}>
          <Button className="bg-[#ecc750] hover:bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-full">
            REGISTER YOURSELF
          </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MadaviPage;
