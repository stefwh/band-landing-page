
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const EventsPreview = () => {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Alpine Summer Festival',
      date: 'August 15, 2023',
      location: 'Mountain View Hall, Salzburg',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Traditional Folk Concert',
      date: 'September 3, 2023',
      location: 'Old Town Square, Munich',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="folk-container">
        <div className="max-w-3xl mx-auto text-center mb-16 staggered-animation">
          <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-green/10 text-folk-green rounded-full">
            Upcoming Events
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-folk-darkBrown mb-6">
            Join Us for Live Performances
          </h2>
          <p className="text-lg text-gray-700">
            Experience the passion and energy of our music at these upcoming events. We'd love to share our traditions with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div 
                className="aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-folk-cream" />
                  <span className="text-folk-cream text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-folk-cream transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/80 mb-4">{event.location}</p>
                <Link 
                  to={`/events`} 
                  className="inline-flex items-center text-folk-cream hover:text-white transition-colors"
                >
                  <span className="mr-2">View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/events" 
            className="inline-flex items-center px-6 py-3 bg-folk-brown text-white rounded-md hover:bg-folk-darkBrown transition-colors duration-300"
          >
            <span className="mr-2">View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
