
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail,Facebook,Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 glass py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="text-xl font-bold">Portfolio</NavLink>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Pawan Sharma. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100071114891556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple transition-colors duration-300"
                aria-label="Facebok"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/pawan.sharma9845/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:pawan.sharma9845@gmail.com"
                className="text-gray-400 hover:text-purple transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="h-6 w-px bg-gray-700 hidden md:block"></div>
            
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `text-sm hover:text-purple transition-colors duration-300 ${isActive ? 'text-purple' : 'text-gray-400'}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/projects" 
                    className={({ isActive }) => 
                      `text-sm hover:text-purple transition-colors duration-300 ${isActive ? 'text-purple' : 'text-gray-400'}`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `text-sm hover:text-purple transition-colors duration-300 ${isActive ? 'text-purple' : 'text-gray-400'}`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
