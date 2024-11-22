import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "auth/Firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, displayName, navigate);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      {window.innerWidth > 700 && (
        <div className="hidden md:block md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={"https://picsum.photos/800/800"}
            alt="sample-movie"
          />
        </div>
      )}
      <div className="bg-white p-8 rounded-lg shadow-md md:w-1/3 w-full mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="first-name" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="m-5">
              Already have an account? <Link className="text-lg font-bold m-3" to="/login">Login</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
