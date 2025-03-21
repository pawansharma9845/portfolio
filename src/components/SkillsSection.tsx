
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sigma, 
  Braces, 
  Server, 
  Cpu, 
  Database, 
  Terminal, 
  Code2
} from 'lucide-react';

// Updated skills with cool icon components and fewer items
const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Vue.js", "Angular", "HTML/CSS", "JavaScript", "TypeScript"],
    icon: (props: any) => (
      <div className="flex items-center justify-center w-12 h-12 bg-purple bg-opacity-20 rounded-lg p-3 transition-all duration-300 group-hover:bg-purple">
        <Braces className="w-full h-full text-purple group-hover:text-white" {...props} />
      </div>
    )
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "Ruby on Rails"],
    icon: (props: any) => (
      <div className="flex items-center justify-center w-12 h-12 bg-purple bg-opacity-20 rounded-lg p-3 transition-all duration-300 group-hover:bg-purple">
        <Server className="w-full h-full text-purple group-hover:text-white" {...props} />
      </div>
    )
  },
  { 
    category: "Database", 
    items: ["MySQL"],
    icon: (props: any) => (
      <div className="flex items-center justify-center w-12 h-12 bg-purple bg-opacity-20 rounded-lg p-3 transition-all duration-300 group-hover:bg-purple">
        <Database className="w-full h-full text-purple group-hover:text-white" {...props} />
      </div>
    )
  },
  { 
    category: "DevOps", 
    items: ["AWS", "CI/CD", "Git", "Linux"],
    icon: (props: any) => (
      <div className="flex items-center justify-center w-12 h-12 bg-purple bg-opacity-20 rounded-lg p-3 transition-all duration-300 group-hover:bg-purple">
        <Terminal className="w-full h-full text-purple group-hover:text-white" {...props} />
      </div>
    )
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useRef<'down' | 'up'>('down');
  const lastScrollTop = useRef<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setScrollDirection.current = 'down';
      } else {
        setScrollDirection.current = 'up';
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
      
      const reveals = sectionRef.current?.querySelectorAll('.reveal');
      if (reveals) {
        reveals.forEach(item => {
          const revealTop = item.getBoundingClientRect().top;
          const revealPoint = 150;
          
          if (revealTop < window.innerHeight - revealPoint) {
            item.classList.add('active');
            
            // Add custom animation class based on scroll direction
            if (setScrollDirection.current === 'up') {
              item.classList.add('reverse-animate');
            } else {
              item.classList.remove('reverse-animate');
            }
          } else {
            item.classList.remove('active');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add custom animation class based on scroll direction
            if (setScrollDirection.current === 'up') {
              entry.target.classList.add('reverse-animate');
            } else {
              entry.target.classList.remove('reverse-animate');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach(item => observer.observe(item));
    }
    
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (reveals) {
        reveals.forEach(item => observer.unobserve(item));
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          What I do?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={skillGroup.category} 
              className="reveal group" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
              whileHover={{ y: -10 }}
            >
              <div className="glass rounded-lg p-6 h-full border border-transparent hover:border-purple transition-all duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="flex items-start mb-6">
                  {skillGroup.icon({})}
                  <h3 className="text-xl font-semibold ml-3 text-purple pt-2">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-purple rounded-full mr-2"></span>
                      <span className="transition-transform duration-300 hover:translate-x-1 hover:text-purple-light">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
