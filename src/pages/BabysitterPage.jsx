import React from 'react';
import Header from '../components/common/header';
import AvailableServices from '../components/availableServices';
import HowItWorks from '../components/common/HowItWorks';
import BookService from '../components/common/BookService';
import Footer from '../components/common/footer';
import BabySitter from '../components/babysitterDescription';

function ServicePage1() {
  return (
    <div className="App">
      <Header />
      <BabySitter/>
      <AvailableServices/>
      <HowItWorks />
     <BookService/> 
      <Footer/>
     
    </div>
  
  );
}

export default ServicePage1;