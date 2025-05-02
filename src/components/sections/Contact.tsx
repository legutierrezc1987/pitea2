import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ponte en contacto con nosotros para solicitar información, hacer un pedido personalizado
            o cualquier consulta sobre nuestros productos artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaWhatsapp className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">WhatsApp</h4>
                  <p className="text-gray-600">Respuesta inmediata</p>
                  <a 
                    href="https://wa.me/523957881559" 
                    className="text-primary font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +52 395 788 1559
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Correo Electrónico</h4>
                  <p className="text-gray-600">Respuesta en 24-48 horas</p>
                  <a 
                    href="mailto:contacto@pitea2.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    contacto@pitea2.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Ubicación</h4>
                  <p className="text-gray-600">Envíos a toda la República Mexicana</p>
                  <p className="text-primary font-medium">México</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Información adicional */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h3>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-start gap-2">
                  <FaInfoCircle className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">¿Cómo puedo personalizar mi pedido?</h4>
                    <p className="text-gray-600">
                      Contáctanos por WhatsApp para discutir las opciones de personalización,
                      desde diseños específicos hasta tamaños y colores.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-start gap-2">
                  <FaInfoCircle className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">¿Cuál es el tiempo de entrega?</h4>
                    <p className="text-gray-600">
                      El tiempo de elaboración varía según el producto y nivel de personalización, 
                      generalmente entre 1-3 semanas más el tiempo de envío.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-start gap-2">
                  <FaInfoCircle className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">¿Realizan envíos internacionales?</h4>
                    <p className="text-gray-600">
                      Sí, realizamos envíos internacionales. El costo y tiempo de entrega
                      varían según el destino. Contáctanos para más detalles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-2">
                  <FaInfoCircle className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">¿Qué métodos de pago aceptan?</h4>
                    <p className="text-gray-600">
                      Aceptamos transferencias bancarias, depósitos y pagos a través de PayPal.
                      Los detalles se proporcionarán al momento de confirmar tu pedido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA final */}
        <div className="mt-12 text-center">
          <div className="bg-primary text-white py-8 px-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Listo para hacer tu pedido?</h3>
            <p className="mb-6">
              Contáctanos ahora y comienza a disfrutar de la artesanía piteada de la más alta calidad.
            </p>
            <a 
              href="https://wa.me/523957881559" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 