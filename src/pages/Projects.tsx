
import { useEffect } from 'react';
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
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile application to track workouts, nutrition, and progress towards fitness goals",
    imageUrl: "https://images.unsplash.com/photo-1591311599627-b93806d23e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Social Media Platform",
    description: "A feature-rich social media platform with real-time messaging and content sharing",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Next.js", "Socket.io", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather App",
    description: "Location-based weather forecast application with interactive visualizations",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Personal Finance Tracker",
    description: "Budgeting and expense tracking application with visualization and financial insights",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with task assignments and progress tracking",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    technologies: ["React", "Redux", "Node.js"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < window.innerHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-gray-300 mb-4">Interested in more projects?</p>
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
