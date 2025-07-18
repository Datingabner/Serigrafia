import React from 'react';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

const TerminosServicio: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Términos y Condiciones de Servicio</h1>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar los servicios de Serigrafía Textil ("la empresa", "nosotros", "nuestro"), 
                usted ("el cliente", "usted") acepta estar sujeto a estos Términos y Condiciones de Servicio. 
                Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Descripción de Servicios</h2>
              <p>Serigrafía Textil ofrece servicios de estampado textil que incluyen:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Estampado sobre prendas de vestir armadas o en corte</li>
                <li>Servicios para prendas de dama, caballero, niños y niñas</li>
                <li>Múltiples técnicas de estampado: Plastisol, Base agua, Foil, Flock, HD, Glitter, Corte de vinil</li>
                <li>Diseños personalizados según especificaciones del cliente</li>
                <li>Asesoría técnica y selección de materiales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Proceso de Pedidos y Cotizaciones</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.1 Solicitud de Cotización</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Las cotizaciones son gratuitas y sin compromiso</li>
                <li>La validez de la cotización es de 30 días calendario</li>
                <li>Los precios pueden variar según cantidad, técnica y complejidad del diseño</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">3.2 Confirmación de Pedido</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>El pedido se considera confirmado al recibir el anticipo acordado</li>
                <li>Cualquier modificación posterior puede generar costos adicionales</li>
                <li>Los tiempos de entrega se establecen al momento de la confirmación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Precios y Pagos</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.1 Estructura de Precios</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los precios varían según cantidad, técnica de estampado y complejidad</li>
                <li>Descuentos por volumen disponibles para pedidos grandes</li>
                <li>Precios no incluyen IVA (se agrega según legislación vigente)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">4.2 Términos de Pago</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Se requiere anticipo del 50% para iniciar producción</li>
                <li>Saldo restante al momento de la entrega</li>
                <li>Pagos aceptados: efectivo, transferencia bancaria, cheque</li>
                <li>Pedidos no pagados en su totalidad no serán entregados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Diseños y Propiedad Intelectual</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.1 Diseños del Cliente</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>El cliente es responsable de tener los derechos sobre los diseños proporcionados</li>
                <li>No estampamos diseños con derechos de autor sin autorización</li>
                <li>El cliente indemniza a la empresa contra reclamaciones de terceros</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">5.2 Diseños Creados por Nosotros</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los diseños originales creados por nosotros pueden tener costo adicional</li>
                <li>El cliente obtiene derechos de uso para el proyecto específico</li>
                <li>Nos reservamos el derecho de usar los diseños en nuestro portafolio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Tiempos de Entrega</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los tiempos de entrega se establecen según la complejidad y cantidad del pedido</li>
                <li>Tiempo estándar: 5-10 días hábiles después de la confirmación</li>
                <li>Pedidos urgentes pueden tener costo adicional</li>
                <li>Retrasos por causas de fuerza mayor no generan penalizaciones</li>
                <li>Cambios en el pedido pueden afectar los tiempos de entrega</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Control de Calidad y Garantías</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">7.1 Estándares de Calidad</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Utilizamos materiales de primera calidad</li>
                <li>Cada pedido pasa por control de calidad antes de la entrega</li>
                <li>Tolerancia de defectos: máximo 2% en pedidos grandes</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">7.2 Garantía</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Garantizamos la calidad del estampado por 6 meses</li>
                <li>La garantía cubre defectos de fabricación, no desgaste normal</li>
                <li>Garantía válida con cuidado adecuado de las prendas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Devoluciones y Reembolsos</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                  <p className="text-yellow-800">
                    <strong>Importante:</strong> Debido a la naturaleza personalizada de nuestros productos, 
                    no aceptamos devoluciones por cambio de opinión.
                  </p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">8.1 Casos de Devolución Aceptados</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Defectos de fabricación comprobables</li>
                <li>Error en las especificaciones por nuestra parte</li>
                <li>Daños durante el transporte (reportar dentro de 24 horas)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">8.2 Proceso de Devolución</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reportar el problema dentro de 48 horas de recibido</li>
                <li>Proporcionar evidencia fotográfica del defecto</li>
                <li>Las prendas deben estar sin usar y en condición original</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitación de Responsabilidad</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nuestra responsabilidad se limita al valor del pedido</li>
                <li>No somos responsables por daños indirectos o consecuenciales</li>
                <li>No garantizamos resultados específicos de marketing o ventas</li>
                <li>El cliente asume responsabilidad por el uso final de las prendas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Fuerza Mayor</h2>
              <p>
                No seremos responsables por retrasos o incumplimientos causados por circunstancias 
                fuera de nuestro control, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Desastres naturales</li>
                <li>Huelgas o conflictos laborales</li>
                <li>Fallas en el suministro de materiales</li>
                <li>Regulaciones gubernamentales</li>
                <li>Pandemias o emergencias sanitarias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Privacidad y Confidencialidad</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mantenemos confidencialidad sobre los diseños y proyectos del cliente</li>
                <li>No compartimos información del cliente con terceros sin autorización</li>
                <li>Consulte nuestra Política de Privacidad para más detalles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Modificaciones de los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación 
                en nuestro sitio web. Es responsabilidad del cliente revisar periódicamente 
                estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos términos se rigen por las leyes de México. Cualquier disputa será 
                resuelta en los tribunales competentes de [Ciudad], México.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Contacto</h2>
              <p>
                Para preguntas sobre estos términos o nuestros servicios, contáctenos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Información de Contacto</h4>
                    <a href="mailto:seriestampa2dany@outlook.com" className="text-sm text-gray-600 mb-1">Email: seriestampa2dany@outlook.com</a> <br />
                    <a href="tel:+5215548583702"  className="text-sm text-gray-600 mb-1">Teléfono: +52 155 485 83 702</a> <br />
                    <a href="https://maps.app.goo.gl/ETr5hjp7coWpHhXw5" className="text-sm text-gray-600">Dirección: Av. Principal 123, Ciudad, CP 12345</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
                    <p className="text-sm text-gray-600 mb-1">Lun - Sáb: 9:00 a.m. - 05:00 p.m.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
              <div className="flex">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <p className="text-green-800">
                  <strong>Al utilizar nuestros servicios, usted confirma que ha leído, entendido y 
                  acepta estos Términos y Condiciones de Servicio.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminosServicio;