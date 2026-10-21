"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Brain, 
  Stethoscope, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Phone,
  CheckCircle2,
  Globe,
  Building2,
  Sparkles,
  AlertCircle,
  Award
} from 'lucide-react';

// --- Configuration ---
const COLORS = {
  primary: '#5e6f47',    // Brand Green
  accent: '#ecc750',     // Brand Yellow
  bg: '#f9f9f7',         // Light Cream
  text: '#1F2937',       
};

// --- LINKS ---
const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeG4QdU5nQ9431ybEBtLtOz1LRoqtehy8Xu1PhNvb6CY_ciQw/viewform"; 
const BROCHURE_DRIVE_LINK = "https://drive.google.com/drive/folders/1FB5oJmfhA8Y1cQqCSXXUHoM0-3LciznV?usp=sharing"; 

// --- Slideshow Images ---
const HERO_IMAGES = [
  "training/training1.jpg", 
  "training/training2.jpg", 
  "training/training3.jpg"  
];

// --- Data ---
const STATS = [
  { id: 1, value: "90 Lakhs+", label: "Lives currently affected by Dementia in India", icon: Users },
  { id: 2, value: "1.7 Crore", label: "Projected increase by 2036", icon: Heart },
  { id: 3, value: "No Known Cure", label: "Making Specialized Care Vital", icon: AlertCircle },
];

const TARGET_AUDIENCE = [
  {
    title: "General Public & Society",
    icon: Globe,
    desc: "Building Inclusive Communities",
    hoverText: "For everyday citizens, public sector employees and social workers. Learn to identify signs, reduce stigma, and create a supportive environment."
  },
  {
    title: "Students",
    icon: GraduationCap,
    desc: "Future Healthcare Leaders",
    hoverText: "For Psychology & Social Work students. Gain early exposure to geriatric care and understand the human side of medical support before starting your career."
  },
  {
    title: "Family Caregivers",
    icon: Heart,
    desc: "The Primary Support System",
    hoverText: "For those caring for loved ones at home. Learn practical tips to manage daily challenges, reduce your own stress, and create a peaceful home environment."
  },
  {
    title: "Healthcare Professionals",
    icon: Stethoscope,
    desc: "Nurses & Hospital Staff",
    hoverText: "Enhance your professional skillset. Master person-centered care, ethics, and management strategies for acute care settings."
  },
  {
    title: "Volunteers",
    icon: Users,
    desc: "Community Voices",
    hoverText: "Become a certified trainer to sensitize others. Help us build a network of informed individuals who can support families in need."
  }
];

const CURRICULUM = [
  { title: "Understanding Dementia", time: "60 mins", content: "Demystifying the condition. We explain the causes, types, and how it changes the brain in simple, non-medical terms." },
  { title: "The Stages of Progression", time: "30 mins", content: "What to expect as time goes on. Understanding the journey helps in planning better care." },
  { title: "Basic Assessment Tools", time: "30 mins", content: "Simple ways to recognize the signs early. (Includes basic cognitive assessments and nursing scales)." },
  { title: "Management Strategies (Daily Life)", time: "60 mins", content: "Practical tips for eating, bathing, and communication. How to handle confusion without conflict." },
  { title: "Effective Care Transition", time: "30 mins", content: "Navigating the shift between home, hospital, and professional care facilities smoothly." },
  { title: "Palliative & End of Life Care", time: "30 mins", content: "Ensuring dignity, comfort, and peace for the person and their family in the final stages." },
  { title: "Ethics & Rights", time: "30 mins", content: "Understanding the rights of the patient and the ethical responsibilities of the caregiver." },
];

// --- Sub-Components ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <div className="flex justify-center mb-2">
        <Sparkles fill={COLORS.accent} color={COLORS.accent} size={28} />
    </div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold mb-3"
      style={{ color: COLORS.primary }}
    >
      {title}
    </motion.h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">{subtitle}</p>
    <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: COLORS.accent }}></div>
  </div>
);

const AccordionItem = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-100 bg-white mb-2 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
         
          <div className="flex items-center justify-center w-8 h-8 rounded-full text-base font-bold shadow-sm text-gray-800" style={{ backgroundColor: COLORS.accent }}>
            {index + 1}
          </div>
          <div>
            <h3 className="font-semibold text-base text-gray-800">{module.title}</h3>
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{module.time}</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="text-gray-400" size={18} /> : <ChevronDown className="text-gray-400" size={18} />}
      </button>
      
      {isOpen && (
        <div className="p-4 pl-14 bg-[#FAFAFA] text-gray-600 text-sm border-t border-gray-100 leading-relaxed">
          <p>{module.content}</p>
        </div>
      )}
    </motion.div>
  );
};

