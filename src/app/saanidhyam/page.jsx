'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  MapPin, CheckCircle, Search, Home, Users, Sun, 
  Heart, Activity, Coffee, Star, Shield, Phone, 
  Database, Lock, ChevronLeft, ChevronRight, Download
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceRequestModal from '../components/ServiceRequestModal'; 

// --- Helper Components ---

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const endNum = parseInt(end.toString().replace(/,/g, ''), 10); 
    const increment = endNum / (duration / 16); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function SaanidhyamPage() {
  const problemsRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const scrollLeft = featuresRef.current.scrollLeft;
        const scrollWidth = featuresRef.current.scrollWidth;
        const cardWidth = scrollWidth / 4; 
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveFeatureIndex(newIndex);
      }
    };

    const ref = featuresRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToFeature = (index) => {
    if (featuresRef.current) {
        const scrollWidth = featuresRef.current.scrollWidth;
        const cardWidth = scrollWidth / 4;
        featuresRef.current.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    }
  };


  const problems = [
    {
      title: "Information Fragmentation",
      text: "Families struggle to find trusted and verified details on elder services."
    },
    {
      title: "Geographic Disparity", 
      text: "73% of facilities concentrated in major cities; rural areas severely underserved."
    },
    {
      title: "Service Gaps",
      text: "70% of facilities provide basic shelter only; only 8% offer integrated nursing care."
    },
    {
      title: "Workforce Crisis",
      text: "Only 6% of healthcare providers have formal geriatric training."
    }
  ];

  const serviceCategories = [
    { icon: Home, label: "Old Age Homes", desc: "Residential care" },
    { icon: Users, label: "Senior Living", desc: "Assisted options" },
    { icon: Sun, label: "Day Care", desc: "Daytime services" },
    { icon: Activity, label: "Home Care", desc: "In-home nursing" },
    { icon: CheckCircle, label: "Dementia Care", desc: "Specialized living" },
    { icon: Heart, label: "Palliative Care", desc: "Comfort care" },
    { icon: Coffee, label: "Hospice", desc: "End-of-life care" },
    { icon: Star, label: "Hospitals", desc: "Geriatric wards" },
  ];

  const features = [
    { 
        icon: Search, 
        title: "Advanced Search", 
        text: " We Search for elder care service providers by location and specific medical needs." 
    },
    { 
        icon: Download, 
        title: "PDF Reports", 
        text: "We provide curated lists of verified elder care services delivered in easy-to-share PDF format." 
    },
    { 
        icon: Phone, 
        title: "Direct Contact", 
        text: "Directly connect with elder care service providers without intermediaries." 
    },
    { 
        icon: Lock, 
        title: "Data Privacy", 
        text: "We ensure that all the data that we have collected will be confidential" 
    }
  ];

  const pillars = [
    { icon: MapPin, title: "Systematic Mapping", text: "Comprehensive identification of all providers to help you search for the elder care services easily." },
    { icon: Shield, title: "Verified Database", text: "Structured verification protocols ensuring reliable info on elder care services" },
    { icon: Search, title: "Service Navigation", text: "Platforms enabling families to connect with elder care service providers" }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. MISSION FRAME */}
      <section className="relative min-h-[85vh] flex bg-[#5E6F47] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg">
          <div className="absolute inset-0 bg-[url('/hero/hero-slide-4.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="w-full flex flex-col justify-center items-center px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif bg-gradient-to-r from-[#ECC750] via-white to-[#5E6F47] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-xy drop-shadow-2xl font-black tracking-tight leading-tight mb-10 lg:mb-24 px-2">
              Saanidhyam
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="text-white/95 max-w-3xl mx-auto mb-12 lg:mb-20 leading-relaxed text-lg md:text-2xl px-4">
              Our goal is to help you find dignified, trusted eldercare services tailored to your needs, right in your neighbourhood.
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full max-w-lg mx-auto px-4">
              <button
                onClick={() => setModalOpen(true)}
                className="group relative flex-1 px-4 py-3 md:px-6 md:py-4 h-auto md:h-20 min-h-[50px] bg-gradient-to-r from-[#ECC750] to-[#D4B44A] text-[#495637] font-bold text-sm md:text-lg rounded-2xl hover:from-[#5E6F47] hover:to-[#4A5A38] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 active:translate-y-0 border border-[#ECC750]/30 overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10">Search elder care service providers</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
                              
                <a
                  href="https://forms.gle/EkJCKhqNCzJqphXMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 px-4 py-3 md:px-6 md:py-4 h-auto md:h-20 min-h-[50px] bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-sm md:text-lg rounded-2xl hover:bg-white/20 hover:border-[#ECC750] hover:shadow-2xl hover:-translate-y-2 active:translate-y-0 transition-all duration-500 overflow-hidden flex items-center justify-center"
                >
                  <span className="relative z-10">Register your organization</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECC750]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. PROBLEM PRESSURE FRAME */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-[#f4f6f0]/50 to-white w-full">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-20 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#5E6F47] mb-4">Why the elder care system&nbsp;fails</h2>
          </div>
        </FadeIn>

        <div className="relative w-full px-4 lg:px-12">
          
          <div 
            ref={problemsRef}
            className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {problems.map((problem, idx) => (
              <div key={idx} className="flex-none w-[85vw] md:w-[45%] lg:w-auto bg-[#f4f6f0] p-6 lg:p-10 rounded-2xl border-2 border-[#5E6F47] hover:border-[#ECC750] shadow-xl flex flex-col justify-center items-center text-center snap-center h-64 lg:h-72 group transition-transform duration-300">
                <h3 className="text-xl font-bold text-[#5E6F47] mb-6">
                  <span className="border-b-4 border-[#ECC750] pb-4 inline-block">
                    {problem.title}
                  </span>
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. SYSTEM RESPONSE FRAME */}
      <section id="system-response" className="pb-12 lg:pb-20 pt-4 bg-[#f4f6f0]">
        
        {/* Intro Box */}
        <FadeIn>
          <div className="w-full px-4 lg:px-12 mb-12 lg:mb-20">
            <div className="bg-gradient-to-r from-[#5E6F47] via-[#6A7D5A] to-[#495637] text-white p-6 lg:p-12 rounded-3xl shadow-2xl border-4 border-[#ECC750]/30 backdrop-blur-sm w-full">
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">How our search engine&nbsp;works</h2>
                
                <div className="text-base lg:text-xl leading-relaxed max-w-6xl mx-auto flex flex-col gap-4">
                    <p>
                        We built a comprehensive database to help families and their loved ones search for elder care services.
                    </p>
                    <p>
                        Our database includes <strong className="text-[#ECC750] text-xl lg:text-2xl">1200+</strong> verified service providers in <strong className="text-[#ECC750] text-xl lg:text-2xl">Telangana and Andhra&nbsp;Pradesh</strong>.
                    </p>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>

        {/* ROW 1: Service Categories */}
        <FadeIn>
          <div className="w-full px-4 lg:px-12 mb-12 lg:mb-20">
            <div className="bg-white rounded-3xl border-4 border-[#5E6F47]/20 shadow-2xl p-6 lg:p-12 flex flex-col hover:shadow-3xl transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 flex-shrink-0">
                <div className="w-12 h-12 bg-[#ECC750] rounded-xl flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg">1</div>
                <div>
                  <h3 className="text-xl lg:text-3xl font-bold text-[#5E6F47] mb-1">Types of service providers</h3>
                  
                </div>
              </div>
              
              <div className="relative group">
                  <div 
                    ref={servicesRef}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
                  >
                    {serviceCategories.map((item, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setModalOpen(true)} 
                        className="p-2 lg:p-4 rounded-xl lg:rounded-2xl border-2 border-[#5E6F47] hover:border-[#ECC750] hover:shadow-xl hover:bg-[#5E6F47]/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-32 lg:h-40"
                      >
                        <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-lg lg:rounded-xl border-2 border-[#5E6F47]/50 flex items-center justify-center mb-2 lg:mb-3 mx-auto">
                          <item.icon className="w-4 h-4 lg:w-6 lg:h-6 text-[#5E6F47]" />
                        </div>
                        <div className="text-center w-full">
                          
                          <div className="text-[13px] md:text-sm lg:text-lg font-extrabold text-[#5E6F47] leading-tight break-words">{item.label}</div>
                          <div className="hidden lg:block text-[px] text-gray-600 font-medium mt-1">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ROW 2: Processing (Verification) */}
        <FadeIn delay={200}>
          <div className="w-full px-4 lg:px-12 mb-12 lg:mb-20">
            <div className="bg-white rounded-3xl border-4 border-[#5E6F47]/20 shadow-2xl p-6 lg:p-12 flex flex-col hover:shadow-3xl transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 flex-shrink-0">
                <div className="w-12 h-12 bg-[#ECC750] rounded-xl flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg">2</div>
                <div>
                  <h3 className="text-xl lg:text-3xl font-bold text-[#5E6F47] mb-1">Processing</h3>
                  
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#5E6F47]/5 to-[#ECC750]/10 p-4 lg:p-8 rounded-xl border-l-4 border-[#5E6F47]/50">
                  <h4 className="text-lg lg:text-2xl font-bold text-[#5E6F47] mb-4 flex items-center gap-2">
                    <Shield className="w-8 h-8" />
                    Personalized Approach
                  </h4>
                  <p className="text-base md:text-xl text-gray-800 leading-relaxed font-medium">
                    We tailor results to your specific needs including preferred location, budget constraints, and medical conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ROW 3: Features */}
        <FadeIn delay={400}>
          <div className="w-full px-4 lg:px-12">
            <div className="bg-white rounded-3xl border-4 border-[#5E6F47]/20 shadow-2xl p-6 lg:p-12 flex flex-col hover:shadow-3xl transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 flex-shrink-0">
                <div className="w-12 h-12 bg-[#ECC750] rounded-xl flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg">3</div>
                <div>
                  <h3 className="text-xl lg:text-3xl font-bold text-[#5E6F47] mb-1">What we provide</h3>
                  
                </div>
              </div>
              
              <div className="relative group">
                <div 
                  ref={featuresRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {features.map((feature, idx) => (
                    
                    <div key={idx} className="w-full p-6 rounded-2xl border-2 border-[#5E6F47] hover:border-[#ECC750] hover:shadow-xl hover:bg-[#5E6F47]/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-auto">
                      <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-[#5E6F47]/50 mx-auto mb-4 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-[#5E6F47]" />
                      </div>
                      <h4 className="font-bold text-lg lg:text-xl text-[#5E6F47] text-center mb-2 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-700 text-center leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. PROOF & SCALE FRAME */}
      <section className="py-12 lg:py-20 bg-[#5E6F47] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Where we stand today</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Operational maturity and growth roadmap
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="mb-6 md:mb-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ECC750] mb-2">
                <CountUp end="1200" />
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Providers mapped</div>
            </div>
            <div className="mb-6 md:mb-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ECC750] mb-2">
                2
              </div>

              <div className="text-white/80 text-sm uppercase tracking-wider">States covered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ECC750] mb-2">
              3
              </div>

              <div className="text-white/80 text-sm uppercase tracking-wider">Verify levels</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} delay={i * 200}>
                <div className="bg-white/20 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/30 hover:bg-white/30 transition-all group">
                  <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-7 h-7 text-[#5E6F47]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-center">{pillar.title}</h3>
                  <p className="text-white/90 text-sm text-center leading-relaxed">{pillar.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARTICIPATION FRAME */}
      <section id="participation" className="py-12 lg:py-20 container mx-auto px-4 bg-white border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Box 1 */}
          <div className="bg-gradient-to-br from-[#ECC750]/10 to-[#f4f6f0] p-6 lg:p-10 rounded-2xl border-2 border-[#ECC750]/50 shadow-xl text-center group hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#ECC750] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-8 h-8 text-[#495637]" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-[#5E6F47] mb-4">Service Providers</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
              Get curated directories of verified service providers based on your requirements in Telangana and Andhra Pradesh.
            </p>
            <button 
              onClick={() => setModalOpen(true)}
              className="block w-full px-6 py-3 bg-[#ECC750] text-[#495637] font-bold rounded-lg hover:bg-[#5E6F47] hover:text-white transition-all shadow-xl hover:shadow-2xl"
            >
              Search
            </button>
          </div>

          {/* Box 2 */}
          <div className="bg-gradient-to-br from-[#f4f6f0] to-white p-6 lg:p-10 rounded-2xl border-2 border-[#5E6F47]/30 shadow-xl text-center group hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#5E6F47] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-[#5E6F47] mb-4">Register Your Organisation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                Be counted in our verified providers database and connect with families.
            </p>
            <a
              href="https://forms.gle/EkJCKhqNCzJqphXMA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-transparent border-2 border-[#5E6F47] text-[#5E6F47] font-bold rounded-lg hover:bg-[#5E6F47] hover:text-white transition-all shadow-lg"
            >
              Contact us
            </a>

          </div>
        </div>
      </section>

      <Footer />
      <ServiceRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}