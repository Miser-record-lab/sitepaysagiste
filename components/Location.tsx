// components/Location.tsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface LocationProps {
  cities: string[];
  introText: string;
}

const Location: React.FC<LocationProps> = ({ cities, introText }) => {
  return (
    <section className="bg-green py-[100px] px-8 text-white">
      <div className="container mx-auto text-center">
        {/* Intro Text */}
        <h2 className="text-3xl md:text-5xl font-thin mb-20">{introText}</h2>

        {/* Cities List for large screens */}
        <div className="hidden md:grid grid-rows-2 gap-12">
          <div className="flex justify-center gap-10">
            {cities.slice(0, 5).map((city, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaMapMarkerAlt size={20} />
                <span className="text-lg font-medium">{city}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-10">
            {cities.slice(5).map((city, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaMapMarkerAlt size={20} />
                <span className="text-lg font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cities List for small screens */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} />
              <span className="text-lg font-medium text-left">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
