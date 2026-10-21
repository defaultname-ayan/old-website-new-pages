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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Active India:Active India: Advancing cognitive and physical health through technology-driven intervention for vibrant elderly.
        </h1>
      </div>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
                Active India
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
              India has 11 per cent of people above 60 years old, but their access to health care and social care services is abysmally low, and this leads to poor quality of life, illness, social isolation, loneliness and mistreatment due to a lack of care and sensitivity. The main goal of this project is to run a novel intervention that would enhance the cognitive functioning, physical health, and psychological well-being and the overall quality of life of older adults in India. This intervention also has a secondary aim to address the issues of age-based discrimination and reduce the negative self-views of their own aging process, which are becoming more prevalent as the population ages and ageism increases. We will run the RCT intervention project in Telangana, assessing how access to technology (i.e., Virtual reality and digital exercise training) improves self-efficacy, cognitive function, and physical fitness. This study will add to the expanding corpus of research on aging in low-resource nations by providing insightful information about scalable, affordable interventions that may enhance health outcomes and reduce ageism in India.
              </p>

              {/* Rationale */}
              <div className="bg-green-50 p-6 rounded-xl shadow-inner text-[#1e1e1e]">
              <h3 className="text-2xl md:text-xl font-semibold text-green-900 mb-3">Rationale:</h3>
                <p className="text-green-900 text-lg leading-relaxed">
                The number of elderly people in India is increasing quickly, and ageism is a common problem that lowers their standard of living and affects their physical and mental health. Although earlier studies on ageism reduction interventions and interventions to improve quality of life and physical health in older adults were conducted in Western nations, little is known about workable interventions in low-resource environments like India. By examining the impact of VR and iPad-based cognitive and physical training games to enhance aging-related health and lessen ageism, this study seeks to close that gap and provide important information for age-inclusive policies and actions in India.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Cards */}
          <div className="space-y-6 mt-15">
            {/* Card 1 - Details */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#5e6f47]">Duration:</h3>
              <p>2025–2029</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Location:</h3>
              <p>Telangana & Andhra Pradesh</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Investigators:</h3>
              <p>Kanagala Sai Charan</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Contact:</h3>
              <p className="text-blue-600">info@satorufoundation.org</p>
            </div>

            {/* Card 2 - Progress */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-[#5e6f47]">Progress till date</h3>
              <p><strong>Current Status:</strong> Data collection is in progress</p>
              <p><strong>Impact:</strong> 200 people</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link href={"/contact"}>
          <Button className="bg-[#ecc750] hover:bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-full">
             REGISTER YOURSELF TO PARTICIPATE
          </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MadaviPage;
