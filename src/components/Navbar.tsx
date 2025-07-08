import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { type To } from "react-router-dom";

import logoSerigrafia from './../../public/Logo-Serigrafia.ico';

interface NavItem {
  id: string;
  path: To;
  label: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'inicio', path: '/', label: 'Inicio' },
    { id: 'tecnicas', path: '/tecnicas', label: 'Técnicas' },
    { id: 'muestras', path: '/muestras', label: 'Muestras' },
    { id: 'como-trabajamos', path: '/como-trabajamos', label: 'Cómo Trabajamos' },
    { id: 'contacto', path: '/contacto', label: 'Contacto' }
  ];

  // Función para manejar el estilo activo en desktop
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive 
      ? 'px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
      : 'px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  };

  // Función para manejar el estilo activo en mobile
  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? 'block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
      : 'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoSerigrafia} 
              alt="Logo Serigrafía" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Serigrafía Textil
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="ml-10 md:flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={getNavLinkClass}
                  end={item.path === '/'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={getMobileNavLinkClass}
                end={item.path === '/'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;