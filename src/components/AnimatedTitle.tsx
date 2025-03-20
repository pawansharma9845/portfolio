
import { useEffect, useState } from 'react';

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
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                   transition-all duration-1000 ease-out transform
                   ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {title}
      </h1>
      
      {subtitle && (
        <p 
          className={`text-lg md:text-xl text-gray-300 mt-4 max-w-2xl
                     transition-all duration-1000 delay-200 ease-out transform
                     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AnimatedTitle;
