import React from 'react';
import { MessageCircle, Palette, Cog, Truck, CheckCircle } from 'lucide-react';

const ComoTrabajamos: React.FC = () => {
  const pasos = [
    {
      numero: '01',
      titulo: 'Consulta Inicial',
      descripcion: 'Nos cuentas tu idea, cantidad de prendas, diseño y presupuesto. Te asesoramos sobre la mejor técnica.',
      icon: MessageCircle,
      color: 'from-blue-600 to-blue-700'
    },
    {
      numero: '02',
      titulo: 'Diseño y Cotización',
      descripcion: 'Creamos o adaptamos tu diseño y te enviamos una cotización detallada sin compromiso.',
      icon: Palette,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      numero: '03',
      titulo: 'Producción',
      descripcion: 'Una vez aprobado, iniciamos la producción con los más altos estándares de calidad.',
      icon: Cog,
      color: 'from-purple-600 to-purple-700'
    },
    {
      numero: '04',
      titulo: 'Entrega',
      descripcion: 'Empacamos cuidadosamente tu pedido y coordinamos la entrega en tiempo y forma.',
      icon: Truck,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const ventajas = [
    'Asesoría personalizada en cada proyecto',
    'Materiales de primera calidad',
    'Tiempos de entrega garantizados',
    'Precios competitivos por volumen',
    'Servicio post-venta incluido',
    'Muestras gratuitas disponibles'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Trabajamos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso está diseñado para garantizar resultados excepcionales y una experiencia sin complicaciones
          </p>
        </div>

        {/* Proceso paso a paso */}
        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-96 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {pasos.map((paso, index) => {
              const IconComponent = paso.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${paso.color} rounded-full flex items-center justify-center mr-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${paso.color} bg-clip-text text-transparent`}>
                          {paso.numero}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{paso.titulo}</h3>
                      <p className="text-gray-600 leading-relaxed">{paso.descripcion}</p>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-2/12 flex justify-center my-6 lg:my-0">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-100">
                      <div className={`w-8 h-8 bg-gradient-to-r ${paso.color} rounded-full`}></div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ventajas */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{ventaja}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar tu proyecto?</h3>
          <p className="text-gray-600 mb-6">Contáctanos hoy mismo y recibe una cotización personalizada</p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Solicitar Cotización Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajamos;