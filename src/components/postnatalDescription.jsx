// src/components/Hero.js

import React from 'react';

const Postnatal = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Postnatal Care</h2>
        <p className="mb-4 text-xl">
        Providing Compassionate Care for New Mothers and Babies
        Trustworthy and energetic caregivers providing top-notch services.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Newborn care and development</li>
          <li>Postpartum recovery and healing</li>
          <li>Breastfeeding techniques and challenges</li>
          {/* <li>Breastfeeding techniques and challenges</li> */}
          <li> Emotional support during transition to motherhood
          </li>
          </ul>
        <h3 className="font-semibold mb-2 text-xl">Our Caregivers Offers</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Emotional support and reassurance</li>
          <li>Infant care (feeding, bathing, soothing)</li>
          <li>Postpartum recovery assistance (wound care, pain management)</li>
          <li>Breastfeeding assistance and lactation support</li>
          <li>Overnight care and sleep support</li>
        </ul>
        <button className="bg-blue-100 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          // src="https://i.ibb.co/1sP9h1C/istockphoto-1396861213-612x612.jpg"
          src="/post-natal.jpg"
          alt="Caretaker with Elderly Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};


export default Postnatal;
