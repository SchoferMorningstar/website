import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // this prevents overwriting
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500 ease-in-out">
      <header className="shadow bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="space-x-4 flex items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={handleToggle} className="text-xl">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500 ease-in-out">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
