import React from 'react';
import './App.css';
import Footer from './Footer';
import {CardsService} from './Cards';

function Services() {
  return (
    <>
       <h1 className='products'>SERVICES</h1>
     <CardsService/>
      <Footer />
    </>
  );
}

export default Services;