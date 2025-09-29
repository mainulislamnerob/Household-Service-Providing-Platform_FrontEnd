import React from 'react';
import About from '../components/home/About';
import SweeperSlider from '../components/home/SweeperSlider';
import ComfortsSection from '../components/home/ComfortsSection';
import SectionTitle from '../components/shared/SectionTitle';
import News from './News';
import Testimonials from '../components/home/Testimonials';
import HowItWorks from '../components/home/HowItWorks';

const Home = () => {
    return (
      <div>
        <SweeperSlider />
        <SectionTitle
          heading={"Your Comfort Depends on Us"}
          subheading={
            "At fastidii legendos consequat ius. Eu unum clita principes mei, ut ubique eloquentiam referrentur duo."
          }
        />
        <ComfortsSection />
        <About/>
        <News/>
        <Testimonials/>
        <HowItWorks/>
      </div>
    );
};

export default Home;