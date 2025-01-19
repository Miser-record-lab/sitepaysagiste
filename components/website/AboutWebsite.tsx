'use client';

import Image from "next/image";
import Slider from "../../components/Slider";



const AboutSection: React.FC = () => {
  const images = ["/lgdd.png", "/carepulse1.png", "/authenlinkwebsite.png"];

  return (
    <section
      className="flex flex-col md:flex-row items-center  bg-[#000319] justify-between w-full h-full px-8 md:px-16 py-16 md:py-24  border-b border-white"
      id="à propos"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/3 max-w-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nous concevons des sites web sur mesure
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Votre partenaire pour des solutions web personnalisées.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Nous façonnons des sites web à votre image, parfaitement adaptés à vos besoins. 
            En collaborant avec nous, vous développerez votre présence en ligne pour 
            attirer davantage de clients et présenter votre travail de manière professionnelle.
          </p>
        </div>

        {/* Slider Section */}
        <div className="md:w-2/3 hidden md:flex">
          <Slider media={images} />
        </div>

              <div className="md:hidden w-full h-48 relative">
                <Image
                  src="/lgdd.png"
                  alt="Static slider image for small screens"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg border border-white"
                />
              </div>
      </div>
    </section>
  );
};

export default AboutSection;
