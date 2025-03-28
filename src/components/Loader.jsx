import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.div
          className="flex space-x-4 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-5 h-5 bg-yellow-400 rounded-full"
              animate={{
                y: ["0%", "-100%", "0%"],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-heading text-yellow-300 drop-shadow-lg">
            Portfolio
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Loading amazing stuff...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;