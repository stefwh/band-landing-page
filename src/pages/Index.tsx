
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import EventsPreview from '../components/home/EventsPreview';
import Navbar from '../components/layout/Navbar';

const Index = () => {
  return (
    <div className="page-transition">
      <Navbar />
      <Hero />
      <About />
      <EventsPreview />
    </div>
  );
};

export default Index;
