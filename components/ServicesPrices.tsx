// components/ServicesPrices.tsx
import React from 'react';
import { FaTools, FaLeaf, FaTruck } from 'react-icons/fa';

const priceData = [
  {
    icon: <FaTools size={32} className="text-primary-100" />,
    title: 'Réparations',
    description:
      'Réparation et installation disponibles pour les systèmes de gicleurs, les étangs et les jeux d’eau, ainsi que les systèmes d’éclairage extérieur basse tension. Minimum de 2 heures.',
    price: '115 €/heure par personne'
  },
  {
    icon: <FaLeaf size={32} className="text-primary-100" />,
    title: 'Consultation Paysagère',
    description:
      'Inclut une réunion sur site d’une heure comprenant des conseils, des idées, une analyse sur place + 2 heures pour des recommandations écrites, des devis, des références d’entrepreneurs et notre proposition.',
    price: '165.00 € par heure'
  },
  {
    icon: <FaTruck size={32} className="text-primary-100" />,
    title: 'Main-d’œuvre Générale & Livraison de Plantes',
    description:
      'Livraison en bordure de trottoir partout aux alentours de Cannes & Antibes. Service de plantation disponible. Minimum de 2 heures.',
    price: '77 €/heure par personne'
  }
];

const ServicesPrices: React.FC = () => {
  return (
    <section className="bg-primary-300 py-16 md:py-[120px] px-8">
      <div className="container mx-auto text-center mb-8 md:mb-16">
        <h2 className="text-3xl font-bold text-primary-100 mb-6">Prix d&apos;entrée</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {priceData.map((price, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 border p-12 shadow-md hover:shadow-2xl max-w-[400px]"
          >
            <div className="mb-4">{price.icon}</div>
            <h3 className="text-xl font-bold text-primary-100 mb-4 text-center">{price.title}</h3>
            <p className="text-md font-bold text-primary-100 text-center">{price.price}</p>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line p-6 text-justify">
              {price.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPrices;
