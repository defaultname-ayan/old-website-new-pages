'use client'

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const activities = [
  {
    id: 1,
    title: "Holistic Health & Well-being Initiatives",
    image: "/whatdowedo/holistic-health.jpg",
    oneLiner: "Holistic Health & Well-being Initiatives",
    description: "We enhance seniors' well-being through health camps, geriatric assessments, yoga, nutrition guidance, and awareness programs.",
  },
  {
    id: 2,
    title: "Social Engagement - Rebuilding Connections Initiatives",
    image: "/whatdowedo/social-engagement.jpg",
    oneLiner: "Social Engagement - Rebuilding Connections Initiatives",
    description: "We combat loneliness by fostering intergenerational bonds through support groups, social events, and mental health services.",
  },
  {
    id: 3,
    title: "Digital & Financial Literacy Initiatives",
    image: "/whatdowedo/digital-financial.jpg",
    oneLiner: "Digital & Financial Literacy Initiatives",
    description: "We empower seniors with digital literacy and financial security through tech workshops, telemedicine, and financial planning education.",
  },
  {
    id: 4,
    title: "Rights Awareness",
    image: "/whatdowedo/rights.jpg",
    oneLiner: "Rights awareness",
    description: "We educate seniors about their rights and welfare schemes through legal awareness workshops and accessible, multilingual resources.",
  },
]

export default function Whatdowedo() {
  const [flippedCard, setFlippedCard] = useState(null)

  const handleFlip = (id) => {
    setFlippedCard(prev => (prev === id ? null : id))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-1 text-[#5e6f47]"
          >
            What do we do?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="h-1 w-70 bg-[#ecc750] mx-auto rounded-full mb-6 origin-left"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-black max-w-3xl mx-auto"
          >
            Here's a glimpse of the impactful work we do across various domains of care and community support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              onClick={() => handleFlip(activity.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative perspective cursor-pointer"
            >
              <div className={`w-full h-96 transition-transform duration-700 transform-style-preserve-3d ${flippedCard === activity.id ? 'rotate-y-180' : ''}`}>
                
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={400}
                    height={320}
                    className="rounded-md object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black text-center">{activity.oneLiner}</h3>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-black rounded-lg shadow-md p-6 flex items-center justify-center text-center">
                  <p className="text-xl leading-relaxed font-medium">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flip animation styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.section>
  )
}
