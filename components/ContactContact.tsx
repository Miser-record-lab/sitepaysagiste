// components/ServicesContact.tsx
import React from 'react';

const ContactContact: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 flex flex-col md:flex-row items-stretch">
      {/* Image Section */}
      <div className="md:w-2/5 hidden md:relative md:flex  bg-cover bg-center" style={{ backgroundImage: "url('/slider3.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col  p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Contactez-Nous</h2>
          <p className="text-white text-sm leading-relaxed">
            Entrez vos informations et nous vous rappellerons pour discuter davantage de votre projet.
          </p>
        </div>
      </div>

      <div>
        <h2 className=" md:hidden text-xl text-center font-bold text-primary-100 mb-4">Envoyez moi un message :</h2>
      </div>

      {/* Form Section */}
      <div className="md:w-3/5  p-8 md:p-16 flex flex-col justify-center">
        <form className="flex flex-col gap-10">
          <div>
            <label htmlFor="fullName" className="sr-only">Nom Complet</label>
            <input
              type="text"
              id="fullName"
              placeholder="Nom Complet"
              className="w-full border-b border-gray-300 py-2 px-4 text-black focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Adresse Email</label>
            <input
              type="email"
              id="email"
              placeholder="Adresse Email"
              className="w-full border-b border-gray-300 py-2 px-4  text-black focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Numéro de Téléphone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Numéro de Téléphone"
              className="w-full border-b border-gray-300 py-2 px-4 text-black focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="projectDescription" className="sr-only">Description du Projet</label>
            <textarea
              id="projectDescription"
              placeholder="Donnez-nous une idée de ce que vous recherchez"
              className="w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-green-500 h-32 resize-none text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green text-white py-3 px-6 rounded-tl-md rounded-br-md hover:bg-green-100 transition-all font-semibold"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactContact;
