
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="page-transition">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-folk-beige/30">
        <div className="folk-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-green/10 text-folk-green rounded-full">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-folk-darkBrown mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700">
              We'd love to hear from you! Whether you're interested in booking us for an event or just want to say hello, we're here to connect with you.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
