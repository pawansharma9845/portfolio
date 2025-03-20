
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  technologies, 
  githubUrl, 
  liveUrl, 
  index 
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="rounded-xl overflow-hidden fancy-border h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-black bg-opacity-60 rounded-full hover:bg-purple transition-colors duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              <span className="text-sm hidden md:inline">Code</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-black bg-opacity-60 rounded-full hover:bg-purple transition-colors duration-300 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              <span className="text-sm hidden md:inline">Live</span>
            </a>
          )}
        </div>
      </div>
      
      <div className="glass p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-2">
          <Sparkles className="text-purple w-5 h-5 mr-2" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-sm px-3 py-1 bg-black bg-opacity-30 rounded-full flex items-center"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
