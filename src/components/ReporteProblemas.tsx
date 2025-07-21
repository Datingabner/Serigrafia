import React, { useState } from 'react';
import { AlertTriangle, Send, Info } from 'lucide-react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import {  } from 'react-icons/fa';

const ReporteProblemas: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProblema: '',
    descripcion: '',
    url: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  // Número de WhatsApp (reemplaza con el número real)
  const whatsappNumber = '+5215548583702';

  const tiposProblema = [
    { value: '', label: 'Selecciona el tipo de problema' },
    { value: 'error-tecnico', label: 'Error técnico' },
    { value: 'problema-navegacion', label: 'Problema de navegación' },
    { value: 'contenido-incorrecto', label: 'Contenido incorrecto' },
    { value: 'sugerencia', label: 'Sugerencia' },
    { value: 'error-grafico', label: 'Error visual' },
    { value: 'rendimiento-deficiente', label: 'Tarda mucho en cargar el contenido' },
    { value: 'otro', label: 'Otro' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { nombre, email, tipoProblema, descripcion } = formData;
    
    if (!nombre.trim()) {
      alert('Por favor, ingresa tu nombre');
      return false;
    }
    
    if (!email.trim() || !email.includes('@')) {
      alert('Por favor, ingresa un email válido');
      return false;
    }
    
    if (!tipoProblema) {
      alert('Por favor, selecciona el tipo de problema');
      return false;
    }
    
    if (!descripcion.trim()) {
      alert('Por favor, describe el problema');
      return false;
    }
    
    return true;
  };

  const formatWhatsAppMessage = () => {
    const tipoLabel = tiposProblema.find(tipo => tipo.value === formData.tipoProblema)?.label || formData.tipoProblema;
    
    return `🔧 *REPORTE DE PROBLEMA*

👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
🏷️ *Tipo:* ${tipoLabel}
📍 *URL:* ${formData.url || 'No especificada'}

📝 *Descripción:*
${formData.descripcion}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setShowConfirmation(true);
  };

  const confirmSend = () => {
    const message = formatWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      tipoProblema: '',
      descripcion: '',
      url: ''
    });
    
    setShowConfirmation(false);
    
    // Mostrar mensaje de éxito
    alert('¡Gracias! Te hemos redirigido a WhatsApp para enviar tu reporte.');
  };

  const cancelSend = () => {
    setShowConfirmation(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Reportar Problema
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Encontraste algún problema en nuestro sitio web? Ayúdanos a mejorarlo reportándolo aquí
          </p>
        </div>

        {/* Instrucciones */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Instrucciones</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Completa todos los campos obligatorios marcados con *</li>
                <li>• Describe el problema de manera detallada para ayudarnos a resolverlo</li>
                <li>• Al enviar, serás redirigido a WhatsApp para completar el reporte</li>
                <li>• Nuestro equipo técnico revisará tu reporte y te contactará pronto</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
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
                  Email de Contacto *
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
                <label htmlFor="tipoProblema" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Problema *
                </label>
                <select
                  id="tipoProblema"
                  name="tipoProblema"
                  required
                  value={formData.tipoProblema}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  {tiposProblema.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                  URL donde ocurrió el problema (opcional)
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="https://ejemplo.com/pagina"
                />
              </div>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                Descripción Detallada del Problema *
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                required
                rows={6}
                value={formData.descripcion}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Describe el problema de manera detallada: ¿Qué estabas haciendo? ¿Qué esperabas que pasara? ¿Qué pasó en su lugar? ¿En qué navegador/dispositivo ocurrió?"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-500 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center"
              >
                <FaWhatsapp className="h-8 w-8 mr-2" />
                Enviar Reporte por WhatsApp
              </button>
            </div>
          </form>
        </div>

        {/* Modal de confirmación */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confirmar Envío</h3>
                <p className="text-gray-600">
                  ¿Estás seguro de que quieres enviar este reporte? Serás redirigido a WhatsApp.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Vista previa del mensaje:</h4>
                <pre className="whitespace-pre-wrap text-gray-700 text-xs">
                  {formatWhatsAppMessage()}
                </pre>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={cancelSend}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmSend}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
          <p className="text-red-100 mb-6">
            Si tienes un problema urgente, también puedes contactarnos directamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+5215548583702" className="bg-white flex items-center text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                          <FaPhone className="h-8 w-8 mr-2" />
                          Llamar Ahora
                        </a>
            <a href={"https://wa.me/+5215548583702?text="+encodeURI("Hola, encontre un error en la seccion de...")} className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
              <FaWhatsapp className='h-8 w-8 pr-1'/> <span className='pl-2'>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReporteProblemas;