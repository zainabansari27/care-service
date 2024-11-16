// AvailableServices.js
import React from 'react';
import ServiceCard from './servicecard';
import { Link } from 'react-router-dom';

const AvailableServices = () => {
  const services = [
    { title: 'Elder Care', price: '₹5k', imgUrl: 'https://i.ibb.co/qDK2WHS/ed-care.jpg' ,pageName:'edCare' },
    { title: 'Paralysis Caregiver', price: '₹5k', imgUrl: 'https://i.ibb.co/LpVVrw8/paralysis.jpg', pageName:'paralysisCare' },
    { title: 'Postnatal Caregiver', price: '₹5k', imgUrl: 'https://i.ibb.co/sVrg60H/post-natal.jpg',pageName:'postnatalCare' },
    { title: 'Nurse', price: '₹5k', imgUrl: 'https://i.ibb.co/F62S1J1/babysitter.webp', pageName:'Nurse' },
    { title: 'Something', price: '₹5k', imgUrl: 'https://i.ibb.co/F62S1J1/babysitter.webp', pageName:'Something' },
     { title: 'Baby Sitter', price: '₹5k', imgUrl: 'https://i.ibb.co/F62S1J1/babysitter.webp' ,pageName:'babySitter'},
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-6xl font-semibold text-white mb-4">Available Services</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} price={service.price} imgUrl={service.imgUrl} pageName={service.pageName}/>
        ))}
      </div>
    </section>
  );
};

export default AvailableServices;



