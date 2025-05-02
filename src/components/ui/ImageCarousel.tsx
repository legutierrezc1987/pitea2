import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importamos imágenes de placeholder
import { cinto1, cinto2, cinto3, cinto4, cartera1, cartera2, cartera3, cartera4 } from '../../assets/images/placeholder';

interface ImageCarouselProps {
  images?: string[];
  autoplay?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
}

const ImageCarousel = ({
  images,
  autoplay = true,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1
}: ImageCarouselProps) => {
  // Si no se proporcionan imágenes, usamos las de placeholder
  const defaultImages = [cartera1, cartera2, cartera3, cartera4, cinto1, cinto2, cinto3, cinto4];
  const displayImages = images || defaultImages;

  const settings = {
    dots: true,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow > 3 ? 3 : slidesToShow,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow > 2 ? 2 : slidesToShow,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Efecto para detectar imágenes faltantes y manejarlas
  useEffect(() => {
    // Esta función podría ampliarse para manejar imágenes que no cargan correctamente
    const preloadImages = async () => {
      try {
        await Promise.all(
          displayImages.map(
            (src) => 
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
              })
          )
        );
      } catch (error) {
        console.warn('Algunas imágenes no pudieron cargarse', error);
      }
    };

    preloadImages();
  }, [displayImages]);

  return (
    <div className="carousel-container relative">
      <Slider {...settings}>
        {displayImages.map((image, index) => (
          <div key={index} className="carousel-slide px-2">
            <img 
              src={image} 
              alt={`Producto ${index + 1}`} 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel; 