// components/ServicesList.tsx
import React from 'react';

const services = [
  {
    image: '/background.png',
    title: 'Conceptions et Consultations Paysagères',
    description:
      'Le service de consultation paysagère comprend une réunion sur site d’une heure avec des conseils, des idées, une analyse sur place et des recommandations écrites, estimations et références d’entrepreneurs pour les travaux hors de notre domaine d’expertise. Veuillez consulter notre page Services pour les tarifs actuels. Un temps supplémentaire peut être organisé si nécessaire. Veuillez noter que la consultation paysagère n’est pas un service de conception mais une étape préliminaire vers un plan directeur paysager.'
  },
  {
    image: '/slider1.png',
    title: 'Nouvelles Installations Paysagères',
    description:
      'Que votre jardin ait besoin d’un coup de neuf ou que vous souhaitiez installer des éléments d’eau et des éclairages nocturnes, notre équipe peut vous aider.'
  },
  {
    image: '/slider3.png',
    title: 'Rénovations Paysagères',
    description:
      'Redonnez vie à votre paysage avec une rénovation. Un “nettoyage de printemps” met votre jardin en forme si un entretien régulier n’a pas été efficace.'
  },
  {
    image: '/services1.png',
    title: 'Entretien Paysager Personnalisé',
    description:
      'Notre équipe d’experts paysagistes vous aidera à créer et gérer des objectifs d’entretien pour maintenir votre paysage sain et magnifique toute l’année.'
  },
  {
    image: '/services2.png',
    title: 'Installation et Réparation de Gicleurs',
    description:
      'Ne vous inquiétez plus de trop ou pas assez arroser. Mulkern Landscaping installe et entretient les meilleurs systèmes de gicleurs depuis plus de 40 ans.'
  },
  {
    image: '/services3.png',
    title: 'Caractéristiques Naturelles de l’Eau',
    description:
      'Plus de 25 ans d’expérience dans la conception, l’installation, la réparation et le nettoyage de jeux d’eau, étangs, cascades et fontaines.'
  }
];

const ServicesList: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:py-[150px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start">
            <div
              className="w-full h-64 bg-cover bg-center mb-6 rounded-md"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <h3 className="text-2xl font-bold text-primary-100 mb-4">{service.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
