import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  type: 'cinto' | 'cartera';
}

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  type 
}: ProductCardProps) => {
  // Formatear el precio en formato moneda mexicana
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }).format(price);

  // Mensaje para WhatsApp
  const whatsappMessage = `Hola, estoy interesado en ${type === 'cinto' ? 'el cinto' : 'la cartera'} "${title}" que cuesta ${formattedPrice}. ¿Podría darme más información?`;
  const whatsappUrl = `https://wa.me/523957881559?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="card group h-full flex flex-col">
      {/* Imagen del producto */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">
          {type === 'cinto' ? 'Cinto' : 'Cartera'}
        </div>
      </div>
      
      {/* Información del producto */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-primary">{formattedPrice}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp /> Ordenar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 