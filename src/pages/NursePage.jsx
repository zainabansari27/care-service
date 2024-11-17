import React from 'react';
import Header from '../components/common/header';
import AvailableServices from '../components/availableServices';
import HowItWorks from '../components/common/HowItWorks';
import BookService from '../components/common/BookService';
import Footer from '../components/common/footer';
import Nurse from '../components/nurseDescription';

function ServicePage4() {
  return (
    <div className="App">
      <Header />
      <Nurse/>
      <AvailableServices/>
      <HowItWorks />
      <BookService/> 
      <Footer/>
    </div>
  
  );
}

export default ServicePage4;