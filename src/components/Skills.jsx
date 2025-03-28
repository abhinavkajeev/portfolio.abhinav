import { motion } from 'framer-motion';
import { Code, Monitor, Database, Server, Figma, Layers } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Monitor size={24} />,
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      items: ['Node.js', 'Express', 'REST API', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <Database size={24} />,
      items: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools',
      icon: <Figma size={24} />,
      items: ['Git', 'VS Code', 'Figma', 'Adobe XD', 'Webpack', 'Vite']
    },
    {
      category: 'Other',
      icon: <Layers size={24} />,
      items: ['Responsive Design', 'UI/UX', 'SEO', 'Performance Optimization']
    },
    {
      category: 'Languages',
      icon: <Code size={24} />,
      items: ['JavaScript', 'TypeScript', 'Python', 'C++']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // 0.7-second delay before child animations start
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} // 0.7-second delay to header
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-yellow-300 drop-shadow-lg">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-white/80 max-w-xl mx-auto">
            Here are the technologies and tools I've been working with to create modern web applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-70"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-yellow-400/20 text-yellow-300 group-hover:rotate-6 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-300">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm hover:bg-white/20 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;