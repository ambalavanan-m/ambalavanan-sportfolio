import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-bg/90  backdrop-blur-md border-b border-slate-200  py-4 shadow-sm'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all border-2 border-primary">
              <img src="/profile.webp" alt="Ambalavanan profile" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-slate-800  group-hover:text-primary  transition-colors font-display">
              Ambalavanan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 text-sm tracking-wide relative ${isActive
                    ? 'text-primary '
                    : 'text-slate-600  hover:text-primary '
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-slate-800  focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden flex justify-end ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={handleOverlayClick}
      >
        <div
          className={`w-full max-w-xs h-full bg-white  shadow-2xl flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 p-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium transition-colors ${isActive
                  ? 'text-primary '
                  : 'text-slate-800  hover:text-primary '
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-4 bg-primary text-white font-bold rounded-xl shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
