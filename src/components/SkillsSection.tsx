
import { useEffect, useRef } from 'react';

const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "Angular", "HTML/CSS", "JavaScript", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "Django", "Ruby on Rails"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"] }
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={skillGroup.category} className="reveal" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
              <div className="glass rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 text-purple">{skillGroup.category}</h3>
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
          
          <div className="md:col-span-2 lg:col-span-1 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4 text-purple">UI/UX Design</h3>
              <p className="mb-4 text-gray-300">
                Creating user-centered designs with a focus on usability and aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-black bg-opacity-30 p-2 rounded text-center">Figma</div>
                <div className="bg-black bg-opacity-30 p-2 rounded text-center">Adobe XD</div>
                <div className="bg-black bg-opacity-30 p-2 rounded text-center">Photoshop</div>
                <div className="bg-black bg-opacity-30 p-2 rounded text-center">Prototyping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
