import React from "react";
import { FaCheck } from "react-icons/fa";

const PriceWebsite: React.FC = () => {
  return (
    <section id="prix" className="py-16 md:py-24 px-8 bg-[#000319] border-t border-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Choisissez votre formule
        </h2>
        <p className="text-gray-400 text-lg">
          Des solutions adaptées à vos besoins pour la création et la gestion de votre site web.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Basique Plan */}
        <div className="flex-1 max-w-[600px] bg-[#0f172a] rounded-lg p-8 border-t-4 border-blue-500 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] shadow-[0_0_10px_2px_rgba(59,130,246,0.3)]">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Basique</h3>
          <p className="text-4xl font-bold text-blue-500 mb-6">250 €</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-blue-500" />
              <span>Création du site web personnalisé</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-blue-500" />
              <span>Adaptation des designs et des textes</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-blue-500" />
              <span>Accompagnement pour le déploiement</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-blue-500" />
              <span>Aide pour la création du nom de domaine</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-blue-500" />
              <span>Service après-vente pour assistance</span>
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex-1 max-w-[600px] bg-[#0f172a] rounded-lg p-8 border-t-4 border-green-500 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(16,185,129,0.6)] shadow-[0_0_10px_2px_rgba(16,185,129,0.3)]">
          <h3 className="text-3xl font-bold text-gray-100 mb-4">Premium</h3>
          <p className="text-4xl font-bold text-green-500 mb-6">400 €</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Création du site web personnalisé</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Déploiement et hébergement pendant 1 an</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Achat du nom de domaine inclus</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Gestion des prises de contact via le site</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Service client dédié</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Maintenance et mises à jour pendant 1 an</span>
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <FaCheck className="text-green-500" />
              <span>Renouvellement annuel (200 € / an)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PriceWebsite;
