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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">MADAVI:Multi-Temporal and Dimensional aging Views in India</h1>
      </div>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
                Madavi
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                In this innovative project, we will explore the pathways that shape older adults' views on aging, focusing on critical factors such as healthcare access, health insurance, digital services, health infrastructure, social welfare schemes, pensions, family support, and socio-economic status. These elements significantly influence their cognitive, emotional, and physiological health outcomes. We will conduct a longitudinal diary study in diverse urban and rural settings to capture daily fluctuations in older adults’ psychological and physiological health. This approach will provide valuable insights into their lived experiences over time. As part of a global consortium involving ten countries, our research will contribute to both local understanding and international knowledge. By revealing the connections between societal factors and health, we aim to inform targeted interventions that enhance the quality of life for older adults.
              </p>

              {/* Rationale */}
              <div className="bg-green-50 p-6 rounded-xl shadow-inner text-[#1e1e1e]">
                <h3 className="text-2xl md:text-xl font-semibold text-green-900 mb-3">Rationale:</h3>
                <p className="text-green-900 text-lg leading-relaxed">
                  India is undergoing a significant demographic shift, with older adults currently comprising 10.5% of the population, projected to rise to 20.8% by 2050. This rapid increase presents urgent challenges, as the quality of life and access to healthcare for older adults remain critically low in urban and rural areas. Age discrimination is a serious concern, being the most frequently reported form of discrimination among older individuals, surpassing caste and gender biases. This pervasive issue creates barriers to essential services and exacerbates health disparities. To address these challenges, our project will investigate the social and structural factors influencing the health and well-being of older adults. By uncovering the elements affecting their quality of life, we aim to provide insights that inform targeted interventions, fostering a more equitable society that respects and uplifts its aging population.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Cards */}
          <div className="space-y-6 mt-15">
            {/* Card 1 - Details */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#5e6f47]">Duration:</h3>
              <p>2023–2026</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Location:</h3>
              <p>Telangana & Andhra Pradesh</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Investigators:</h3>
              <p>Kanagala Sai Charan</p>
              <h3 className="text-xl font-semibold text-[#5e6f47]">Contact:</h3>
              <p className="text-blue-600">info@satorufoundation.org</p>
            </div>

            {/* Card 2 - Progress */}
            <div className="bg-white border shadow-md rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#5e6f47]">Progress till date</h3>
              <p><strong>Team Training:</strong> 20 field data collectors trained</p>
              <p><strong>Data Collection:</strong> Completed in 7 districts</p>
              <p>
                <strong>Andhra Pradesh:</strong> NTR, Guntur, Palnadu <br />
                <strong>Telangana:</strong> Hyderabad, Ranga Reddy, Sanga Reddy, Nalgonda
              </p>
              <p><strong>Current Status:</strong> Data analysis in progress</p>
              <p><strong>Impact:</strong> 200 people</p>
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
