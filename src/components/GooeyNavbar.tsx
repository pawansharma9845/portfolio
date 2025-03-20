
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

interface GooeyNavbarProps {
  navLinks: NavItem[];
  closeMenu: () => void;
}

const GooeyNavbar = ({ navLinks, closeMenu }: GooeyNavbarProps) => {
  return (
    <div className="relative py-2">
      <div 
        className="absolute inset-0 blur-lg opacity-70 bg-purple rounded-full"
        style={{
          filter: "blur(8px)",
          transform: "scale(0.85)",
        }}
      />
      
      <nav className="relative flex justify-center items-center space-x-8 py-1">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120
            }}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${isActive ? "text-white" : "text-gray-200"} transition-colors hover:text-white`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default GooeyNavbar;
