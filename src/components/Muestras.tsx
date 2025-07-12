import React from 'react';
import {  Baby, Venus, Mars } from 'lucide-react';

const Muestras: React.FC = () => {
  const categorias = [
    {
      title: 'Dama',
      icon: Venus,
      color_circle:'from-pink-400 to-purple-400',
      color_card:'from-pink-200 to-rose-300 ',
      items: [
        'Camisetas básicas y premium',
        'Blusas y tops',
        'Hoodies y sudaderas',
        'Vestidos casuales',
        'Ropa deportiva'
      ]
    },
    {
      title: 'Caballero',
      icon: Mars,
      color_circle:'from-blue-600 to-cyan-500',
      color_card:'from-cyan-200 to-blue-400/70 ',
      items: [
        'Camisetas polo y básicas',
        'Camisas casuales',
        'Hoodies y chaquetas',
        'Uniformes corporativos',
        'Ropa deportiva'
      ]
    },
    {
      title: 'Niños',
      icon: Baby,
      color_circle:'from-yellow-400 to-orange-400',
      color_card:'from-yellow-200 to-orange-400/80 ',
      items: [
        'Camisetas divertidas',
        'Ropa escolar',
        'Conjuntos deportivos',
        'Pijamas personalizadas',
        'Disfraces y temáticas'
      ]
    }
  ];

  const ejemplos = [
    {
      categoria: 'Corporativo',
      descripcion: 'Uniformes empresariales con logo',
      tecnica: 'Plastisol + Bordado',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      categoria: 'Deportivo',
      descripcion: 'Equipos deportivos personalizados',
      tecnica: 'Base Agua + HD',
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      categoria: 'Eventos',
      descripcion: 'Camisetas conmemorativas',
      tecnica: 'Foil + Glitter',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      categoria: 'Moda',
      descripcion: 'Diseños trendy y modernos',
      tecnica: 'Flock + Corte Vinil',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-700 to-cyan-500 bg-clip-text text-transparent">Muestra</span> de Nuestros <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Trabajos Anteriores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hemos trabajado con prendas para toda la familia, adaptándonos a cualquier estilo, cualquier ocasión y a la moda actual.
          </p>
        </div>

        {/* Categorías por edad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categorias.map((categoria, index) => {
            const IconComponent = categoria.icon;
            return (
              <div key={index} className={categoria.color_card+"bg-gradient-to-br  rounded-xl p-6 hover:shadow-2xl hover:scale-110 transition-shadow hover:transition-all duration-300"}>
                <div className="flex items-center mb-4">
                  <div className={ categoria.color_circle+" w-12 h-12 bg-gradient-to-r rounded-full flex items-center justify-center mr-4"}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{categoria.title}</h3>
                </div>
                <ul className="space-y-2">
                  {categoria.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Ejemplos de trabajos */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Ejemplos de Nuestros Trabajos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ejemplos.map((ejemplo, index) => (
              <div key={index} className="border-2 border-t-purple-500 border-s-blue-700 border-b-sky-400 border-r-pink-500 rounded-lg hover:scale-102 hover:border-3 bg-white p-6 shadow-md hover:shadow-2xl hover:drop-shadow-current transition-shadow hover:transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${ejemplo.color}`}>
                  {ejemplo.categoria}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{ejemplo.descripcion}</h4>
                <p className="text-sm text-gray-600">Técnica: {ejemplo.tecnica}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galería placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Galería de Trabajos Realizados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12].map((item) => (
              <div key={item} className="hover:scale-110 aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center hover:from-blue-100 hover:to-cyan-100 transition-colors duration-300 cursor-pointer">
                <span className="text-gray-500 font-medium">Muestra {item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            ¿Quieres ver más ejemplos? Contáctanos para ver nuestro portafolio completo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Muestras;