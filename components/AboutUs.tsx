// components/AboutUs.tsx
import React from 'react';
import { FaUserTie, FaCheckCircle, FaSmile, FaBusinessTime, FaSeedling, FaLeaf } from 'react-icons/fa';

const aboutUsData = [
  {
    icon: <FaUserTie size={32} className="text-white" />, 
    title: 'Équipe de Professionnels',
    description: 'Nous avons des techniciens certifiés dans l’industrie paysagère.'
  },
  {
    icon: <FaCheckCircle size={32} className="text-white" />, 
    title: 'Service Fiable',
    description: 'Faites-nous confiance pour accomplir le travail.'
  },
  {
    icon: <FaSmile size={32} className="text-white" />, 
    title: 'Satisfaction Garantie',
    description: 'Nous garantissons nos services.'
  },
  {
    icon: <FaBusinessTime size={32} className="text-white" />, 
    title: '45 ans d’Expérience',
    description: 'Notre entreprise est là pour durer.'
  },
  {
    icon: <FaSeedling size={32} className="text-white" />, 
    title: 'Experts en Aménagement Paysager',
    description: 'La formation continue est une priorité pour nous.'
  },
  {
    icon: <FaLeaf size={32} className="text-white" />, 
    title: 'Entreprise Écoresponsable',
    description: 'Des services respectueux de l’environnement sont disponibles.'
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="bg-green-100 py-16 px-8">
        <h1 className='text-center text-3xl md:text-5xl font-bold text-grey-100 md:mt-12'>Ce qui me définis : </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center my-12 md:my-20">
        {aboutUsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-2xl border border-white">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-grey-200 mb-2">{item.title}</h3>
            <p className="text-grey-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;