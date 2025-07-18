import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const PoliticaPrivacidad: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Información General</h2>
              <p>
                Serigrafía Textil ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad 
                de nuestros clientes y visitantes del sitio web. Esta Política de Privacidad describe cómo 
                recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestros servicios 
                de estampado textil.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Información que Recopilamos</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 Información Personal</h3>
              <p>Recopilamos la siguiente información cuando usted:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Completa nuestro formulario de contacto</li>
                <li>Solicita una cotización</li>
                <li>Se comunica con nosotros por teléfono o email</li>
              </ul>
              <p className="mt-3">Esta información incluye:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Detalles del proyecto o servicio solicitado</li>
                <li>Información sobre el tipo de prenda y diseño</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">2.2 Información Técnica</h3>
              <p>Automáticamente recopilamos cierta información técnica, incluyendo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Páginas visitadas en nuestro sitio web</li>
                <li>Tiempo de permanencia en el sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cómo Utilizamos su Información</h2>
              <p>Utilizamos su información personal para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a sus consultas y solicitudes de cotización</li>
                <li>Proporcionar nuestros servicios de estampado textil</li>
                <li>Comunicarnos sobre el progreso de su proyecto</li>
                <li>Enviar información sobre nuestros servicios (solo si ha dado su consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Compartir Información</h2>
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las 
                siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Para proteger nuestros derechos legales o la seguridad de otros</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su 
                información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
                Estas medidas incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cifrado de datos sensibles</li>
                <li>Acceso restringido a información personal</li>
                <li>Capacitación regular del personal sobre privacidad</li>
                <li>Monitoreo regular de nuestros sistemas de seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Retención de Datos</h2>
              <p>
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los 
                propósitos descritos en esta política, a menos que la ley requiera un período de retención 
                más largo. Generalmente, conservamos:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Información de contacto: hasta 3 años después del último contacto</li>
                <li>Información del proyecto: hasta 5 años para fines de garantía</li>
                <li>Registros financieros: según lo requiera la legislación fiscal mexicana</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acceder a su información personal que tenemos</li>
                <li>Rectificar información inexacta o incompleta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos, contáctenos utilizando la información proporcionada al final 
                de esta política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies y Tecnologías Similares</h2>
              <p>
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia. 
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Utilizamos:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cookies esenciales: necesarias para el funcionamiento del sitio</li>
                <li>Cookies de rendimiento: para analizar cómo se utiliza nuestro sitio</li>
                <li>Cookies de funcionalidad: para recordar sus preferencias</li>
              </ul>
              <p className="mt-3">
                Puede controlar las cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Menores de Edad</h2>
              <p>
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente 
                información personal de menores de edad. Si descubrimos que hemos recopilado información 
                de un menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre 
                cambios significativos publicando la nueva política en nuestro sitio web y actualizando 
                la fecha de "última actualización".
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, 
                contáctenos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Email: <a href="mailto:seriestampa2dany@outlook.com">seriestampa2dany@outlook.com</a></span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Teléfono: <a href="tel:+5215548583702" >+52 155 485 83 702</a></span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticaPrivacidad;