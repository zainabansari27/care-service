import React from 'react';
import Header from '../components/common/header';
import Hero from '../components/mainPageDescription';
import AvailableServices from '../components/availableServices';
import HowItWorks from '../components/common/HowItWorks';
import BookService from '../components/common/BookService';
import Footer from '../components/common/footer';

function MainPage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AvailableServices/>
      <HowItWorks />
      <BookService/>
      <Footer/>
     
    </div>
  
  );
}

export default MainPage;