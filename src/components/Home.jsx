import React from 'react';

const Home = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyStore</h1>
        <p className="text-lg mb-8">Discover a wide range of products tailored to your needs.</p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Home;
