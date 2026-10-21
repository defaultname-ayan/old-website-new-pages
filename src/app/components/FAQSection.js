'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">{title}</h3>

        <div className="max-w-3xl mx-auto text-left divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>

            <div
            className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
            }`}
            >
            <p className="text-gray-600">{faq.answer}</p>
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
