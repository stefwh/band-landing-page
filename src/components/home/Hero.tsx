
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0 bg-black/30 backdrop-filter backdrop-blur-[2px]"
        aria-hidden="true"
      />
      
      <div 
        ref={heroRef} 
        className="folk-container relative z-10 text-center px-4 staggered-animation"
      >
        <span className="inline-block py-1 px-3 mb-4 text-sm tracking-wide bg-folk-cream text-folk-brown rounded-full">
          Authentic Alpine Folk Music
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto text-shadow">
          Experience the Timeless Tradition of Volksmusik
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          A harmonious blend of traditional melodies and mountain rhythms that celebrate our cultural heritage.
        </p>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-folk-cream transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <ArrowDownCircle className="animate-bounce" size={40} />
      </button>
    </section>
  );
};

export default Hero;
