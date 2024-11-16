// src/components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Caretaker</h2>
        <p className="mb-4 text-xl">
          Responsible and compassionate individual providing personalized care
          and support to elderly, disabled, or vulnerable individuals.
          Trustworthy and energetic caregiver responsible for the temporary
          supervision and safety of children.
        </p>
        <h3 className="font-semibold mb-2 text-xl">Duties include:</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Assisting with daily living activities (bathing, dressing, grooming)</li>
          <li>Managing medications and health needs</li>
          <li>Maintaining a safe and clean environment</li>
          <li>Monitoring vital signs and reporting changes</li>
          <li>Engaging in activities (games, crafts, etc.)</li>
        </ul>
        <button className="bg-blue-100 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="https://i.ibb.co/1sP9h1C/istockphoto-1396861213-612x612.jpg"
          alt="Caretaker with Elderly Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
