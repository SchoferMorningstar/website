import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faLaptopCode,
  faTrophy,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="space-y-20 py-16 px-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Adam 👋</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A student passionate about programming.
        </p>
      </section>

      {/* What I Do */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faBrain} className="text-blue-500" />
            Learn how to be better and better
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLaptopCode} className="text-green-500" />
            Enjoy programming cool stuff
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
            Constantly seek challenges
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tech I Use</h2>
        <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-react-original colored"></i>
            React
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-javascript-plain colored"></i>
            JavaScript
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-tailwindcss-original colored"></i>
            Tailwind CSS
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-nodejs-plain colored"></i>
            Node.js
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-vitejs-plain colored"></i>
            Vite
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-php-plain colored"></i>
            PHP
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-html5-plain colored"></i>
            HTML
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-css3-plain colored"></i>
            CSS
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-sqldeveloper-plain colored"></i>
            SQL
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-mysql-original colored"></i>
            MySQL
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-2">
            <i className="devicon-sqlite-plain colored"></i>
            SQLite
          </span>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
        <p className="italic text-gray-600 dark:text-gray-400 flex items-start gap-2">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-xl mt-1 text-indigo-400"
          />
          "He who would learn to fly one day must first learn to stand and walk
          and run and climb and dance; one cannot fly into flying."
        </p>
      </section>
    </div>
  );
}
