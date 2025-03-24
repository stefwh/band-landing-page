
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import EventsPreview from '../components/home/EventsPreview';
import Navbar from '../components/layout/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  // We'll include useLanguage here even though we're not directly using it
  // in this component, as it may be needed for future translations
  const { t } = useLanguage();
  
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
