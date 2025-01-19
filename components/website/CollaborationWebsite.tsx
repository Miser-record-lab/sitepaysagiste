'use client';

import React from "react";
import { FaLaptopCode, FaPencilAlt, FaGlobe, FaServer, FaHandshake } from "react-icons/fa";

const Collaboration: React.FC = () => {
  return (
    <section className="w-full pt-20 pb-20 bg-[#000319]" id="collaboration">
      <div className="mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          Une collaboration <span className="text-purple">sur mesure</span>
        </h2>
        <p className="text-center text-lg text-white mb-12">
          De la conception à la maintenance, nous vous accompagnons à chaque étape 
pour créer un site web qui reflète parfaitement votre entreprise.
        </p>

        {/* First group of 3 cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Step 1 */}
          <div className="relative bg-black p-8 rounded-lg border border-red-700 shadow-lg hover:shadow-lg hover:shadow-red-700/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">1</h3>
              <FaLaptopCode className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Conception personnalisée</h4>
            <p className="text-white">
              Création d’un site web unique pour votre entreprise, à partir de vos besoins et objectifs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-black p-8 rounded-lg border border-orange-500 shadow-lg hover:shadow-lg hover:shadow-orange-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">2</h3>
              <FaPencilAlt className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Adaptation et ajustements</h4>
            <p className="text-white">
              Nous intégrons vos retours en modifiant les textes et images pour refléter parfaitement votre expertise.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-black p-8 rounded-lg border border-yellow-400 shadow-lg hover:shadow-lg hover:shadow-yellow-400/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">3</h3>
              <FaGlobe className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Nom de domaine et hébergement</h4>
            <p className="text-white">
              Nous enregistrons votre nom de domaine et hébergeons votre site pour une mise en ligne rapide et fiable.
            </p>
          </div>
        </div>

        {/* Second group of 2 cards */}
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {/* Step 4 */}
          <div className="relative bg-black p-8 rounded-lg border border-green-500 shadow-lg hover:shadow-lg hover:shadow-green-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">4</h3>
              <FaServer className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Maintenance et support</h4>
            <p className="text-white">
              Pendant un an, nous assurons la maintenance et répondons à vos demandes de modifications.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative bg-black p-8 rounded-lg border border-blue-500 shadow-lg hover:shadow-lg hover:shadow-blue-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">5</h3>
              <FaHandshake className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Collaboration continue</h4>
            <p className="text-white">
              Nous travaillons avec vous pour faire évoluer votre site en fonction des besoins de votre entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
