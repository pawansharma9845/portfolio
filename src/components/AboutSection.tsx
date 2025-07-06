
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin,Facebook, Instagram,Mail, Code, Terminal, Layers, Server, Cpu, Feather,Sparkles } from 'lucide-react';

const skills = [
  { name: "HTML", icon: <Code size={22} className="text-blue-400" /> },
  { name: "CSS", icon: <Terminal size={22} className="text-blue-500" /> },
  { name: "JavaScript", icon: <Layers size={22} className="text-yellow-400" /> },
  { name: "Typescript", icon: <Server size={22} className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <Feather size={22} className="text-cyan-400" /> },
  { name: "React", icon: <Cpu size={22} className="text-gray-300" /> }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollDirectionRef = useRef<'down' | 'up'>('down');
  const lastScrollTop = useRef<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        scrollDirectionRef.current = 'down';
      } else {
        scrollDirectionRef.current = 'up';
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Add scroll direction class
          if (scrollDirectionRef.current === 'up') {
            entry.target.classList.add('reverse-animate');
          } else {
            entry.target.classList.remove('reverse-animate');
          }
        }
      });
    }, {
      threshold: 0.1
    });
    
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach(item => observer.observe(item));
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (reveals) {
        reveals.forEach(item => observer.unobserve(item));
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <motion.p 
              className="text-purple mb-3 reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Hello! I'm
            </motion.p>
            <motion.h2 
              className="text-4xl font-bold mb-6 reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Pawan Sharma
            </motion.h2>
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-gray-300 reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              IT Student & Developer
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8 reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm a 20-year-old IT student from Bharatpur-4, Chitwan, Nepal. I specialize in building modern, responsive web applications.
            </motion.p>
            
            <motion.div 
              className="flex space-x-5 reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.facebook.com/profile.php?id=100071114891556" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/pawan.sharma9845/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="mailto:pawan.sharma9845@gmail.com" 
                className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-6 reveal flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Skills 
              <motion.span 
                className="ml-2 text-purple" 
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Sparkles size={18} />
              </motion.span>
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="fancy-border glass p-4 rounded-lg flex items-center reveal" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center bg-purple bg-opacity-20 rounded-md mr-3"
                    whileHover={{ 
                      backgroundColor: "rgba(139, 92, 246, 0.8)",
                      color: "white",
                      rotate: 5
                    }}
                  >
                    <span className="text-lg font-bold">{skill.icon}</span>
                  </motion.div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
