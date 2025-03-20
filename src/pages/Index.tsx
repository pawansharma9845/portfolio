
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
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
  }
];

const Index = () => {
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
    <div className="pt-28">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="mb-4 inline-block">
            <motion.div 
              className="text-purple text-lg inline-block py-1 px-3 glass rounded-full mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm John Doe
            </motion.div>
          </div>
          
          <AnimatedTitle 
            title="Software Developer" 
            subtitle="Transforming ideas into interactive and seamless digital experiences with cutting-edge frontend development."
            className="mx-auto max-w-3xl"
            delay={100}
          />
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-purple hover:bg-purple-light text-white rounded-lg transition-colors duration-300 flex items-center"
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-700 hover:border-purple text-white rounded-lg transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-purple mb-2 reveal">My work</p>
              <h2 className="text-3xl font-bold reveal">Featured Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="text-purple hover:text-purple-light transition-colors duration-300 flex items-center reveal"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
