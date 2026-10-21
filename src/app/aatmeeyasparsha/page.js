'use client';

import Image from "next/image"
import { TrendingUp, Leaf, Heart, FlaskRoundIcon as Flask, Users, X } from "lucide-react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function MeeNesthamContent() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    parentName: '',
    parentAge: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/meenestham/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        parentName: '',
        parentAge: '',
        message: '',
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="bg-white">
      <Navbar />
      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aatmeeya Sparsha</h1>
          <p className="text-xl max-w-3xl mx-auto">
          An initiative by Satoru Foundation, Aatmeeya Sparsha brings young hearts to elderly homes, creating meaningful connections 
          </p>
        </div>
      </section>

      <div className="font-sans text-gray-800">
      {/* Did You Know Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-sm text-center">
          {/* <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-4">
            <TrendingUp className="mr-2 h-5 w-5" /> Did You Know?
          </h2> */}
          <p className="mb-4 leading-relaxed">
            Over 40% of elderly individuals in India experience some form of social isolation. Aatmeeya Sparsha bridges this
            gap through meaningful connections.
          </p>
          <p className="text-lg">
            Increase in emotional well-being and improvement in mobility seen after Aatmeeya Sparsha
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Leaf className="mr-2 h-5 w-5" /> Our Core Services
        </h2>

        <ul className="list-disc pl-6 mb-8">
          <li className="mb-3 leading-relaxed">
            <strong>Physical Wellness:</strong> Breathing and mobility exercises
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Cognitive Engagement:</strong> Memory games, puzzles, and cultural storytelling
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Assistance:</strong> Grocery runs, bank visits, hospital coordination
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Companionship:</strong> Regular warm, respectful interaction 2-3 times a week
          </li>
        </ul>

        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/elderly woman.jpg?height=200&width=200"
              alt="Elderly woman doing light yoga"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/chess.jpg?height=200&width=200"
              alt="Playing memory games with Aatmeeyulu"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover mt-4 mb-5"
            />
            <Image
              src="/meenestham/chess2.jpg?height=200&width=200"
              alt="Playing memory games with Aatmeeyulu"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/help.png?height=200&width=200"
              alt="Aatmeeyulu helping with errands"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Heart className="mr-2 h-5 w-5" /> Why Choose Aatmeeya Sparsha?
        </h2>

        <ul className="list-disc pl-6">
          <li className="mb-3 leading-relaxed">Scientifically structured protocol with measurable outcomes</li>
          <li className="mb-3 leading-relaxed">
            Staff(Aatmeeyulu) trained in elder psychology, mobility support, and empathy
          </li>
          <li className="mb-3 leading-relaxed">Tailored visits for each senior—because no two parents are the same</li>
          <li className="mb-3 leading-relaxed">
            Developed by the Satoru Foundation and based on WHO and Indian best practices
          </li>
        </ul>
      </section>

      {/* Evidence Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Flask className="mr-2 h-5 w-5" /> Backed by Evidence
        </h2>

        <ul className="list-disc pl-6">
          <li className="mb-3 leading-relaxed">
            <strong>Fall reduction by 23%</strong> with light exercise and home mobility support (WHO, 2022)
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Memory improvement</strong> with cultural games and storytelling (Lancet, 2020)
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Emotional uplift</strong> with weekly companionship (Agewell India, 2021)
          </li>
        </ul>
      </section>

            {/* Call To Action Section */}
            <section className="py-12 px-4 bg-[#5e6f47] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bring Aatmeeya Sparsha to Your Parents' Doorstep</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let your loved ones age alone. Let them thrive with purpose and joy.
          </p>

          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#ecc750] hover:bg-[#e6b836] text-gray-800 font-semibold py-3 px-6 rounded transition-colors"
          >
            Sign Up for a Free Introductory Visit
          </button>

          <p className="text-lg mt-3 max-w-2xl mx-auto">
            <strong>*Aatmeeya Sparsha is presently only available in Hyderabad, Telangana.*</strong> 
          </p>

        </div>
      </section>


      {/* About Foundation Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Users className="mr-2 h-5 w-5" /> About the Satoru Foundation
        </h2>

        <div>
          <p className="mb-4 leading-relaxed">
            The Satoru Foundation is a research-driven NGO committed to advancing health, dignity, and connection for
            India's elderly. Our foundation integrates scientific methods with
            human-centered approaches. Our leadership includes trained gerontologists, public health researchers, and
            staff(aatmeeyulu) experienced in the psychology of aging.
          </p>

          <p className="mb-4 leading-relaxed">
            Satoru has conducted multiple research initiatives on cognitive health, digital inclusion, and
            community-based elder care. Our programs are built on insights from WHO, Indian Council of Medical Research,
            and global academic literature—ensuring that your loved ones receive care that is both heartfelt and
            evidence-informed.
          </p>
        </div>
      </section>

    </div>
    <Footer />

    {/* Modal Form */}
    {showModal && (
      <div 
        className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowModal(false);
          }
        }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-white/20 text-black">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#5e6f47]">Request a Free Visit</h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-xl mb-4">Thank you for your submission!</div>
              <p className="text-gray-600">We'll contact you shortly to schedule the visit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Parent's Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Parent's Age *</label>
                <input
                  type="number"
                  name="parentAge"
                  value={formData.parentAge}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  min="1"
                  max="120"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="text-red-600">
                  Failed to submit form. Please try again.
                </div>
              )}

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-[#5e6f47] text-white rounded hover:bg-[#5e6f47]/90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )}
    </main>
  )
}
