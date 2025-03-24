
import React from 'react';
import Navbar from '../components/layout/Navbar';
import EventsList from '../components/events/EventsList';
import { useLanguage } from '../contexts/LanguageContext';

const Events = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-transition">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-folk-beige/30">
        <div className="folk-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-brown/10 text-folk-brown rounded-full">
              {t('events.tagline')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-folk-darkBrown mb-6">
              {t('events.title')}
            </h1>
            <p className="text-lg text-gray-700">
              {t('events.description')}
            </p>
          </div>
          
          <EventsList />
        </div>
      </div>
    </div>
  );
};

export default Events;
