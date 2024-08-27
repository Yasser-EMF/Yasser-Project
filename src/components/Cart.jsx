import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phoneNumber: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantities less than 1

    // Update the quantity in the cart
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    // Assuming you have a method to update the cart state
    // This could be a context or a state management solution
    // For example, if using context:
    // updateCart(updatedCart);

    // If not using context, you might need to lift the state up or use other methods to update the cart
  };

  const generateWhatsAppMessage = () => {
    let message = `Hello, this is ${clientInfo.firstName} ${clientInfo.lastName} from ${clientInfo.city}. I would like to place an order for the following items:\n\n`;

    cart.forEach((item) => {
      message += `${item.name} - Quantity: ${item.quantity}\n`;
    });

    message += `\nContact Email: ${clientInfo.email}\nPhone Number: ${clientInfo.phoneNumber}\nThank you!`;
    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "+212649455082"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the cart and close the checkout form
    clearCart();
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate totals
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price); // Ensure item.price is a number
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);
  const vat = totalPrice * 0.25; // 25% VAT
  const grandTotal = totalPrice + vat;

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">Your Cart</h1>
        </header>

        {cart.length > 0 ? (
          <div className="mt-8">
            <ul className="space-y-6">
              {cart.map((item) => {
                const price = parseFloat(item.price); // Ensure item.price is a number
                return (
                  <li key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src={item.image || 'https://via.placeholder.com/100'} // Fallback image
                      alt={item.name}
                      className="h-24 w-24 rounded object-cover"
                    />
                    <div className="flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <dl className="mt-1 space-y-px text-sm text-gray-600">
                        <div className="flex justify-between">
                          <dt>Price:</dt>
                          <dd>£{isNaN(price) ? 'N/A' : price.toFixed(2)}</dd>
                        </div>
                        <div className="flex justify-between items-center">
                          <dt>Quantity:</dt>
                          <dd>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                              className="w-16 text-center rounded-md border-gray-300 shadow-sm sm:text-sm"
                            />
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-600 transition hover:text-red-600"
                      >
                        <span className="sr-only">Remove item</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 flex flex-col-reverse justify-between gap-8 md:flex-row">
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="block rounded bg-yellow-500 px-8 py-4 text-gray-900 font-semibold text-lg hover:bg-yellow-400 transition"
                >
                  Checkout
                </button>
              ) : (
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-center">Checkout Information</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCheckout();
                    }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={clientInfo.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={clientInfo.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={clientInfo.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={clientInfo.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={clientInfo.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total (including VAT)</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                    <button
                      type="submit"
                      className="block w-full rounded bg-yellow-500 px-8 py-4 text-gray-900 font-semibold hover:bg-yellow-400 transition"
                    >
                      Confirm Order
                    </button>
                  </form>
                </div>
              )}
              <div className="w-full max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <dl className="space-y-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <dt className="text-gray-700">Total:</dt>
                    <dd>${grandTotal.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">Your cart is empty</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
