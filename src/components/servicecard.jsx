import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, price, imgUrl,pageName }) => {
  return (
    <div className="bg-gray-800 rounded-lg  shadow-lg text-center">
      <Link to={pageName}>
      <img
        src={imgUrl}
        alt={title}
        className="h-80 w-full object-cover"
      /> 
      </Link>
      <div className="p-6 ">
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-400">{`Project starting at ${price}`}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

