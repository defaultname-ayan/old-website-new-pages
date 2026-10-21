"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const backgroundImages = [
  "/hero/hero-slide-1.jpg",
  "/hero/hero-slide-2.jpg",
  "/hero/hero-slide-3.jpg",
  "/hero/hero-slide-4.jpg",
  "/hero/hero-slide-5.jpg",
  "/hero/hero-slide-6.jpg",
];

export default function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // Trigger re-render after refs are attached
  }, []);

  return (
    <section className="relative overflow-hidden h-[90vh] min-h-[500px] max-h-[1000px]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {swiperReady && (
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            speed={2000}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full h-full"
          >
            {backgroundImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="absolute inset-0">
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={index === 0}
                    quality={90}
                    className="object-cover brightness-50"
                    sizes="100vw"
                    style={{ objectPosition: "center center" }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="z-20 absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>
      <button
        ref={nextRef}
        className="z-20 absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Text Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center relative z-10">
        <div className="max-w-4xl text-center text-white p-4 sm:p-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight text-[#f5f5f5] drop-shadow-lg">
            We don't just add years to life, we add life to years.
          </h1>

          {/* Gradient Underline */}
          <div className="mx-auto mb-6 h-1.5 w-32 sm:w-40 md:w-52 rounded-full bg-gradient-to-r from-[#ecc750] via-[#5e6f47] to-[#ecc750]" />

          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white drop-shadow-md pt-10">
            In India, 10 crore seniors live without adequate care, We are
            changing that <br /> One community, one family, one life at a time
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}
