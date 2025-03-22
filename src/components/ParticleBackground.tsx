
import Particles from './Particles';

const ParticleBackground = () => {
  return (
    <Particles 
      particleCount={150}
      particleSpread={15}
      speed={0.15}
      particleColors={['#9b87f5', '#8B5CF6', '#7E69AB']}
      moveParticlesOnHover={true}
      particleHoverFactor={0.5}
      alphaParticles={true}
      particleBaseSize={90}
      sizeRandomness={1.2}
      cameraDistance={25}
      className="particle-canvas absolute top-0 left-0 w-full h-full"
    />
  );
};

export default ParticleBackground;
