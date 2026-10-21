"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const SUBJECT_OPTIONS = [
  { label: "Reason for contacting us", value: "" },
  { label: "General enquiry", value: "General enquiry" },
  {
    label: "Program / Services information",
    value: "Program / Services information",
  },
  { label: "Careers / Internships", value: "Careers / Internships" },
  { label: "Volunteer with us", value: "Volunteer with us" },
  { label: "Donation support", value: "Donation support" },
  {
    label: "Partnership collaboration / CSR",
    value: "Partnership collaboration / CSR",
  },
  { label: "Event enquiry", value: "Event enquiry" },
  {
    label: "Training / Workshop request",
    value: "Training / Workshop request",
  },
  { label: "Media / Press enquiry", value: "Media / Press enquiry" },
  { label: "Feedback / Complaint", value: "Feedback / Complaint" },
  { label: "Website / Technical issue", value: "Website / Technical issue" },
  {
    label: "Beneficiary support / Help needed",
    value: "Beneficiary support / Help needed",
  },
  { label: "Other", value: "Other" },
];

const COUNTRY_CODES = [
  { code: "+91", country: "IN", name: "India" },
  { code: "+1", country: "US", name: "United States" },
  { code: "+44", country: "GB", name: "United Kingdom" },
  { code: "+61", country: "AU", name: "Australia" },
  { code: "+971", country: "AE", name: "UAE" },
  { code: "+974", country: "QA", name: "Qatar" },
  { code: "+966", country: "SA", name: "Saudi Arabia" },
  { code: "+65", country: "SG", name: "Singapore" },
  { code: "+60", country: "MY", name: "Malaysia" },
  { code: "+49", country: "DE", name: "Germany" },
  { code: "+33", country: "FR", name: "France" },
  { code: "+81", country: "JP", name: "Japan" },
  { code: "+86", country: "CN", name: "China" },
  { code: "+7", country: "RU", name: "Russia" },
  { code: "+55", country: "BR", name: "Brazil" },
  { code: "+27", country: "ZA", name: "South Africa" },
  { code: "+234", country: "NG", name: "Nigeria" },
  { code: "+254", country: "KE", name: "Kenya" },
];

// Shared focus style — light green ring matching brand, NOT dark
const focusClass =
  "focus:outline-none focus:ring-2 focus:ring-[#8faa6e] focus:border-[#8faa6e]";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [subjectError, setSubjectError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "subject") setSubjectError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.subject) {
      setSubjectError(true);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const fullPhone = `${formData.countryCode} ${formData.phone}`;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: fullPhone,
          subject: formData.subject,
          message: formData.message,
          to: "info@satorufoundation.org",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          countryCode: "+91",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError(
          result.error || "Failed to send message. Please try again later.",
        );
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 animate-fade-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#5e6f47]">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-[#ecc750] mx-auto rounded-full mb-6 mt-1"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our projects or want to get involved? Reach out
            to us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ── Contact Info ── */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f47]">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ecc750] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Address</h4>
                  <p className="text-gray-600">
                    Model House building, Saibaba Temple Rd, Dwarakapuri,
                    Punjagutta, Hyderabad, Telangana. 500082
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ecc750] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Phone</h4>
                  <p className="text-gray-600">+91 9959485500</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ecc750] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Email</h4>
                  <p className="text-gray-600">info@satorufoundation.org</p>
                  <p className="text-gray-600">satorufoundation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="animate-fade-in delay-400">
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f47]">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition ${focusClass}`}
                />
              </div>

              {/* Contact Number with Country Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {/* Country code selector */}
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className={`rounded-md border border-gray-300 bg-white px-2 py-2 text-sm text-gray-800 transition ${focusClass} w-28 shrink-0`}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, country, name }) => (
                      <option key={`${country}-${code}`} value={code}>
                        {country} {code}
                      </option>
                    ))}
                  </select>

                  {/* Phone number input */}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    required
                    className={`flex-1 min-w-0 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition ${focusClass}`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Select your country code, then enter your number
                </p>
              </div>

              {/* Subject Dropdown */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Reason for Contacting <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-800 transition ${focusClass} ${
                    subjectError ? "border-red-400" : "border-gray-300"
                  } ${!formData.subject ? "text-gray-400" : "text-gray-800"}`}
                >
                  {SUBJECT_OPTIONS.map(({ label, value }) => (
                    <option
                      key={label}
                      value={value}
                      disabled={value === ""}
                      className="text-gray-800"
                    >
                      {label}
                    </option>
                  ))}
                </select>
                {subjectError && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a reason for contacting us.
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 resize-none transition ${focusClass}`}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-[#5e6f47] hover:bg-[#4a5838] text-white transition-all duration-300 hover:scale-[1.02] active:scale-100"
                disabled={loading}
              >
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </form>

            {success && (
              <p className="mt-4 text-green-600 font-medium text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fade-slide-up {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
