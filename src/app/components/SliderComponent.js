'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SliderComponent = ({ testimonials }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const sliderSettings = {
    dots: true,
    infinite: testimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 5000,
  };

  // Remove duplicate testimonials by id
  const uniqueTestimonials = testimonials.filter((t, idx, arr) =>
    arr.findIndex(tt => tt.id === t.id) === idx
  );

  console.log('Testimonials:', testimonials);

  return (
    <Slider {...sliderSettings}>
      {uniqueTestimonials.map((t, idx) => (
        <div key={t.id || idx} className="bg-[#f7f7f7] p-8 rounded-lg shadow-md">
          {/* Top: Photo + Info row */}
          <div className="flex items-center gap-4 mb-4">
            {t.image && (
              t.image.startsWith('data:') ? (
                <img
                  src={t.image}
                  alt={t.name || 'Testimonial'}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#5e6f47]"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              ) : (
                <Image
                  src={t.image}
                  alt={t.name || 'Testimonial'}
                  layout="fill"
                  objectFit="cover"
                  unoptimized={true}
                />
              )
            )}
            <div>
              <h4 className="font-bold text-[#5e6f47]">{t.name}</h4>
              <h4 className="font-semibold text-[#5e6f47]">{t.qualification}</h4>
            </div>
          </div>

          {/* Bottom: Testimonial text */}
          <p className="text-lg text-gray-900 italic">
            "{t.content}"
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
