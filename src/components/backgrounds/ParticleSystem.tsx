import React, { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'normal' | 'fast';
  colors?: string[];
  enabled?: boolean;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 20,
  intensity = 'medium',
  speed = 'normal',
  colors = ['bg-blue-400', 'bg-cyan-400', 'bg-purple-400', 'bg-pink-400'],
  enabled = true,
  className = ''
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const speedMultiplier = useMemo(() => {
    switch (speed) {
      case 'slow': return 0.5;
      case 'fast': return 2;
      default: return 1;
    }
  }, [speed]);

  const intensityMultiplier = useMemo(() => {
    switch (intensity) {
      case 'low': return 0.5;
      case 'high': return 1.5;
      default: return 1;
    }
  }, [intensity]);

  // Initialize particles
  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    const initialParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.1,
      speedX: (Math.random() - 0.5) * 2 * speedMultiplier,
      speedY: (Math.random() - 0.5) * 2 * speedMultiplier,
      life: Math.random() * 100
    }));

    setParticles(initialParticles);
  }, [particleCount, colors, speedMultiplier, enabled, prefersReducedMotion]);

  // Animate particles
  useEffect(() => {
    if (!enabled || prefersReducedMotion || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX * intensityMultiplier;
          let newY = particle.y + particle.speedY * intensityMultiplier;
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newSpeedX = -newSpeedX;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newSpeedY = -newSpeedY;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Update life and opacity
          const newLife = particle.life + 1;
          const newOpacity = Math.sin(newLife * 0.02) * 0.3 + 0.3;

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            life: newLife,
            opacity: Math.max(0.1, Math.min(0.6, newOpacity))
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length, intensityMultiplier, enabled, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/50 to-purple-50/50 ${className}`}>
        {/* Static fallback pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-pink-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/30 to-purple-50/30 animate-pulse duration-[6000ms]" />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} transition-all duration-100 ease-linear`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) scale(${Math.sin(particle.life * 0.05) * 0.3 + 0.7})`
          }}
        />
      ))}
      
      {/* Additional gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent animate-pulse duration-[4000ms]" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-100/10 to-transparent animate-pulse duration-[5000ms] animation-delay-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-100/10 to-transparent animate-pulse duration-[6000ms] animation-delay-2000" />
    </div>
  );
};

export default ParticleSystem;