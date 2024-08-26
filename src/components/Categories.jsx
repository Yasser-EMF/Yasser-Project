import React from 'react';

const Categories = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Category */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Category Name</h3>
            <p className="text-gray-700 mb-4">Description of the category.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Explore
            </a>
          </div>
          {/* Repeat above block for more categories */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
