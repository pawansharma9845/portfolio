
import { useEffect, useState, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(155, 135, 245, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles
        connectParticles(index);
      });

      requestAnimationFrame(animate);
    };

    const connectParticles = (index: number) => {
      const currentParticle = particles[index];
      for (let i = index + 1; i < particles.length; i++) {
        const targetParticle = particles[i];
        const dist = Math.sqrt(
          Math.pow(currentParticle.x - targetParticle.x, 2) +
            Math.pow(currentParticle.y - targetParticle.y, 2)
        );

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(155, 135, 245, ${0.1 - dist / 1200})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(currentParticle.x, currentParticle.y);
          ctx.lineTo(targetParticle.x, targetParticle.y);
          ctx.stroke();
        }
      }
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas absolute top-0 left-0 w-full h-full"
      width={dimensions.width}
      height={dimensions.height}
    ></canvas>
  );
};

export default ParticleBackground;
