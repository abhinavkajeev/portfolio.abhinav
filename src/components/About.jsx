import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Award } from 'lucide-react';
import profilePic from "/sigma2.jpg";
import resume from "/abhinav-KA.pdf";


const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-yellow-300 drop-shadow-lg">
            About Me
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-97 md:h-100 md:mx-auto">
              <div className="w-full h-full rounded-lg bg-white/10 absolute -right-4 -bottom-4 group-hover:rotate-6 transition-transform duration-300"></div>
              <img 
                src={profilePic}
                alt="About Me" 
                className="w-full h-full object-cover rounded-lg relative z-10 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 font-heading text-yellow-300">
              Professional Web Developer
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto md:mx-0">
              I'm a passionate frontend developer with a strong focus on creating beautiful, 
              responsive, and user-friendly websites. With over X years of experience in web 
              development, I specialize in modern JavaScript frameworks like React.
            </p>
            <p className="text-white/80 mb-6 max-w-xl mx-auto md:mx-0">
              My goal is to build applications that not only look great but also provide 
              exceptional user experiences. I'm constantly learning new technologies and 
              techniques to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto md:mx-0">
              {[
                { icon: User, text: "Abhinav KA" },
                { icon: Calendar, text: "B-Tech 3rd year" },
                { icon: MapPin, text: "Anna Nagar" },
                { icon: Award, text: "Available for Work" }
              ].map(({ icon: Icon, text }, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/90 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <motion.a
                href={resume}
                

                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;