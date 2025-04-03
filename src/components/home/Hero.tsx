
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Music } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-folk-cream/30">
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1 md:gap-2 p-1 md:p-2 opacity-20">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1534883236291-28a1c5931263?auto=format&fit=crop&q=80" 
            alt="Volksmusiker" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&q=80" 
            alt="Akkordeon" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80" 
            alt="Zither" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1621684778124-e4189fc830bf?auto=format&fit=crop&q=80" 
            alt="Tracht" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?auto=format&fit=crop&q=80" 
            alt="Alpenlandschaft" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 z-1 flex items-center justify-center px-4 py-8 md:py-0">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div 
              ref={heroRef} 
              className="rounded-xl bg-white/90 p-5 md:p-8 shadow-lg backdrop-blur-sm staggered-animation"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-folk-brown p-2 text-white">
                  <Music size={isMobile ? 18 : 24} />
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-folk-brown">
                  Authentische Alpine Volksmusik
                </span>
              </div>
              
              <h1 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-folk-darkBrown">
                Erleben Sie die zeitlose Tradition der Volksmusik
              </h1>
              
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700">
                Eine harmonische Mischung aus traditionellen Melodien und Bergrhythmen, die unser kulturelles Erbe zelebrieren. Mit Instrumenten wie Ziehharmonika, Zither und Hackbrett bewahren wir die musikalischen Traditionen unserer Heimat.
              </p>
              
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                <a 
                  href="/events" 
                  className="rounded-md bg-folk-brown px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-white transition-colors hover:bg-folk-darkBrown"
                >
                  Unsere Auftritte
                </a>
                <button 
                  onClick={scrollToAbout}
                  className="flex items-center text-sm md:text-base rounded-md border border-folk-brown px-4 md:px-6 py-2 md:py-3 text-folk-brown transition-colors hover:bg-folk-brown/10"
                >
                  Mehr über uns
                </button>
              </div>
            </div>
            
            <div className="hidden md:flex justify-end">
              <div className="relative h-[350px] md:h-[400px] lg:h-[450px] w-[280px] md:w-[320px] lg:w-[350px] overflow-hidden rounded-xl border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80" 
                  alt="Volksmusikanten in Tracht" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-4 md:bottom-8 left-1/2 z-10 -translate-x-1/2 text-folk-brown transition-colors duration-300 hover:text-folk-darkBrown"
        aria-label="Zum Abschnitt 'Über uns' scrollen"
      >
        <ArrowDownCircle className="animate-bounce" size={isMobile ? 32 : 40} />
      </button>
    </section>
  );
};

export default Hero;
