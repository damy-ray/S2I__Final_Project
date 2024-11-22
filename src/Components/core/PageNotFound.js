import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
