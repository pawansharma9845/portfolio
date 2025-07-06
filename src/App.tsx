import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Page transition component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reveal animations on page change
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      el.classList.remove('active');
      setTimeout(() => {
        el.classList.add('active');
      }, 100);
    });
  }, [location.pathname]);
  
  return <div className="page-transition">{children}</div>;
};

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <PageTransition>
          <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center">Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
