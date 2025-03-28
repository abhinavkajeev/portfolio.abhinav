import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Enhanced smooth scrolling function with mobile optimization
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    
    if (targetSection) {
      // Use more reliable scrolling method
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      setIsOpen(false);

      // Additional mobile scroll handling
      // Slight delay to ensure menu closes before scrolling
      setTimeout(() => {
        // Fallback for browsers with inconsistent smooth scroll support
        if (window.innerWidth <= 768) {
          const yOffset = -60; // Adjust based on your navbar height
          const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <div className="fixed w-full z-50 top-7 flex justify-center">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Portfolio Section - Unchanged */}
        <motion.a 
          href="#hero" 
          onClick={(e) => handleScrollToSection(e, '#hero')}
          className="text-2xl font-bold font-heading text-black dark:text-white px-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Abhinav
        </motion.a>

        {/* Desktop Navigation - Original Design */}
        <motion.div 
          className={`absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-10 rounded-full px-8 py-3 ${
            scrolled 
              ? 'bg-black/10 backdrop-blur-md' 
              : 'bg-white/10 backdrop-blur-sm'
          } transition-all duration-300`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all duration-300 text-lg font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white/90 dark:bg-black/90 py-4 rounded-b-2xl absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-black dark:text-white opacity-70 hover:opacity-100 py-2 transition-all duration-300 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;