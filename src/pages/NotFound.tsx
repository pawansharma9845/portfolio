
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1 
          className="text-9xl font-bold text-purple mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Page not found
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="px-6 py-3 bg-purple hover:bg-purple-light text-white rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            <Home size={18} className="mr-2" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
