
import { useEffect, useRef, useState } from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: "Gramin Udham Adharshila",
    description: "Portfolio for a local startup converting banana fibre into sustainable products.",
    imageUrl: "/gramin.jpg",
    technologies: ["Html", "JavaScript", "CSS"],
    liveUrl: "https://www.graminudham.com.np"
  }
];

const Projects = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollTop = useRef(0);
  const isScrolling = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Prevent animation conflicts by setting a flag
      if (isScrolling.current) return;
      isScrolling.current = true;
      
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setScrollDirection('down');
      } else if (st < lastScrollTop.current) {
        setScrollDirection('up');
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
      
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < window.innerHeight - revealPoint) {
          reveal.classList.add('active');
          
          // Add scroll direction class for reverse animation
          if (scrollDirection === 'up') {
            reveal.classList.add('reverse-animate');
          } else {
            reveal.classList.remove('reverse-animate');
          }
        }
      });
      
      // Reset the scrolling flag after a short delay
      setTimeout(() => {
        isScrolling.current = false;
      }, 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);
  
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple mb-2 reveal">My work</p>
          <AnimatedTitle 
            title="Projects" 
            subtitle="Explore my recent work and the technologies I've been using to create modern web experiences."
            className="mx-auto max-w-3xl"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-gray-300 mb-4">More projects coming soon!</p>

        </div>
      </div>
    </div>
  );
};

export default Projects;
