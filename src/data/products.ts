import {
  cinto1, cinto2, cinto3, cinto4, cinto5,
  cartera1, cartera2, cartera3, cartera4, cartera5, cartera6, cartera7, cartera8
} from '../assets/images/placeholder';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  type: 'cinto' | 'cartera';
  image: string;
  featured?: boolean;
}

// Exportamos un array con productos de ejemplo
// Estos serán reemplazados con imágenes reales
const products: Product[] = [
  {
    id: 1,
    title: 'Cinto Premium Piteado',
    description: 'Cinto piteado con hilos de plata, diseño tradicional mexicano con detalles florales. Personalizable según talla.',
    price: 7000,
    type: 'cinto',
    image: cinto1,
    featured: true
  },
  {
    id: 2,
    title: 'Cinto Elegante',
    description: 'Cinto piteado con fino acabado e hilos de plata, diseño clásico con motivos geométricos.',
    price: 7500,
    type: 'cinto',
    image: cinto2,
    featured: true
  },
  {
    id: 3,
    title: 'Cinto Tradicional',
    description: 'Cinto piteado con motivos tradicionales mexicanos, ideal para eventos especiales.',
    price: 8000,
    type: 'cinto',
    image: cinto3
  },
  {
    id: 4,
    title: 'Cinto Premium Plus',
    description: 'Nuestro cinto más exclusivo, con diseños personalizados y acabados de lujo con hilos de plata de la más alta calidad.',
    price: 9500,
    type: 'cinto',
    image: cinto4
  },
  {
    id: 5,
    title: 'Cinto Artesanal',
    description: 'Cinto piteado a mano con técnicas tradicionales y diseños únicos. Perfecto para quienes valoran la artesanía auténtica.',
    price: 8500,
    type: 'cinto',
    image: cinto5
  },
  {
    id: 6,
    title: 'Cartera Clásica',
    description: 'Cartera piteada con hilos de plata, diseño tradicional y amplio espacio para tarjetas y efectivo.',
    price: 2000,
    type: 'cartera',
    image: cartera1,
    featured: true
  },
  {
    id: 7,
    title: 'Cartera Ejecutiva',
    description: 'Cartera elegante con piteado fino, ideal para el uso diario con un toque de distinción.',
    price: 2300,
    type: 'cartera',
    image: cartera2,
    featured: true
  },
  {
    id: 8,
    title: 'Cartera Minimalista',
    description: 'Cartera delgada con diseño minimalista y detalles piteados, perfecta para llevar lo esencial.',
    price: 1800,
    type: 'cartera',
    image: cartera3
  },
  {
    id: 9,
    title: 'Cartera Premium',
    description: 'Cartera de alto nivel con piteado exclusivo, múltiples compartimentos y terminado de lujo.',
    price: 2600,
    type: 'cartera',
    image: cartera4
  },
  {
    id: 10,
    title: 'Cartera Tradicional',
    description: 'Cartera con diseños tradicionales mexicanos y espacio generoso. Perfecta para uso diario con un toque artesanal.',
    price: 2200,
    type: 'cartera',
    image: cartera5
  },
  {
    id: 11,
    title: 'Cartera Casual',
    description: 'Cartera con diseño relajado pero elegante, ideal para un estilo casual con un toque de distinción.',
    price: 1900,
    type: 'cartera',
    image: cartera6
  },
  {
    id: 12,
    title: 'Cartera Slim',
    description: 'Diseño ultra delgado para quienes prefieren llevar lo esencial. Piteado fino y acabados de alta calidad.',
    price: 1750,
    type: 'cartera',
    image: cartera7
  },
  {
    id: 13,
    title: 'Cartera Elegante',
    description: 'Cartera de diseño elegante con detalles piteados exclusivos. Perfecta para ocasiones especiales.',
    price: 2400,
    type: 'cartera',
    image: cartera8
  }
];

export default products; 