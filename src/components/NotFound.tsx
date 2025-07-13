import { NavLink } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

function NotFound(){
  return (
    <section className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="h-12 w-12 text-white" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Página No Encontrada</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to={"/"}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Ir al Inicio
          </NavLink>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Regresar
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Necesitas ayuda?</h3>
          <p className="text-gray-600 mb-4">
            Puedes navegar a cualquiera de nuestras secciones principales:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: '/tecnicas', label: 'Técnicas' },
              { id: '/trabajos-realizados', label: 'Trabajos Realizados' },
              { id: '/como-trabajamos', label: 'Cómo Trabajamos' },
              { id: '/contacto', label: 'Contacto' }
            ].map((item) => (
              <NavLink
                to={item.id}
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
              >{item.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;