export default function TrainingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const handleJoinClick = () => {
    window.open(GOOGLE_FORM_LINK, '_blank');
  };

  const handleBrochureClick = () => {
    window.open(BROCHURE_DRIVE_LINK, '_blank');
  };

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg }}>
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* Image Slideshow Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}    
              transition={{ duration: 1.5, ease: "easeInOut" }} 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Dementia Training Moments"
            />
          </AnimatePresence>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a2e1a]/90 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-white pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-gray-900 shadow-[0_0_15px_rgba(236,199,80,0.5)]" style={{ backgroundColor: COLORS.accent }}>
                Certification Program
              </span>
            </div>
            
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2 leading-tight tracking-tight">
              Dem<span style={{ color: COLORS.accent }}>Bridge</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 tracking-wide opacity-90">
              Dementia Training Program
            </h2>

            <p className="text-xl md:text-2xl font-semibold mb-8 text-[#A3B986] italic">
              "Bridging the gap between Care and Cure"
            </p>
            
            
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleJoinClick}
                className="bg-[#ecc750] text-black hover:bg-[#eab308] px-6 py-5 rounded-full font-bold text-base flex items-center gap-2"
              >
                Register for Course <ArrowRight size={18} />
              </Button>
              
              <Button 
                onClick={handleBrochureClick}
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black px-6 py-5 rounded-full font-semibold"
              >
                View Brochure
              </Button>
            </div>

            <div className="flex gap-2 mt-8">
              {HERO_IMAGES.map((_, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImageIndex ? 'w-8' : 'w-2 bg-white/50'}`}
                  style={{ backgroundColor: idx === currentImageIndex ? COLORS.accent : '' }}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- IMPACT STATS --- */}
      <section className="py-8 bg-white relative z-20 mx-4 md:mx-10 lg:mx-20 -mt-12 rounded-2xl shadow-xl border-t-4" style={{ borderColor: COLORS.accent }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center p-2"
              >
                <div className="p-2 rounded-full mb-2 bg-[#FFFBEB]">
                    <stat.icon size={28} color={COLORS.primary}/>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-500 font-medium text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO IS THIS FOR? --- */}
      <section className="py-16 container mx-auto px-6">
        <SectionHeader 
          title="Who Can Become a Trainer?" 
          subtitle="Whether you are a student, a healthcare professional, or a family member, your understanding can change a life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TARGET_AUDIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 bg-[#5e6f47] hover:bg-[#ecc750] hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:opacity-0 transform group-hover:scale-95">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm border border-white/10">
                  <item.icon size={32} color={COLORS.accent} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-100 text-center text-sm font-medium leading-relaxed opacity-90 line-clamp-3">
                  {item.desc}
                </p>
                <div className="w-10 h-1 bg-[#ecc750] mt-4 rounded-full"></div>
              </div>

              
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-full">
                     <item.icon size={20} className="text-[#1F2937]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937]">{item.title}</h3>
                </div>
                <p className="text-center text-[#1F2937] text-sm leading-relaxed mb-6 font-medium line-clamp-4">
                  {item.hoverText}
                </p>
                <Button 
                  onClick={handleJoinClick}
                  className="bg-[#5e6f47] text-white hover:bg-black hover:text-white font-bold rounded-full px-6 py-2 shadow-lg text-sm"
                >
                  Apply Now
                </Button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CURRICULUM & BENEFITS --- */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Join DemBridge?</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                DemBridge isn't just a course; it's a movement to create a Dementia-Friendly India. 
                Our curriculum is designed to be simple and accessible for everyone.
              </p>
              
              <div className="bg-[#f3f6f0] p-6 rounded-xl border border-[#e0e6da]">
                <h4 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                  <Building2 size={20} /> Program Highlights
                </h4>
                <ul className="space-y-3">
                  {[
                    "Accredited Level Certification",
                    "Access to Expert Network",
                    "Evidence-based Care Strategies",
                    "Digital Resource Library",
                    "Hands-on Learning"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={16} color={COLORS.primary} />
                      <span className="text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wider">Supported by</p>
                  <a
                    href="https://dementia-india.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group bg-white p-2 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <img 
                      src="/partners/DIA_icon.png" 
                      alt="Dementia India Alliance Logo" 
                      className="h-10 w-auto object-contain"
                    />
                    
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3">
               <h3 className="text-lg font-bold mb-4 text-gray-700 flex items-center gap-2">
                 <Brain size={20} color={COLORS.primary}/> Course Modules
               </h3>
              {CURRICULUM.map((module, idx) => (
                <AccordionItem key={idx} module={module} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ENDORSEMENT BANNER --- */}
      <section className="py-8 bg-[#f3f6f0] border-y border-[#e0e6da] my-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-700"
          >
             <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100">
               <Award size={28} color={COLORS.primary} />
             </div>
             <p className="text-lg md:text-xl font-medium leading-relaxed">
                The curriculum and syllabus is validated and endorsed by <br className="hidden md:block"/>
                <a
                  href="https://www.nimhans.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#5e6f47] hover:underline"
                >
                  NIMHANS 
                </a>{" "}
                and{" "}
                <a
                  href="https://dementia-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#5e6f47] hover:underline"
                >
                  Dementia India Alliance
                </a>.
             </p>
          </motion.div>
        </div>
      </section>

      {/* --- CTA CARD --- */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] relative overflow-hidden text-center py-12 px-6 shadow-xl"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <Globe size={40} className="mx-auto mb-4 opacity-90" color={COLORS.accent} />
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Let's Make Our Community Inclusive</h2>
              <p className="text-base md:text-lg mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Public awareness is the key to reducing stigma. By understanding dementia, we replace fear with compassion. 
                Join us in creating an environment where no one feels alone.
              </p>
              
              <Button 
                onClick={handleJoinClick}
                className="group bg-[#ecc750] text-black hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-3 mx-auto transition-all transform hover:scale-105"
              >
                Register for Course 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}