import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // สำหรับเมนูย่อย
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // สำหรับเมนูมือถือ

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 px-10 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* โลโก้ */}
        <div className="flex items-center space-x-2">
          <img src="logo.jpg" alt="Logo" className="h-8 w-8 border rounded-full object-cover" />
          <div className="text-white text-lg font-bold">THANAPAT</div>
        </div>

        {/* ปุ่ม Hamburger สำหรับมือถือ */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* เมนูสำหรับหน้าจอขนาดใหญ่ */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </a>

          {/* เมนู About */}
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 hover:text-white transition duration-300 focus:outline-none"
            >
              About ▼
            </button>
            {/* เมนูย่อย */}
            {isDropdownOpen && (
              <div className="absolute left-0 m-2 w-15 bg-gray-800 rounded-md shadow-lg z-20">
                <a
                  href="#about"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  About Me
                </a>
                
                <a
                  href="#project"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  Project
                </a>
                <a
                  href="#intern"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  Internship
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* เมนู Hamburger สำหรับมือถือ */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 p-4 absolute top-0 left-0 w-full mt-16`}
      >
        <a
          href="#home"
          className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300"
        >
          Home
        </a>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 focus:outline-none"
          >
            About ▼
          </button>
          {/* เมนูย่อย (แสดงเฉพาะในมือถือ) */}
          {isDropdownOpen && (
            <div className="bg-gray-800 p-2 rounded-md shadow-lg z-20">
              <a
                href="#about"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >
                About Me
              </a>
              <a
                href="#project"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >
                Project
              </a>
              <a
                href="#intern"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >
                Internship
              </a>
              
            </div>
          )}
        </div>
        <a
          href="#contact"
          className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
