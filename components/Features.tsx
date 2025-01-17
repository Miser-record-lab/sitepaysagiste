import React from 'react';
import { FaTree, FaTools, FaRedo, FaLeaf, FaWater, FaFaucet } from 'react-icons/fa';

const featuresData = [
    {
      icon: <FaTree size={32} className="text-green-700" />,
      title: 'Consultations paysagères',
      description: "Bénéficiez de conseils personnalisés pour aménager votre jardin avec expertise.",
    },
    {
      icon: <FaTools size={32} className="text-green-700" />,
      title: 'Nouvelles installations paysagères',
      description: 'Transformez vos idées en réalité avec des installations sur mesure.',
    },
    {
      icon: <FaRedo size={32} className="text-green-700" />,
      title: 'Rénovations paysagères',
      description: 'Donnez une nouvelle vie à vos espaces extérieurs existants.',
    },
    {
      icon: <FaLeaf size={32} className="text-green-700" />,
      title: 'Entretien de jardin personnalisé',
      description: 'Profitez d’un entretien régulier pour garder votre jardin impeccable.',
    },
    {
      icon: <FaFaucet size={32} className="text-green-700" />,
      title: 'Installation et réparation d’arrosage',
      description: 'Assurez l’arrosage optimal de vos plantes et pelouses.',
    },
    {
      icon: <FaWater size={32} className="text-green-700" />,
      title: 'Aménagements d’eau naturels',
      description: 'Ajoutez des fontaines ou des étangs pour embellir votre jardin.',
    },
  ];

const Features: React.FC = () => {
  return (
    <section className="bg-primary-200 py-[100px] md:py-[150px] px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6  rounded-lg shadow-md hover:shadow-lg border border-primary-100"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;