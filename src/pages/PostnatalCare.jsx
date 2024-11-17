import React from 'react';
import Header from '../components/common/header';
import Postnatal from '../components/postnatalDescription';
import AvailableServices from '../components/availableServices';
import HowItWorks from '../components/common/HowItWorks';
import BookService from '../components/common/BookService';
import Footer from '../components/common/footer';

function ServicePage3() {
  return (
    <div className="App">
      <Header />
      <Postnatal/>
      <AvailableServices/>
      <HowItWorks />
     <BookService/> 
      <Footer/>
     
    </div>
  
  );
}

export default ServicePage3;