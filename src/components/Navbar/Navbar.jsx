import React from "react";
import { Link } from "react-router-dom";

const WelcomeNavbar = () => {
  return (
    <nav className="bg-white border-collapse border-gray-200  dark:border-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="self-center text-2xl font-semibold whitespace-nowrap"
          >
            PlutusEmporia
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden to focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-t border-gray-200 md:border-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white  ">
            {/* Menu Items */}
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded to md:hover:bg-transparent md:border-0 md:p-0  hover:text-gray-800 to md:dark:hover:bg-transparent`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded to md:hover:bg-transparent md:border-0 md:p-0  hover:text-gray-800 to md:dark:hover:bg-transparent`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded to md:hover:bg-transparent md:border-0 md:p-0  hover:text-gray-800 to md:dark:hover:bg-transparent`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WelcomeNavbar;
