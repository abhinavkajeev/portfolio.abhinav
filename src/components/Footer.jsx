import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 text-white ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold font-heading text-yellow-300">Abhinav KA</h2>
            <p className="text-white/80 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/abhinavkajeev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhinav-ka-a05ba1376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-yellow-400 text-gray-900 rounded-full"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Abhinav KA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;