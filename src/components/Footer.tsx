import React from 'react';
import logoSerigrafia from './../assets/Logo-Serigrafia.ico';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook} from "react-icons/fa";
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

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
              <div className='flex space-x-1'>
                <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
              </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Seriestampa2" className="w-15 h-15 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook className="h-10 w-10" />
              </a>
              <a href="https://wa.me/+5215548583702" className="w-15 h-15 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-10 w-10" />
              </a>
              <a href="https://www.instagram.com/serigrafiatextilmx" target="_blank" rel="noopener noreferrer" className="w-15 h-15 bg-gradient-to-bl from-orange-600 to-purple-700 rounded-full flex items-center justify-center hover:bg-gradient-to-bl hover:from-orange-300 hover:to-purple-400 transition-colors duration-200 ">
                <FaInstagram className="h-10 w-10" />
              </a>
              <a href="https://www.tiktok.com/@serigrafia.textil.mx" target="_blank" rel="noopener noreferrer" className="w-15 h-15 bg-black rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200 ">
                <FaTiktok className="h-10 w-10" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Plastisol</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Base Agua</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Foil</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Flock</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">HD</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Glitter</NavLink></li>
              <li><NavLink to="/tecnicas" className="hover:text-cyan-400 transition-colors duration-200">Corte de Vinil</NavLink></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-cyan-400" />
                <a href="tel:+5215548583702" className="hover:text-cyan-400 transition-colors duration-200">+52 1 55 4858 37 02</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-2 text-cyan-400" />
                <a href="mailto:seriestampa2dany@outlook.com" className='hover:text-cyan-400 transition-colors duration-200'>seriestampa2dany@outlook.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-9 w-9 mr-2 text-cyan-400 mt-0.5" />
                <a href="https://maps.app.goo.gl/ETr5hjp7coWpHhXw5" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">Calle Hidalgo 4 Villa Nicolás Romero, Mexico CP 54417 </a>
              </div>
            </div>
            <br />
            <div className='space-y-2 items-center-safe'>
            <h3 className="text-lg font-semibold mb-2">¿Problemas en la pagina?</h3>
            <NavLink to={"/reportar-problemas"} className="pl-1 hover:text-cyan-400 text-sm transition-colors duration-200">
              Reportar Problemas
            </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Serigrafía Textil. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            
            <NavLink to={"/legal/politica-privacidad"} className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Política de Privacidad
            </NavLink>
            <NavLink to={"/legal/terminos-servicio"} className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Términos de Servicio
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;