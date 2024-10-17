import React from 'react';
import Jumbotron from './components/home/Jumbotron';
import Banner from './components/common/Banner';
import DisplayCards from './components/common/DisplayCards';
import Section from './components/common/Section';
import DisplayVideo from './components/home/DisplayVideo';

const HomePage = () => {
  return (
    <>
      Home Page
      <Jumbotron />
      <Banner />
      <Section />
      <Section />
      <DisplayVideo />
      <Section />
      <DisplayCards />
      
    </>
  )
}

export default HomePage;