import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/MR-TECHNOLOGIES.png'; // Import the logo image

const Register = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add custom validation logic if needed
    const form = event.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Please fill out all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
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
              Create Your Account
            </h2>
            <p className="mt-4 text-white/90">
              Sign up to start your journey with us. Enjoy personalized features and updates.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="ConfirmPassword"
                  name="confirmPassword"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-base text-gray-700 py-3 px-4 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="col-span-6">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300 ease-in-out"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-medium text-gray-900 hover:text-gray-700"
                onClick={handleLoginRedirect} // Use the function to navigate programmatically
              >
                Log in
              </a>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
