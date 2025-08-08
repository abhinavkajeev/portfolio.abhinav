import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import don1 from "/don1.jpg";
import don2 from "/don2.jpg";
import don3 from "/don3.jpg";
import don4 from "/don4.png";
import don5 from "/don5.webp";
import don6 from "/don6.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'react', 'javascript', 'tailwind'];
  
  const projects = [
    {
      id: 1,
      title: ' real-time collaborative coding platform',
      description: 'CodeSync Pro delivers seamless real-time synchronization, instant Python execution with just a click, and a professional IDE experience featuring syntax highlighting and auto-completion.',
      image: don1,
      tags: [ 'react', 'javascript', 'tailwind', 'Express.js'],
      demo: 'https://example.com',
      github: 'https://github.com/abhinavkajeev/real-time-coder',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with Tailwind CSS and Framer Motion animations.',
      image: don2,
      tags: ['web', 'react', 'tailwind'],
      demo: 'https://example.com',
      github: 'https://github.com/abhinavkajeev/portfolio.abhinav',
    },
    {
      id: 3,
      title: 'InterviewAI',
      description: 'I-powered platform designed to revolutionize interview preparation and boost career success. It offers Mock Interviews with realistic scenarios Performance Analytics for tracking progress AI Coaching for personalized improvement tips',
      image: don3,
      tags: ['web', 'react', 'javascript', 'tailwind', 'Express.js', 'Mongo.db'],
      demo: 'https://hackathon-ck-7eu7.vercel.app/',
      github: 'https://github.com/abhinavkajeev/hackathon-ck',
    },
    {
      id: 4,
      title: 'GoGenie',
      description: 'an AI Travel Companion designed to shape your dream vacations with personalized itineraries by leveraging React.js and JavaScript for dynamic interactions, Tailwind CSS for a clean, responsive design, and Framer Motion to infuse smooth animations for a truly cutting-edge user experience.',
      image: don4,
      tags: ['web', 'javascript', 'tailwind', 'react' ],
      demo: 'https://ai-itinerary-plum.vercel.app/',
      github: 'https://github.com/abhinavkajeev/AI-Itinerary',
    },
    {
      id: 5,
      title: 'Chandrika Bakery',
      description: 'This project was a delightful deep dive into crafting a visually appealing and user-friendly online presence. I meticulously used HTML to structure every element, applied CSS to ensure a beautiful and responsive design, and integrated JavaScript to add subtle, enhancing interactivity that makes Browse a pleasure.',
      image: don5,
      tags: ['web', 'react', 'javascript', 'tailwind'],
      demo: 'https://abhinavkajeev.github.io/Chandrikabakery/',
      github: 'https://github.com/abhinavkajeev/Chandrikabakery',
    },
    {
      id: 6,
      title: 'Learn-X',
      description: 'Learn-X Online learning platform with React and mango db.',
      image: don6,
      tags: ['Mongo.db', 'react', 'javascript'],
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/project6',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section 
      id="projects" 
      className="py-12 text-white flex justify-center"
    >
      <div className="container max-w-5xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-yellow-300 drop-shadow-lg">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-white/80 max-w-xl mx-auto text-sm">
            Here are some of my recent projects. Take a look at what I've been working on!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full capitalize text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/10 rounded-lg overflow-hidden group border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-yellow-400 text-gray-900 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-yellow-400 text-gray-900 rounded-full"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-yellow-300">{project.title}</h3>
                <p className="text-white/80 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;