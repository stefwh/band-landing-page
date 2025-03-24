
import React, { useState } from 'react';
import EventCard, { EventProps } from './EventCard';

const EventsList = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // Sample events data
  const eventsData: EventProps[] = [
    {
      id: 1,
      title: 'Alpine Summer Festival',
      date: 'August 15, 2023',
      location: 'Mountain View Hall, Salzburg',
      description: 'Join us for a day of traditional folk music in the beautiful Alpine landscape. This annual festival brings together the best musical talents from across the region.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80',
      isPast: true
    },
    {
      id: 2,
      title: 'Traditional Folk Concert',
      date: 'September 3, 2023',
      location: 'Old Town Square, Munich',
      description: 'Experience an evening of traditional folk melodies in the historic Old Town Square. Our ensemble will perform classic pieces that have been part of our cultural heritage for generations.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      isPast: true
    },
    {
      id: 3,
      title: 'Mountain Village Festival',
      date: 'October 12, 2023',
      location: 'Village Center, Tyrol',
      description: 'Celebrate the rich traditions of mountain folk music at this intimate village festival. Local cuisine, crafts, and dance will accompany our musical performances.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80',
      isPast: true
    },
    {
      id: 4,
      title: 'Winter Solstice Concert',
      date: 'December 21, 2023',
      location: 'Grand Concert Hall, Vienna',
      description: 'A special winter solstice performance featuring seasonal folk music traditions. This concert will explore the musical customs associated with winter celebrations in Alpine communities.',
      image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80',
      isPast: false
    },
    {
      id: 5,
      title: 'Spring Folk Festival',
      date: 'April 15, 2024',
      location: 'Meadow Gardens, Innsbruck',
      description: 'Welcome the arrival of spring with traditional folk music that celebrates renewal and growth. This outdoor festival will feature multiple performances throughout the day.',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80',
      isPast: false
    },
    {
      id: 6,
      title: 'Midsummer Night Concert',
      date: 'June 24, 2024',
      location: 'Lakeside Pavilion, Lucerne',
      description: 'A magical evening of folk music by the lake as we celebrate the midsummer traditions. The concert will feature both traditional pieces and new compositions inspired by folk melodies.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80',
      isPast: false
    }
  ];

  const filteredEvents = eventsData.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return !event.isPast;
    if (filter === 'past') return event.isPast;
    return true;
  });

  return (
    <div>
      <div className="mb-8 flex justify-center space-x-4">
        <button 
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-full transition-colors ${
            filter === 'all' 
              ? 'bg-folk-brown text-white' 
              : 'bg-folk-beige/50 text-folk-darkBrown hover:bg-folk-beige'
          }`}
        >
          All Events
        </button>
        <button 
          onClick={() => setFilter('upcoming')}
          className={`px-5 py-2 rounded-full transition-colors ${
            filter === 'upcoming' 
              ? 'bg-folk-brown text-white' 
              : 'bg-folk-beige/50 text-folk-darkBrown hover:bg-folk-beige'
          }`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setFilter('past')}
          className={`px-5 py-2 rounded-full transition-colors ${
            filter === 'past' 
              ? 'bg-folk-brown text-white' 
              : 'bg-folk-beige/50 text-folk-darkBrown hover:bg-folk-beige'
          }`}
        >
          Past Events
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No events found with the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default EventsList;
