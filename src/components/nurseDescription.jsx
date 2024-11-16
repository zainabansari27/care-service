// src/components/Hero.js

import React from 'react';

const Nurse = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Nurse</h2>
        <p className="mb-4 text-xl">
        Our registered nurses provide high-quality, patient-centered care to individuals, families, and communities. With expertise in various specialties, our nurses deliver compassionate, holistic care to promote physical, emotional, and mental well-being.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Personalized care plans</li>
          <li>Expertise in latest medical practices</li>
          <li>Collaboration with healthcare teams</li></ul>
        <h3 className="font-semibold mb-2 text-xl">Services Include</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 text-xl">
          <li>Medical/Surgical Care</li>
          <li>Pediatric Care</li>
          <li> Medication Management</li>
          <li>Chronic Disease Management</li>
          <li>Wound Care</li>
        </ul>
        <button className="bg-blue-100 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          // src="https://i.ibb.co/1sP9h1C/istockphoto-1396861213-612x612.jpg"
          src="/Nurse.webp"
          alt="Caretaker with Elderly Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};


export default Nurse;
