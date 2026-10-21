// app/mediacentre/page.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "/mediacentre/1.png",
  "/mediacentre/2.png",
  "/mediacentre/3.png",
  "/mediacentre/4.png",
  "/mediacentre/6.png",
  "/mediacentre/7.png",
  "/mediacentre/8.png",
  "/mediacentre/9.png",
  "/mediacentre/11.png",
  "/mediacentre/12.png",
  "/mediacentre/13.png",
  "/mediacentre/14.png",
  "/mediacentre/15.png",
  "/mediacentre/16.png",
  "/mediacentre/17.png",
  "/mediacentre/18.png",
  "/mediacentre/19.png",
  "/mediacentre/20.png",
  "/mediacentre/21.png",
  "/mediacentre/22.png",
  "/mediacentre/23.png",
  "/mediacentre/24.png",
  "/mediacentre/25.png",
];

export default function MediaCentrePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const slideshowInterval = useRef(null);

  useEffect(() => {
    startSlideshow();
    return () => clearInterval(slideshowInterval.current);
  }, []);

  const startSlideshow = () => {
    clearInterval(slideshowInterval.current);
    slideshowInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // 7 seconds
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    startSlideshow();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    link.download = images[currentIndex].split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this image",
          url: images[currentIndex],
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  // Navigation handlers
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    startSlideshow();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    startSlideshow();
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isLightboxOpen) return;

      if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrev();
      } else if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen animate-fadeIn">
        {/* Hero Section */}
        <section className="bg-[#6B7A4D] py-16 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-4">Media Centre</h1>
          <p className="text-lg text-white max-w-2xl text-center">
            Explore memorable moments, initiatives, and projects of the Satoru Foundation.
          </p>
        </section>

        {/* Main Content */}
        <main className="flex flex-col items-center bg-white flex-grow py-12 px-6">
          {/* Slideshow */}
          <div className="relative w-full max-w-6xl h-[500px] rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-1000 ease-in-out"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Navigation buttons */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md text-black"
            >
              ◀
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md text-black"
            >
              ▶
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`relative w-24 h-16 rounded-md overflow-hidden border-2 ${
                  currentIndex === idx ? "border-[#6B7A4D]" : "border-gray-300"
                } cursor-pointer hover:scale-105 transition-transform`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </main>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative w-11/12 h-[80vh]">
              <Image
                src={images[currentIndex]}
                alt="Zoomed Image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
