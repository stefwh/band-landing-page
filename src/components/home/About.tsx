
import React, { useEffect, useRef } from 'react';
import { Music, Users, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Music className="h-8 w-8 text-folk-brown" />,
      title: 'Traditional Music',
      description: 'Authentic folk melodies passed down through generations of Alpine musicians.'
    },
    {
      icon: <Users className="h-8 w-8 text-folk-brown" />,
      title: 'Experienced Ensemble',
      description: 'Our skilled musicians bring years of expertise and passion to every performance.'
    },
    {
      icon: <Heart className="h-8 w-8 text-folk-brown" />,
      title: 'Cultural Heritage',
      description: 'Preserving and celebrating the rich traditions of Alpine folk music.'
    }
  ];

  return (
    <section id="about" className="section-spacing bg-folk-cream/50">
      <div 
        ref={sectionRef} 
        className="folk-container staggered-animation"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-brown/10 text-folk-brown rounded-full">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-folk-darkBrown mb-6">
            Celebrating the Spirit of Alpine Folk Music
          </h2>
          <p className="text-lg text-gray-700">
            Founded in the heart of the Alps, our ensemble brings together talented musicians dedicated to preserving and performing traditional Volksmusik. With authentic instruments and heartfelt performances, we share the joy and cultural significance of our musical heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover-lift"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-folk-brown/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-folk-darkBrown mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
