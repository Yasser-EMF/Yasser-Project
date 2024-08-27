import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/MR-TECHNOLOGIES.png'; // Import the logo image

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the register page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add custom validation logic if needed
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert('Please fill out all required fields.');
      return;
    }

    // Further form submission logic can be added here
  };

  return (
    <section className="relative bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Background"
            src={logo}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome Back
            </h2>
            <p className="mt-4 text-white/90">
              Sign in to access your account and continue where you left off.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  placeholder="Enter email"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  placeholder="Enter password"
                />
              </div>

              <div className="col-span-6">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              No account?{' '}
              <a
                href="/register"
                className="font-medium text-gray-900 hover:text-gray-700"
                onClick={handleRegisterRedirect} // Use the function to navigate programmatically
              >
                Sign up
              </a>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
