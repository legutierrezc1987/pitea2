import { FaChevronDown } from 'react-icons/fa';
import { heroImage } from '../../assets/images/placeholder';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-light min-h-[90vh] flex items-center">
      {/* Fondo con patrón */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%238B4513\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Artesanía</span> Piteada <br/>
              <span className="text-accent">de Lujo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Descubre nuestra colección exclusiva de cintos y carteras piteadas con hilos de plata de la más alta calidad.
              Artesanía mexicana con diseños únicos y personalizados.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#galeria" 
                className="btn btn-primary w-full sm:w-auto"
              >
                Ver Galería
              </a>
              <a 
                href="https://wa.me/523957881559" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Contactar
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg"></div>
              <img 
                src={heroImage} 
                alt="Pitea2 Artesanía de Lujo" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Flecha hacia abajo */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <FaChevronDown 
            size={24} 
            className="text-primary"
            onClick={scrollToProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 