import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MR TECHNOLOGIES
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/products" className="hover:text-yellow-500 transition duration-300">
            Products
          </Link>
          <Link to="/categories" className="hover:text-yellow-500 transition duration-300">
            Categories
          </Link>
          <Link to="/login" className="hover:text-yellow-500 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-yellow-500 transition duration-300">
            Register
          </Link>
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-600 text-white text-xs font-semibold rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
