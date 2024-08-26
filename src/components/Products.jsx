import React, { useState } from 'react';

const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = (product) => {
    addToCart({ ...product, quantity });
    setQuantity(1); // Reset quantity after adding
    closeDetails(); // Close the modal after adding
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  // Example product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: '$29.99',
      image: 'https://via.placeholder.com/300x200',
    },
    // Add more products here
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-40 object-cover mb-4 rounded"
                src={product.image}
                alt={product.name}
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-900 mb-4">{product.price}</p>
              <button
                onClick={() => openDetails(product)}
                className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
              <button
                onClick={closeDetails}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <p className="text-gray-900 mb-4">{selectedProduct.price}</p>
              <div className="mb-4">
                <label className="block mb-2">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                onClick={() => addProductToCart(selectedProduct)}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
