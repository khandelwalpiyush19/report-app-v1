 
import React, { useState } from 'react';

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
  });
 //eslint-disable-next-line 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 //eslint-disable-next-line 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-black selection:bg-sky-500/20 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Volunteer Registration</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="interests" className="block text-sm font-medium text-gray-400">Areas of Interest:</label>
        <textarea
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Register
      </button>
    </form>
  );
};

export default VolunteerRegistrationForm;
