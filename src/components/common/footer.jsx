// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
//         {/* Brand Section */}
//         <div className="flex flex-col items-start">
//           <h2 className="text-2xl font-semibold text-white">
//             Need<span className="text-cyan-500">Station</span>
//           </h2>
//           <p className="text-gray-400 mt-2">
//             A new way to make the payments easy, reliable and secure.
//           </p>
//         </div>

//         {/* Useful Links Section */}
//         <div className="flex flex-col space-y-1">
//           <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
//           <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
//           <a href="#" className="text-gray-400 hover:text-white">How it Works</a>
//           <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
//           <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
//           <a href="#" className="text-gray-400 hover:text-white">Terms & Services</a>
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col space-y-1">
//           <h3 className="text-lg font-semibold mb-2">Contact</h3>
//           <p className="text-gray-400 flex items-center">
//             <span className="mr-2">📞</span> +11 222 3333
//           </p>
//           <p className="text-gray-400 flex items-center">
//             <span className="mr-2">📧</span> mangocoding123@gmail.com
//           </p>
//           <p className="text-gray-400 flex items-center">
//             <span className="mr-2">📍</span> 2972 Westheimer Rd. Santa Ana, Illinois 85486
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 my-4"></div>

//       {/* Copyright and Social Media Links */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
//         <p>© All Rights Reserved.</p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-white">🌐</a>
//           <a href="#" className="hover:text-white">📘</a>
//           <a href="#" className="hover:text-white">🐦</a>
//           <a href="#" className="hover:text-white">🔗</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-white py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white">
            Need<span className="text-blue-100">Station</span>
          </h2>
          <p className="text-gray-400 mt-4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Services</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 flex items-center">
              <span className="mr-2">📞</span> +11 222 3333
            </li>
            <li className="text-gray-400 flex items-center">
              <span className="mr-2">📧</span> mangocoding123@gmail.com
            </li>
            <li className="text-gray-400 flex items-center">
              <span className="mr-2">📍</span> 2972 Westheimer Rd. Santa Ana, Illinois 85486
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Copyright and Social Media Links */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">🌐</a>
          <a href="#" className="hover:text-white">📘</a>
          <a href="#" className="hover:text-white">🐦</a>
          <a href="#" className="hover:text-white">🔗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
