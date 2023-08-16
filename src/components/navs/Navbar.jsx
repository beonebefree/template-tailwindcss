import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ol
            class="flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li class="text-sm">
              <a
                class="flex items-center text-gray-500 hover:text-blue-600"
                href="#"
              >
                LOCAL
                <svg
                  class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </li>
            <li class="text-sm">
              <a
                class="flex items-center text-gray-500 hover:text-blue-600"
                href="#"
              >
                {location.pathname === "/home"
                  ? "INICIO"
                  : location.pathname && location.pathname === "/productos"
                  ? "PRODUCTOS"
                  : location.pathname && location.pathname === "/"
                  ? "INICIO"
                  : location.pathname && location.pathname === "/about"
                  ? "NOSOTROS"
                  : location.pathname && location.pathname === "/contacto"
                  ? "CONTACTO"
                  : location.pathname
                  }
              </a>
            </li>
          </ol>
          <div className="flex items-center">
            <NavLink
              to="/home"
              exact
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900"
            >
              Nosotros
            </NavLink>
            {/* Agrega más enlaces aquí */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
