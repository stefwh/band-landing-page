
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isPast?: boolean;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  location,
  description,
  image,
  isPast = false
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white group hover-lift">
      <div className="relative">
        <div 
          className="aspect-[16/9] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {isPast && (
          <div className="absolute top-4 right-4 py-1 px-3 rounded-full bg-black/70 text-white text-xs font-medium">
            Past Event
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2 text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-folk-brown" />
          <span className="text-sm">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-folk-darkBrown group-hover:text-folk-brown transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-folk-brown" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {description}
        </p>
        
        <button className="text-folk-brown hover:text-folk-darkBrown font-medium transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
