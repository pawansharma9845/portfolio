
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
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

const Index = () => {
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
          
          // Add scroll direction class
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
    <div className="pt-28">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="mb-4 inline-block">
            <motion.div 
              className="text-purple text-lg inline-block py-1 px-3 glass rounded-full mb-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] hover:bg-purple hover:text-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Hello, I'm Pawan Sharma
            </motion.div>
          </div>
          
          <AnimatedTitle 
            title="Tech Enthuaiast" 
            subtitle="Seamless digital experiences through modern frontend development"
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
              className="px-6 py-3 bg-purple hover:bg-purple-light text-white rounded-lg transition-all duration-300 flex items-center hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:translate-y-[-3px]"
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-700 hover:border-purple text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:translate-y-[-3px]"
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
              <motion.p 
                className="text-purple mb-2 reveal"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                My work
              </motion.p>
              <motion.h2 
                className="text-3xl font-bold reveal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Featured Project
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/projects" 
                className="text-purple hover:text-purple-light transition-all duration-300 flex items-center reveal icon-glow hover:translate-x-1"
              >
                View Details
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto">
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
