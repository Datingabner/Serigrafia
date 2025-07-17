import React from 'react';

interface AnimatedGradientProps {
  children?: React.ReactNode;
  className?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  intensity?: number;
  speed?: number;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientProps> = ({
  children,
  className = '',
  colors = {},
  intensity = 0.5,
  speed = 3,
}) => {
  // Valores por defecto usando los colores que pediste
  const {
    primary = 'bg-blue-800',
    secondary = 'bg-sky-400',
    tertiary = 'bg-pink-500',
  } = colors;

  // Convertimos las clases de Tailwind a valores hex para el gradiente
  const getHexFromTw = (twClass: string) => {
    // Esta es una simplificación - en un proyecto real necesitarías un mapeo completo
    // o usar los valores directamente
    const colorsMap: Record<string, string> = {
      'bg-blue-800': '#1e40af',
      'bg-sky-400': '#38bdf8',
      'bg-pink-500': '#ec4899',
      'bg-purple-500': '#a855f7',
    };
    return colorsMap[twClass] || twClass;
  };

  const primaryHex = getHexFromTw(primary);
  const secondaryHex = getHexFromTw(secondary);
  const tertiaryHex = getHexFromTw(tertiary);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Capas animadas de fondo */}
      <div 
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(-60deg, ${primaryHex} 50%, ${secondaryHex} 50%)`,
          animation: `slide ${speed}s ease-in-out infinite alternate`,
          left: '-50%',
          right: '-50%',
        }}
      />
      <div 
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(-60deg, ${secondaryHex} 50%, ${tertiaryHex} 50%)`,
          animation: `slide ${speed + 1}s ease-in-out infinite alternate-reverse`,
          left: '-50%',
          right: '-50%',
        }}
      />
      <div 
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(-60deg, ${tertiaryHex} 50%, ${primaryHex} 50%)`,
          animation: `slide ${speed + 2}s ease-in-out infinite alternate`,
          left: '-50%',
          right: '-50%',
        }}
      />

      {/* Contenido */}
      <div className="relative w-full h-full">
        {children}
      </div>

      {/* Estilos CSS para la animación */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(25%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedGradientBackground;