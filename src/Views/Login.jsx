import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signUpProvider } from "auth/Firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {window.innerWidth > 700 && (
        <div className="hidden lg:block w-1/2">
          <img
            className="rounded-lg shadow-lg"
            src={"https://picsum.photos/800/800"}
            alt="sample"
          />
        </div>
      )}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 m-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div
            className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
            onClick={() => forgotPassword(email)}
          >
            Forgot password?
          </div>
          <div
            className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
               Don't have an account? <Link className="text-lg font-bold m-3" to="/register">Register</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleProviderLogin}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
