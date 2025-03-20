
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const skills = [
  { name: "React", icon: "⚛️" }, 
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Next.js", icon: "▲" }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach(item => observer.observe(item));
    }
    
    return () => {
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
            <p className="text-purple mb-3 reveal">Hello! I'm</p>
            <h2 className="text-4xl font-bold mb-6 reveal">Pawan Sharma</h2>
            <h3 className="text-2xl font-semibold mb-6 text-gray-300 reveal">IT Student & Developer</h3>
            
            <p className="text-gray-300 mb-8 reveal">
              I'm a 20-year-old IT student from Bharatpur-4, Chitwan, Nepal. 
              I specialize in building modern, responsive web applications with React and TypeScript.
              With a passion for clean code and user experience, I create digital solutions that make a difference.
            </p>
            
            <div className="flex space-x-5 reveal">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@example.com"
                 className="p-3 rounded-full border border-gray-700 hover:border-purple hover:text-purple transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 reveal">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="fancy-border glass p-4 rounded-lg flex items-center reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-md mr-3">
                    <span className="text-lg font-bold">{skill.icon}</span>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
