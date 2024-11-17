import React from 'react';
import Header from '../components/common/header';
import ParalysisCare from '../components/paralysisCareDescription';
import AvailableServices from '../components/availableServices';
import HowItWorks from '../components/common/HowItWorks';
import BookService from '../components/common/BookService';
import Footer from '../components/common/footer';

function ServicePage2() {
  return (
    <div className="App">
      <Header />
      <ParalysisCare/>
      <AvailableServices/>
      <HowItWorks />
     <BookService/> 
      <Footer/>
     
    </div>
  
  );
}

export default ServicePage2;