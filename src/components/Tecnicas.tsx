import React from 'react';
import { Droplets, Sparkles, Scissors, Layers, Zap, Gem, Paintbrush } from 'lucide-react';

const Tecnicas: React.FC = () => {
  const tecnicas = [
    {
      name: 'Plastisol',
      description: 'Técnica tradicional con excelente durabilidad y colores vibrantes. Ideal para diseños con colores sólidos.',
      icon: Paintbrush,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Base Agua',
      description: 'Estampado ecológico con tacto suave. Perfecto para prendas de algodón y diseños detallados.',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Foil',
      description: 'Acabado metálico brillante que aporta elegancia y sofisticación a cualquier diseño.',
      icon: Sparkles,
      color: 'from-purple-600 to-purple-700'
    },
    {
      name: 'Flock',
      description: 'Textura aterciopelada que crea un efecto táctil único y llamativo en tus prendas.',
      icon: Layers,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'HD (High Definition)',
      description: 'Estampado de alta definición para diseños complejos con detalles precisos y colores nítidos.',
      icon: Zap,
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      name: 'Glitter',
      description: 'Efecto brillante y llamativo que hace que tus diseños destaquen con un toque de glamour.',
      icon: Gem,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Corte de Vinil',
      description: 'Técnica precisa para diseños con formas definidas y colores sólidos de larga duración.',
      icon: Scissors,
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos las mejores técnicas de estampado para garantizar resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tecnicas.map((tecnica, index) => {
            const IconComponent = tecnica.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tecnica.color} rounded-full flex items-center justify-center mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tecnica.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tecnica.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No sabes cuál técnica elegir?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos te ayudará a seleccionar la técnica perfecta según tu diseño, presupuesto y tipo de prenda.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200">
              Consultar con un Experto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnicas;