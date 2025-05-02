import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pitea<span className="text-accent">2</span></h3>
            <p className="text-gray-300 mb-4">
              Ofrecemos las mejores carteras y cintos piteados con hilos de plata de la más alta calidad.
              Cada pieza es única y personalizable según tus gustos y necesidades.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#productos" className="text-gray-300 hover:text-white transition-colors">Productos</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">Galería</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <a 
                  href="https://wa.me/523957881559" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +52 395 788 1559
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a 
                  href="mailto:contacto@pitea2.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contacto@pitea2.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-300">México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Pitea2. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 