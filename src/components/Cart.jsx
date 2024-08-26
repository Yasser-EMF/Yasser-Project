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

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>
        {cart.length > 0 ? (
          <div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                  Checkout
                </button>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-center">Checkout Information</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCheckout();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block mb-2">First Name:</label>
                      <input
                        type="text"
                        name="firstName"
                        value={clientInfo.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name:</label>
                      <input
                        type="text"
                        name="lastName"
                        value={clientInfo.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={clientInfo.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">City:</label>
                      <input
                        type="text"
                        name="city"
                        value={clientInfo.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Phone Number:</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={clientInfo.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition"
                      >
                        Send Order
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-lg text-center">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
