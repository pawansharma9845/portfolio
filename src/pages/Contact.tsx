
import { useEffect, useState, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import AnimatedTitle from '../components/AnimatedTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollTop = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimer = useRef<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
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
          
          if (scrollDirection === 'up') {
            reveal.classList.add('reverse-animate');
          } else {
            reveal.classList.remove('reverse-animate');
          }
        }
      });
      
      // Clear any existing timer
      if (scrollTimer.current !== null) {
        window.clearTimeout(scrollTimer.current);
      }
      
      // Set a longer timeout to prevent rapid animation changes
      scrollTimer.current = window.setTimeout(() => {
        isScrolling.current = false;
        scrollTimer.current = null;
      }, 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current !== null) {
        window.clearTimeout(scrollTimer.current);
      }
    };
  }, [scrollDirection]);
  
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple mb-2 reveal">Let's talk</p>
          <AnimatedTitle 
            title="Contact" 
            subtitle="Have a question or a project in mind? Feel free to reach out."
            className="mx-auto max-w-3xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          
          <div className="order-1 md:order-2">
            <div className="glass rounded-xl p-6 md:p-8 fancy-border h-full">
              <h3 className="text-2xl font-semibold mb-6 reveal">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start reveal">
                  <div className="bg-purple bg-opacity-20 p-3 rounded-lg mr-4">
                    <Mail className="text-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-1">Email</h4>
                    <a 
                      href="mailto:info@example.com" 
                      className="text-purple hover:text-purple-light transition-colors duration-300"
                    >
                      pawan.sharma9845@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start reveal">
                  <div className="bg-purple bg-opacity-20 p-3 rounded-lg mr-4">
                    <Phone className="text-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-1">Phone</h4>
                    <a 
                      href="tel:+977-9845000000" 
                      className="text-purple hover:text-purple-light transition-colors duration-300"
                    >
                      +977-9845210490
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start reveal">
                  <div className="bg-purple bg-opacity-20 p-3 rounded-lg mr-4">
                    <MapPin className="text-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-1">Location</h4>
                    <p>Bharatpur-4, Chitwan Nepal</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 reveal">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">

                  <a 
                    href="#" 
                    className="p-3 border border-gray-700 rounded-full hover:border-purple hover:text-purple transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 border border-gray-700 rounded-full hover:border-purple hover:text-purple transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
