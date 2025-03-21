
import { useEffect, useRef, useState } from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores with analytics and inventory tracking",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollTop = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
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
        } else {
          // Optional: Remove active class when element is out of viewport
          // reveal.classList.remove('active');
        }
      });
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
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple hover:text-purple-light underline"
          >
            Check out my GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
