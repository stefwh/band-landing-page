
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-folk-brown" />,
      title: 'Email Us',
      details: 'info@volksmusikband.com',
      link: 'mailto:info@volksmusikband.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-folk-brown" />,
      title: 'Call Us',
      details: '+43 123 456 789',
      link: 'tel:+43123456789'
    },
    {
      icon: <MapPin className="w-5 h-5 text-folk-brown" />,
      title: 'Visit Us',
      details: 'Alpstrasse 123, 5020 Salzburg, Austria',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-folk-darkBrown mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! Whether you're interested in booking us for an event, have questions about our performances, or just want to say hello, we're here to help.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              className="flex items-start p-4 rounded-xl bg-folk-cream/50 hover:bg-folk-cream transition-colors"
            >
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-folk-darkBrown mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-folk-darkBrown mb-6">
            Send Us a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-folk-brown focus:ring-folk-brown/20 focus:ring-2 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-folk-brown focus:ring-folk-brown/20 focus:ring-2 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-folk-brown focus:ring-folk-brown/20 focus:ring-2 focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-folk-brown focus:ring-folk-brown/20 focus:ring-2 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 bg-folk-brown text-white rounded-md hover:bg-folk-darkBrown transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
