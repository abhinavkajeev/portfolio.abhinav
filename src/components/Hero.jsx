import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import profilePic from "/sigma.c.jpeg";
import { useState, useEffect } from 'react';

const Hero = () => {
  const name = "ABHINAV KA";

  // Neon Text Animation Variants
  const neonTextVariants = {
    hidden: { 
      opacity: 0,
      textShadow: '0 0 0px rgba(0,255,255,0)',
      color: 'rgba(255,255,255,0.7)'
    },
    visible: (index) => ({
      opacity: [0.7, 1, 0.7],
      textShadow: [
        '0 0 5px rgba(255, 251, 0, 0.5)',
        '0 0 10px rgba(251, 255, 0, 0.7)',
        '0 0 20px rgb(246, 255, 0)',
        '0 0 30px rgb(242, 255, 0)',
        '0 0 5px rgba(255, 234, 0, 0.5)'
      ],
      color: [
        'rgba(255,255,255,0.7)',
        'rgb(255, 242, 0)',
        'rgba(255,255,255,0.9)'
      ],
      transition: {
        delay: index * 0.1,
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    })
  };

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const renderNeonText = (text) => {
    return (
      <motion.span
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {text.split('').map((char, index) => (
          <motion.span 
            key={index} 
            custom={index}
            variants={neonTextVariants}
            className="inline-block"
            style={{ 
              display: 'inline-block',
              willChange: 'transform, opacity, text-shadow',
              fontWeight: 'bold',
              mixBlendMode: 'screen'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 h-screen flex items-center text-white"
    >
      <div className="pl-0 md:pl-50 container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Mobile Profile Image - First on Mobile */}
        <motion.div
          className="md:hidden flex justify-center mb-8 pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-48 h-48 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <motion.div
              className="relative z-10"
            >
              <img
                src={profilePic}
                alt="Abhinav KA Profile"
                width={200}
                height={200}
                className="rounded-lg shadow-2xl animate-float"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-4 px-4 sm:px-0"
          >
            Hi, I'm <span className="yellow-500">
              {renderNeonText(name)}
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl mb-6 text-white/80 px-4 sm:px-0"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg mb-8 text-white/80 max-w-lg mx-auto md:mx-0 px-4 sm:px-0"
          >
            I build beautiful and responsive web applications with modern technologies.
            Let's work together to bring your ideas to life!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center md:justify-start gap-4 mb-8 px-4 sm:px-0"
          >
            <motion.a
              onClick={(e) => smoothScroll(e, 'projects')}
              href="#projects"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              onClick={(e) => smoothScroll(e, 'contact')}
              href="#contact"
              className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-3 px-6 rounded-full transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex justify-center md:justify-start gap-4 px-4 sm:px-0"
          >
            <motion.a
              href="https://github.com/abhinavkajeev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhinav-ka-a05ba1376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/abhinavka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Desktop Profile Image */}
        <motion.div
          className="hidden md:block text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <motion.div
              className="relative z-10 inline-block"
            >
              <img
                src={profilePic}
                alt="Abhinav KA Profile"
                width={400}
                height={400}
                className="rounded-full shadow-2xl animate-float"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;