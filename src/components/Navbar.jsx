import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyWebsite</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto transition-all duration-500 ease-in-out transform ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="lg:flex lg:space-x-8 bg-blue-700 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none space-y-4 lg:space-y-0">
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("business")}
            >
              Business
            </li>
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("Health")}
            >
              Health
            </li>
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </li>
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("science")}
            >
              Science
            </li>
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("sports")}
            >
              Sports
            </li>
            <li
              className="text-white hover:bg-blue-800 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory("technology")}
            >
              Technology
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  