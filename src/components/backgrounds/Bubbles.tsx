import React, { useEffect, useRef } from 'react';

interface BubbleBackgroundProps {
  bubbleCount?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  color?: string;
  opacity?: number;
}

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
  bubbleCount = 30,
  minSize = 10,
  maxSize = 60,
  minDuration = 10,
  maxDuration = 40,
  color = 'rgba(255, 0, 0)',
  opacity = 1,
}) => {
  const bubblesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBubbles = () => {
      if (!bubblesContainerRef.current) return;

      // Limpiar burbujas existentes
      bubblesContainerRef.current.innerHTML = '';
      bubblesContainerRef.current.style.position = 'absolute';
      bubblesContainerRef.current.style.zIndex = '-10';

      // Crear nuevas burbujas
      for (let i = 0; i < bubbleCount; i++) {
        createBubble();
      }
    };

    const createBubble = () => {
      if (!bubblesContainerRef.current) return;

      const bubble = document.createElement('div');
      
      // Valores aleatorios para las propiedades de la burbuja
      const size = Math.random() * (maxSize - minSize) + minSize;
      const left = Math.random() * 100;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 5;

      bubble.className = 'absolute z-0 rounded-full animate-rise';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}vw`;
      bubble.style.bottom = '-100px';
      bubble.style.backgroundColor = color;
      bubble.style.opacity = `${opacity}`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;

      bubble.addEventListener('animationiteration', () => {
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.bottom = '-100px';
      });

      bubblesContainerRef.current.appendChild(bubble);
    };

    createBubbles();

    return () => {
      if (bubblesContainerRef.current) {
        bubblesContainerRef.current.innerHTML = '';
      }
    };
  }, [bubbleCount, minSize, maxSize, minDuration, maxDuration, color, opacity]);

  return (
    <>
      <div 
        ref={bubblesContainerRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      />
      
      {/* Definición de la animación */}
      <style>{`
        @keyframes rise {
          0% {
            bottom: 0px;
            transform: translateX(0);
          }
          50% {
            transform: translateX(100px);
          }
          100% {
            bottom: 100%;
            transform: translateX(0);
          }
        }
        .animate-rise {
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
};

export default BubbleBackground;