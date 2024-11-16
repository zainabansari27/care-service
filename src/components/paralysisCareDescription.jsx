// src/components/Hero.js

import React from 'react';

const ParalysisCare = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Paralysis Caregiver</h2>
        <p className="mb-4 text-xl">
          Responsible and compassionate individual providing personalized, skilled care 
         support to individuals with paralysis, enhancing their quality of life, independence, and dignity
        </p>
        <h3 className="font-semibold mb-2 text-xl">Our Caregivers Offers:</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li> Personal care assistance (bathing, dressing, grooming)</li>
          <li>Mobility support (transfers, exercises, walking aid)</li>
          <li>Medical care management (medications, equipment)</li>
          <li>Daily living assistance (meals, household chores)</li>
          <li>Emotional support and companionship</li>
        </ul>
        <button className="bg-blue-100 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="/pCr.jpeg"
          alt="Caretaker with Elderly Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ParalysisCare;