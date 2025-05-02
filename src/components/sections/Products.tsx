import { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import products from '../../data/products';

const Products = () => {
  const [filter, setFilter] = useState<'todos' | 'cinto' | 'cartera'>('todos');
  
  // Filtrar productos según la selección
  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(product => product.type === filter);

  return (
    <section id="productos" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de cintos y carteras piteados con hilos de plata. 
            Calidad artesanal y diseños únicos que destacan por su elegancia y durabilidad.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                filter === 'todos'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('todos')}
            >
              Todos
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b ${
                filter === 'cinto'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('cinto')}
            >
              Cintos
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                filter === 'cartera'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('cartera')}
            >
              Carteras
            </button>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              type={product.type}
            />
          ))}
        </div>

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron productos con el filtro seleccionado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products; 