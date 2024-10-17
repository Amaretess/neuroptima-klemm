import React from 'react';
import Jumbotron from './components/home/Jumbotron';
import Banner from './components/common/Banner';
import DisplayCards from './components/common/DisplayCards';
import Section from './components/common/Section';
import DisplayVideo from './components/home/DisplayVideo';
import SectionOne from './components/home/SectionTwo';

const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <Banner />
      <SectionOne />
      <Section />
      <DisplayVideo />
      <Section />
      <DisplayCards />
      
    </>
  )
}

export default HomePage;