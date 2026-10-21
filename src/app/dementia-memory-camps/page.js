"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Button } from "../components/ui/button";
//lazy load
const Footer = dynamic(() => import("../components/Footer"));

const HERO_BADGES = ["Fee: 100% FREE", "Duration: 6-8 Minutes"];

const STAT_META = [
  {
    key: "camps",
    suffix: "+",
    label: "Camps Conducted",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    key: "peopleScreened",
    suffix: "+",
    label: "People Screened",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    key: "identifiedcases",
    suffix: "+",
    label: "Identified Dementia Cases",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const BENEFITS = [
  {
    title: "Slows Progression",
    desc: "Early intervention slows cognitive decline by years, preserving brain function.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Maintains Independence",
    desc: "Detect mild impairment early to sustain daily living and decision-making ability.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Family Peace of Mind",
    desc: "Clear answers about memory changes: normal aging or needs attention?",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const AUDIENCE = [
  {
    title: "Adults 55+",
    desc: "Any Adult above the age of 55 is eligible.",
    icon: "/partners/icons/brain.png",
  },
  {
    title: "Family Caregivers",
    desc: "Providing proper treatment for your loved ones.",
    icon: "/partners/icons/parents.png",
  },
  {
    title: "Community Leaders",
    desc: "Bringing screening services to neighborhoods.",
    icon: "/memory-camp/icons/team.png",
  },
  {
    title: "Inclusive Participation for Everyone",
    desc: "Regardless of education level or language, anyone can take part easily.",
    icon: "/partners/icons/phone.png",
  },
];

const HOST_STEPS = [
  { step: 1, title: "Contact Us", desc: "Share your details" },
  { step: 2, title: "Schedule with Us", desc: "Pick your date" },
  { step: 3, title: "Host Free Camp", desc: "We handle everything" },
];

const CAROUSEL_IMAGES = [
  { src: "/memory-camp/2.jpg", alt: "Memory Wellness Camp Poster" },
  { src: "/memory-camp/3.jpg", alt: "Screening Process Details" },
  { src: "/memory-camp/8.jpg", alt: "Camp Participants" },
  { src: "/memory-camp/4.jpg", alt: "Memory Camp" },
  { src: "/memory-camp/5.jpg", alt: "Memory Camp" },
  { src: "/memory-camp/6.jpg", alt: "Memory Camp" },
];

// Animated counter hook
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, icon, animate }) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d={icon}
          />
        </svg>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tabular-nums">
        {animate ? count.toLocaleString() : 0}
        {suffix}
      </div>
      <div className="text-[#ecc750] font-semibold text-sm uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function MemoryWellnessPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locality: "",
    city: "",
    pincode: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [metricsData, setMetricsData] = useState({
    camps: 19,
    peopleScreened: 571,
    identifiedcases: 144,
  });

  useEffect(() => {
    fetch("/api/metrics")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) setMetricsData(data);
      })
      .catch(() => {});
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
    );

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone =
        "Phone must be a valid 10-digit Indian number (starts with 6-9)";
    if (!formData.locality.trim())
      newErrors.locality = "Locality/Area is required";
    else if (formData.locality.trim().length < 2)
      newErrors.locality = "Locality must be at least 2 characters";
    if (!formData.city.trim()) newErrors.city = "City/Town is required";
    else if (formData.city.trim().length < 2)
      newErrors.city = "City must be at least 2 characters";
    const pincodeRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!pincodeRegex.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    else if (formData.address.trim().length < 5)
      newErrors.address = "Address must be at least 5 characters";
    if (!formData.message.trim())
      newErrors.message = "Please provide details about your community";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });
    if (!validateForm()) {
      setFormStatus({ type: "error", message: "Please fix all errors below" });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/request-camp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          locality: formData.locality.trim(),
          city: formData.city.trim(),
          pincode: formData.pincode.trim(),
          address: formData.address.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({
          type: "success",
          message:
            "✅ Camp request submitted successfully! Check your email for confirmation.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          locality: "",
          city: "",
          pincode: "",
          address: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => {
          document
            .getElementById("form-status")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Failed to submit request. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        type: "error",
        message:
          "❌ Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#5e6f47] text-white py-15 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5e6f47]/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Memory Wellness Camp
            </h1>
            <div className="h-1 w-full max-w-xs sm:max-w-md md:max-w-lg bg-[#ecc750] mx-auto rounded-full m-8 mb-10" />
          </div>
          <p className="text-xl max-w-3xl mx-auto">
            Free community brain health screening program in partnership with
            Dementia India Alliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center max-w-md mx-auto mt-8">
            {HERO_BADGES.map((badge, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-[#ecc750] backdrop-blur-sm rounded-xl text-md text-[#5e6f47] font-bold"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section ref={statsRef} className="bg-[#4a5938] py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {STAT_META.map((stat, i) => (
              <StatCard
                key={i}
                value={metricsData[stat.key] ?? 0}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                animate={statsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5e6f47] mb-6">
              What is a Memory Wellness Camp?
            </h2>
            <div className="h-1 w-32 bg-[#ecc750] mx-auto rounded-full mb-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl group touch-pan-x">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={
                    CAROUSEL_IMAGES[currentSlide]?.src || CAROUSEL_IMAGES[0].src
                  }
                  alt={
                    CAROUSEL_IMAGES[currentSlide]?.alt || "Memory Wellness Camp"
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={currentSlide === 0}
                />
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 text-[#5e6f47]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 text-[#5e6f47]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 lg:h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-[#ecc750] w-8" : "bg-white/60 w-2.5 lg:w-2 hover:bg-white/90"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold z-10">
                {currentSlide + 1} / {CAROUSEL_IMAGES.length}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                A memory wellness camp is a community event conducted by the
                Satoru Foundation to assess cognitive health, raise awareness
                about dementia and other cognitive decline issues, and enable
                early interventions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In these camps, we provide free screenings to identify early
                memory loss beyond normal aging, identify people at risk, and
                raise awareness of risk factors, brain-healthy habits, and care
                referrals.
              </p>
              <p className="text-base text-gray-500 italic font-medium">
                Early detection helps prevent cognitive decline and maintain
                independence
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#ecc750] p-6 rounded-2xl text-center border border-gray-300 drop-shadow-md">
                  <div className="text-3xl font-bold text-[#5e6f47] mb-2">
                    6-8
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Minutes
                  </div>
                </div>
                <div className="bg-[#ecc750] p-6 rounded-2xl border border-gray-300 drop-shadow-md flex justify-center">
                  <ul className="space-y-2 text-sm text-[#5e6f47] font-medium text-left max-w-xs">
                    <li>✓ Memory checks</li>
                    <li>✓ Attention screening</li>
                    <li>✓ Basic cognitive tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Screening Matters */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e6f47] mb-4">
              Why Memory Screening Matters
            </h2>
            <p className="text-gray-600">
              Early detection preserves independence and quality of life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-[#ecc750] rounded-2xl hover:shadow-2xl transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#f3f4f6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5e6f47] transition">
                  <svg
                    className="w-7 h-7 text-[#5e6f47] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#5e6f47] mb-4">
                  {benefit.title}
                </h4>
                <div className="h-[2px] w-8 bg-[#5e6f47] mb-4 mx-auto group-hover:w-full transition-all" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e6f47] mb-4">
              Who Should Attend
            </h2>
            <p className="text-gray-600">
              Perfect for proactive brain health monitoring.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {AUDIENCE.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-[#ecc750] text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-[#f3f4f6] rounded-2xl flex items-center justify-center group-hover:bg-[#5e6f47] transition-all duration-300 overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain group-hover:invert"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#5e6f47] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA + FORM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#f8f9fa] rounded-3xl p-12 md:p-16 border border-gray-100 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#ecc750] rounded-b-full"></div>
            <div className="hidden md:block absolute -bottom-12 -right-12 w-48 h-48 bg-[#ecc750]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5e6f47] mb-6 tracking-tight">
                Book a Free Memory Wellness Camp
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Bring the memory health screening to your apartment complex,
                community center, or your organization. Simple 3-step process.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                {HOST_STEPS.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-[#ecc750] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#5e6f47] font-bold text-xl shadow-md hover:scale-105 transition-transform">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-[#5e6f47] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>

              {formStatus.message && (
                <div
                  id="form-status"
                  className={`mb-6 p-4 rounded-xl text-sm font-medium ${formStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                  role="alert"
                >
                  {formStatus.message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.name ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 text-left">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      maxLength="10"
                      className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.phone ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 text-left">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.email ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 text-left">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <input
                      type="text"
                      name="locality"
                      placeholder="Locality/Area *"
                      value={formData.locality}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.locality ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                    />
                    {errors.locality && (
                      <p className="mt-1 text-xs text-red-600 text-left">
                        {errors.locality}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City/Town *"
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.city ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-600 text-left">
                        {errors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode *"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      maxLength="6"
                      className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.pincode ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-xs text-red-600 text-left">
                        {errors.pincode}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Full Address (Street, Building, etc.) *"
                    value={formData.address}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm ${errors.address ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-600 text-left">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your community (size, location, preferred dates...)*"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className={`w-full px-6 py-4 text-black border rounded-xl focus:ring-2 focus:ring-[#ecc750] focus:border-transparent outline-none transition shadow-sm resize-vertical ${errors.message ? "border-red-400 ring-red-200" : "border-gray-200"}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 text-left">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-fit px-12 py-4 bg-[#ecc750] text-[#5e6f47] font-bold rounded-xl border-2 border-[#ecc750] hover:bg-[#5e6f47] hover:text-[#ecc750] hover:shadow-lg transition-all duration-300 shadow-sm text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Request Camp in My Area"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
