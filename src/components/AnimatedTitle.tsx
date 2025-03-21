
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}

const AnimatedTitle = ({ title, subtitle, className = "", delay = 0 }: AnimatedTitleProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`${className}`}>
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: delay / 1000,
          ease: [0.19, 1.0, 0.22, 1.0]
        }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: (delay / 1000) + 0.2,
            ease: [0.19, 1.0, 0.22, 1.0]
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedTitle;
