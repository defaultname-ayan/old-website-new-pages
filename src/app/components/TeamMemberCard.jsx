'use client';

import Image from 'next/image';

export default function TeamMemberCard({ image, name, position, bio }) {
  return (
    <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Image Column */}
          <div className="md:w-1/3 p-6 flex justify-center">
            <div className="relative h-100 w-100 overflow-hidden border border-[#5e6f47]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          {/* Content Column */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-[#5e6f47] mb-2">{name}</h1>
            <p className="text-xl font-semibold text-gray-600 mb-6">{position}</p>
            <div className="space-y-4 text-gray-700">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 