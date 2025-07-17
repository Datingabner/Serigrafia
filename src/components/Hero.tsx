import React from 'react';
import { Shirt, Palette, Star } from 'lucide-react';
import ManchasPintura from './backgrounds/ManchasPintura';
import { NavLink } from 'react-router-dom';
const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
        <ManchasPintura/>

      <div className="mt-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Serigrafía Textil
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-4xl">
              Profesional
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Estampado de alta calidad en prendas de vestir para dama, caballero y niños.
            Cualquier moda, estilo, diseño o dibujo con las mejores técnicas del mercado.
            Y para cualquier tipo de publicidad como gorras, bolsas, tazas, etc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <NavLink to={"/tecnicas"} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Ver Nuestras Técnicas
            </NavLink>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
              Solicitar Cotización
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <NavLink to={"/tecnicas#prendas"} className="bg-white/40 p-6 rounded-xl shadow-lg not-md-card card-md">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-8 w-8 text-white" />
              </div>
              <h3 className=" text-xl font-semibold text-gray-900 mb-2">Todas las Prendas</h3>
              <p className="text-gray-600">Estampamos en cualquier tipo de prenda: camisetas, uniformes, gorras y más</p>
            </NavLink>

            <NavLink to={"/tecnicas#tecnicas"} className="bg-white/40 p-6 rounded-xl shadow-lg not-md-card card-md">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Múltiples Técnicas</h3>
              <p className="text-gray-600">Plastisol, base agua, foil, flock, HD, glitter y corte de vinil</p>
            </NavLink>

            <div className=" bg-white/40 p-6 rounded-xl shadow-lg not-md-card card-md">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Materiales de primera calidad y acabados profesionales garantizados</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Hero;