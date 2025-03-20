
import { useEffect, useRef } from 'react';
import { Code2, Database, Server, Terminal } from 'lucide-react';

const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Vue.js", "Angular", "HTML/CSS", "JavaScript", "TypeScript"],
    icon: <Code2 className="text-purple w-6 h-6" />
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "Ruby on Rails"],
    icon: <Server className="text-purple w-6 h-6" />
  },
  { 
    category: "Database", 
    items: ["MySQL"],
    icon: <Database className="text-purple w-6 h-6" />
  },
  { 
    category: "DevOps", 
    items: ["AWS", "CI/CD", "Git", "Linux"],
    icon: <Terminal className="text-purple w-6 h-6" />
  }
];

const SkillsSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 reveal">What I do?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={skillGroup.category} className="reveal" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
              <div className="glass rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold ml-2 text-purple">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
