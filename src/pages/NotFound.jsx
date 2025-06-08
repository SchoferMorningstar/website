import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <p className="mb-6 max-w-md text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
