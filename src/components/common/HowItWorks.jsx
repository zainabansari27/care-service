
//also good

// import React from 'react';

// const HowItWorks = () => {
//   return (
//     <section className="bg-gray-900 text-white py-12 px-4 sm:px-8 lg:px-16">
//       <h2 className="text-center text-2xl font-semibold mb-8 lg:mb-12">How it works</h2>
      
//       {/* Main container to align all three steps horizontally on large screens */}
//       <div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-16">
        
//         {/* Step 1 */}
//         <div className="flex flex-col items-center text-center lg:w-1/3">
//           <div className="flex items-center justify-center bg-cyan-800 text-cyan-500 rounded-full w-12 h-12 text-lg font-bold mb-4">
//             1
//           </div>
//           <h3 className="text-lg font-semibold text-cyan-200 mb-2">Describe Your Task</h3>
//           <p className="text-gray-300">
//             Tell us what you need done, when and where it works for you.
//           </p>
//         </div>
        
//         {/* Step 2 */}
//         <div className="flex flex-col items-center text-center lg:w-1/3">
//           <div className="flex items-center justify-center bg-cyan-800 text-cyan-500 rounded-full w-12 h-12 text-lg font-bold mb-4">
//             2
//           </div>
//           <h3 className="text-lg font-semibold text-cyan-200 mb-2">Choose Your Tasker</h3>
//           <p className="text-gray-300">
//             Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.
//           </p>
//         </div>

//         {/* Step 3 */}
//         <div className="flex flex-col items-center text-center lg:w-1/3">
//           <div className="flex items-center justify-center bg-cyan-800 text-cyan-500 rounded-full w-12 h-12 text-lg font-bold mb-4">
//             3
//           </div>
//           <h3 className="text-lg font-semibold text-cyan-200 mb-2">Get it Done!</h3>
//           <p className="text-gray-300">
//             Your Tasker arrives and gets the job done. Pay securely and leave a review.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;







import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-center text-4xl font-semibold mb-10">How it works</h2>
      
      {/* Container for all steps, aligns items horizontally on larger screens */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-cyan-400 text-black rounded-full w-10 h-10 text-lg font-bold">
              1
            </div>
            <h3 className="text-3xl font-semibold text-cyan-400">Describe Your Task</h3>
          </div>
          <p className="text-gray-300 mt-2 max-w-xs font-medium">
            Tell us what you need done, when and where it works for you.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-cyan-400 text-black rounded-full w-10 h-10 text-lg font-bold">
              2
            </div>
            <h3 className="text-3xl font-semibold text-cyan-400">Choose Your Tasker</h3>
          </div>
          <p className="text-gray-300 mt-2 max-w-xs font-medium">
            Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-cyan-400 text-black rounded-full w-10 h-10 text-lg font-bold">
              3
            </div>
            <h3 className="text-3xl font-semibold text-cyan-400">Get it Done!</h3>
          </div>
          <p className="text-gray-300 mt-2 max-w-xs font-medium">
            Your Tasker arrives and gets the job done. Pay securely and leave a review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

