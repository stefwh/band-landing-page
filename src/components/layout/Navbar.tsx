
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Veranstaltungen', path: '/events' },
    { name: 'Kontakt', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 bg-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="folk-container">
        <nav className="flex items-center justify-between py-3 md:py-4">
          <Link 
            to="/" 
            className="relative z-10 flex items-center font-serif text-xl sm:text-2xl font-bold text-folk-darkBrown transition-all"
            onClick={closeMobileMenu}
          >
            <Music className="mr-1 sm:mr-2 h-5 w-5 sm:h-6 sm:w-6 text-folk-brown" />
            Volksmusik
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium text-sm lg:text-base transition-all hover:text-folk-brown 
                  ${isActive(link.path) 
                    ? 'text-folk-brown after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-folk-brown' 
                    : 'text-gray-700'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-1.5 sm:p-2 text-folk-darkBrown" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X size={isMobile ? 20 : 24} /> : <Menu size={isMobile ? 20 : 24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transform bg-white bg-opacity-98 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="folk-container py-16 sm:py-20">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={`text-lg sm:text-xl font-medium transition-colors hover:text-folk-brown
                  ${isActive(link.path) ? 'text-folk-brown' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
