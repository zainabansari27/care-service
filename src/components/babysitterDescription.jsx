// src/components/Hero.js

import React from 'react';

const BabySitter = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Babysitter</h2>
        <p className="mb-4 text-xl">
        Trustworthy and energetic caregivers providing top-notch childcare services.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Engage in activities(games, crafts, outdoor play)</li>
          <li>Establish bedtime routines</li>
          <li>Communicating with parents regarding daily activities</li></ul>
        <h3 className="font-semibold mb-2 text-xl">Services Include</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Infant care (0-12 month)</li>
          <li>Toddler care (1-3 years)</li>
          <li>School-age care (6-12 years)</li>
          <li>Overnight care</li>
          <li>Event childcare</li>
        </ul>
        <button className="bg-blue-100 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          // src="https://i.ibb.co/1sP9h1C/istockphoto-1396861213-612x612.jpg"
          src="/babysitter.webp"
          alt="Caretaker with Elderly Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};


export default BabySitter;
