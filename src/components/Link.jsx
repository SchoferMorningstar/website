import React from "react";
import { NavLink } from "react-router-dom";

export default function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-indigo-600 font-semibold"
          : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
      }
    >
      {children}
    </NavLink>
  );
}
