import ImageCarousel from '../ui/ImageCarousel';
import VideoPlayer from '../ui/VideoPlayer';

import { 
  cinto1, cinto2, cinto3, cinto4, cinto5,
  cartera1, cartera2, cartera3, cartera4, cartera5, cartera6, cartera7, cartera8,
  videoPoster, videoPlaceholder
} from '../../assets/images/placeholder';

const Gallery = () => {
  // Array de imágenes para el carrusel (todas las imágenes disponibles)
  const images = [
    cartera1, cartera2, cartera3, cartera4, cartera5, cartera6, cartera7, cartera8,
    cinto1, cinto2, cinto3, cinto4, cinto5
  ];

  return (
    <section id="galeria" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra galería de carteras y cintos piteados con hilos de plata.
            Cada pieza es única y elaborada con los más altos estándares de calidad artesanal.
          </p>
        </div>

        {/* Carrusel de imágenes */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Nuestras Creaciones</h3>
          <ImageCarousel 
            images={images} 
            slidesToShow={3}
            autoplay={true}
          />
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Proceso Artesanal</h3>
          <VideoPlayer 
            src={videoPlaceholder}
            poster={videoPoster}
            title="Conoce el proceso artesanal de nuestros productos piteados"
          />
          <p className="mt-4 text-gray-600 text-center">
            Descubre cómo elaboramos cada pieza a mano, manteniendo viva la tradición del piteado mexicano.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 