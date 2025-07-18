import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa6';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por intentar contactarte!, Te llevaremos a nuestro WhatsApp para que puedas detallarnos más sobre tu proyecto.');
    window.location.href = `https://wa.me/+5215548583702?text=${encodeURIComponent(`Hola, necesito que me pueda ayudar con un proyecto de serigrafía. Aquí están mis datos:\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nServicio de interés: ${formData.servicio}\nMensaje: ${formData.mensaje}`)}`;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+55 4858 3702',
      link: 'tel:+525548583702',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'seriestampa2dany@outlook.com',
      link: 'mailto:seriestampa2dany@outlook.com',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      info: 'Calle Hidalgo 4 54417 Villa Nicolás Romero, Mexico',
      link: 'https://maps.app.goo.gl/ETr5hjp7coWpHhXw5',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Clock,
      title: 'Horario',
      info: 'Lun - Sáb: 9:00 a.m. - 05:00 p.m. ',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos y te ayudaremos a hacerlo realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <a href={item.link} target={item.title==='Dirección'?'_blank':'_self'} className="text-gray-600 whitespace-pre-line">{item.info}</a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mapa placeholder */}
            <div className="mt-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-600">Mapa de ubicación</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés:
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="plastisol">Plastisol</option>
                    <option value="base-agua">Base Agua</option>
                    <option value="foil">Foil</option>
                    <option value="flock">Flock</option>
                    <option value="hd">HD (High Definition)</option>
                    <option value="glitter">Glitter</option>
                    <option value="corte-vinil">Corte de Vinil</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto: tipo de prenda, cantidad, diseño, presupuesto aproximado, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                <FaWhatsapp className="h-8 w-8 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Call to action adicional */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas una cotización rápida?</h3>
          <p className="text-blue-100 mb-6">
            Llámanos directamente o envíanos un WhatsApp para recibir atención inmediata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+5215548583702" className="bg-white flex items-center text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              <FaPhone className="h-8 w-8 mr-2" />
              Llamar Ahora
            </a>
            <a href="https://wa.me/+5215548583702" className="bg-green-500 flex items-center text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp className="h-8 w-8 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;