import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            <span className="text-accent">Pitea</span>2
          </h1>
        </div>

        {/* Menú de navegación para pantallas medianas y grandes */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
          <a href="#productos" className="font-medium hover:text-primary transition-colors">Productos</a>
          <a href="#galeria" className="font-medium hover:text-primary transition-colors">Galería</a>
          <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
          <a 
            href="https://wa.me/523957881559" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp /> Contáctanos
          </a>
        </nav>

        {/* Botón de menú móvil */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a 
              href="#productos" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Productos
            </a>
            <a 
              href="#galeria" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Galería
            </a>
            <a 
              href="#contacto" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </a>
            <a 
              href="https://wa.me/523957881559" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors w-fit"
              onClick={toggleMenu}
            >
              <FaWhatsapp /> Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 