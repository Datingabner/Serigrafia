import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ManchasPintura: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blotches = useRef<HTMLDivElement[]>([]);

  // Colores aleatorios para las manchas
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-orange-400",
  ];

  // Formas aleatorias para las manchas (valores de border-radius)
  const shapes = [
    "50% 50% 50% 50% / 60% 60% 40% 40%",
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "67% 33% 47% 53% / 37% 20% 80% 63%",
    "39% 61% 47% 53% / 30% 43% 57% 70%",
    "63% 37% 57% 43% / 28% 71% 29% 72%",
  ];

  useEffect(() => {
    const createBlotch = () => {
      if (!containerRef.current) return;

      // Crear elemento de mancha
      const blotch = document.createElement("div");
      blotch.className = "absolute opacity-0";

      // Tamaño aleatorio
      const size = Math.random() * 150 + 50; // Entre 50px y 200px

      // Posición horizontal aleatoria
      const left = Math.random() * 100;

      // Color y forma aleatorios
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      // Aplicar estilos
      blotch.style.width = `${size}px`;
      blotch.style.height = `${size}px`;
      blotch.style.left = `${left}%`;
      blotch.style.top = `-${size}px`;
      blotch.style.borderRadius = shape;
      blotch.classList.add(color);

      // Agregar al DOM
      containerRef.current.appendChild(blotch);
      blotches.current.push(blotch);

      // Animación con GSAP
      gsap.to(blotch, {
        opacity: 0.4,
        duration: 0.2, // Aparece rápidamente
        ease: "power1.out",
        y: size * 4, // Se mueve hacia abajo
        onComplete: () => {
          // Desvanecimiento lento
          gsap.to(blotch, {
            opacity: 0,
            duration: Math.random() * 3 + 2, // Entre 2 y 5 segundos
            y: `+=${Math.random() * 100 + 50}`, // Sigue cayendo
            ease: "power1.in",
            onComplete: () => {
              // Eliminar del DOM cuando termine la animación
              blotch.remove();
              blotches.current = blotches.current.filter(b => b !== blotch);
            }
          });
        }
      });
    };

    // Crear manchas periódicamente
    const interval = setInterval(createBlotch, 1000);

    // Limpieza
    return () => {
      clearInterval(interval);
      blotches.current.forEach(blotch => blotch.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="contents inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    />
  );
};

export default ManchasPintura;