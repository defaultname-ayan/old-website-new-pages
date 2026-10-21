'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useRouter } from 'next/navigation';

export default function FieldVisitPage() {
  const [configs, setConfigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    try {
      const response = await fetch('/api/meenestham/fieldvisit');
      if (!response.ok) throw new Error('Failed to fetch configurations');
      const data = await response.json();
      setConfigs(data);
    } catch (error) {
      console.error('Error fetching configurations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {configs.map((config) => (
            <div key={config.id} className="text-center">
              <h2 className="text-2xl font-bold text-[#5e6f47] mb-4">{config.heading}</h2>
              <a
                href={config.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ecc750] hover:bg-[#e6b836] text-gray-800 font-semibold py-3 px-6 rounded transition-colors"
              >
                {config.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
} 