import React from 'react';
import Jumbotron from './components/home/Jumbotron';
import Banner from './components/common/Banner';
import DisplayCards from './components/common/DisplayCards';
import Section from './components/common/Section';
import ClientModal from './functions/clientModal';



const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <Banner />
      <DisplayCards images={"productImages.js"} />
      <Section />
      <Section />
      <Section />
      <Section />
      <DisplayCards images={false} />
      <ClientModal />
    </>
  )
}

export default HomePage;

