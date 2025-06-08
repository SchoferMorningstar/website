import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500 ease-in-out">
      <header className="shadow bg-white dark:bg-gray-800 transition-colors duration-500 ease-in-out">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={handleToggleDarkMode} className="text-xl">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={handleToggleDarkMode} className="text-xl">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
            <button onClick={toggleMenu} className="text-xl mx-2">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </nav>

        {/* Divider line shown only on mobile when menu is open */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-300 dark:border-gray-700 mx-4" />
        )}

        {/* Mobile Menu with transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top px-4 space-y-2 text-center flex flex-col align-middle content-center ${
            menuOpen
              ? "max-h-96 opacity-100 scale-y-100 pt-2 pb-4"
              : "max-h-0 opacity-0 scale-y-0"
          } bg-white dark:bg-gray-800`}
        >
          <Link to="/" className="block py-2 text-lg">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-lg">
            About
          </Link>
          <Link to="/projects" className="block py-2 text-lg">
            Projects
          </Link>
          <Link to="/contact" className="block py-2 text-lg">
            Contact
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500 ease-in-out">
        © 2025 Adam Gwiazdoń. All rights reserved.
      </footer>
    </div>
  );
}
