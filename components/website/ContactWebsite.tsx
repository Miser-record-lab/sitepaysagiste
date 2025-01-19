'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactWebsite: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://n8n.authenlink.com/webhook/website-agency-contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success('Votre message a été envoyé avec succès !');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectDescription: '',
        });
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#000319] py-16 md:py-24 px-8 flex flex-col justify-center items-center border-t border-white"
    >
      {/* Image Section */}

      {/* Form Section */}
      <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
        <h2 className=" text-xl md:text-4xl text-center font-bold text-white mb-10">
          Envoyez-moi un message :
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-transparent">
          <div>
            <label htmlFor="fullName" className="sr-only">
              Nom Complet
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nom Complet"
              className="w-full border-b border-gray-300 py-2 px-4 text-white bg-transparent focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adresse Email"
              className="w-full border-b border-gray-300 py-2 px-4 text-white bg-transparent focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Numéro de Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Numéro de Téléphone"
              className="w-full border-b border-gray-300 py-2 px-4 text-white bg-transparent focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="projectDescription" className="sr-only">
              Description du Projet
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Donnez-nous une idée de ce que vous recherchez"
              className="w-full border-b border-gray-300 py-2 px-4 text-white bg-transparent focus:outline-none focus:border-green-500 h-32 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent border border-gray-300 text-white py-3 px-6 rounded-tl-md rounded-br-md hover:bg-[#232d35] transition-all font-semibold"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactWebsite;
