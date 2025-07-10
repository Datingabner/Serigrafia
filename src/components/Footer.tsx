import React from 'react';
import logoSerigrafia from './../../public/Logo-Serigrafia.ico';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white z-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoSerigrafia}
                alt="Logo Serigrafía" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Serigrafía Textil
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en estampado textil con más de 10 años de experiencia. 
              Ofrecemos calidad premium y servicio personalizado para cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Plastisol</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Base Agua</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Foil</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Flock</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">HD</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Glitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Corte de Vinil</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                <span>+52 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                <span>info@serigrafia.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-cyan-400 mt-0.5" />
                <span>Av. Principal 123<br />Ciudad, CP 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Serigrafía Textil. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;