import React from 'react';

const BookService = () => {
  return (
    <section className="flex justify-center items-center py-12 px-4 sm:px-8 lg:px-16 bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-between items-center max-w-4xl w-full shadow-lg">
        
        {/* Text content */}
        <div className="mb-4 md:mb-0 md:text-left text-center">
          <h2 className="text-2xl font-semibold mb-2">Book a service now!</h2>
          <p className="text-gray-300">Get your work done today or any day of the week.</p>
        </div>
        
        {/* Call-to-Action Button */}
        <button className="bg-cyan-400 hover:bg-teal-600 text-black font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default BookService;
