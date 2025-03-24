
import React from 'react';
import Navbar from '../components/layout/Navbar';
import EventsList from '../components/events/EventsList';

const Events = () => {
  return (
    <div className="page-transition">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-folk-beige/30">
        <div className="folk-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-brown/10 text-folk-brown rounded-full">
              Our Schedule
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-folk-darkBrown mb-6">
              Upcoming & Past Events
            </h1>
            <p className="text-lg text-gray-700">
              Join us at these events to experience the rich tradition of Volksmusik. From intimate concerts to festive celebrations, our performances bring Alpine folk music to life.
            </p>
          </div>
          
          <EventsList />
        </div>
      </div>
    </div>
  );
};

export default Events;
