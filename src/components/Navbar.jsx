import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg"

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = ()=>{
    localStorage.removeItem("user");
    navigate("/login");
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/communities" },
    { name: "task", href: "/events" },
    { name: "Discussion", href: "/discussions" },
    { name: "Dashboard", href: "/gallery" },
    { name: "Communities", href: "/about" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex h-20 items-center justify-around max-w-7xl mx-auto px-2">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-gray-600 hover:text-amber-500 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu size={25} />
          </button>
          <a href="/" className="h-16 w-20 flex items-center">
            <img className="h-full w-full object-contain" src={logo} alt="Hometown Hub" />
          </a>
        </div>

        <ul className="hidden md:flex gap-8 text-lg items-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-700 hover:text-amber-500 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center border-2 border-gray-300 rounded-md px-2 py-1 focus-within:border-amber-400 transition">
            <FaSearch className="text-gray-400" />
            <input
              type="search"
              placeholder="Search community..."
              className="px-2 py-1.5 rounded-md border-none outline-none w-48 lg:w-60 text-sm"
            />
          </form>

          <div className="flex gap-2">
            <div className="flex gap-2">
  {user ? (
    <>
      <span className="flex items-center font-medium text-gray-700">
        {user.fullName}
      </span>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <a
        href="/login"
        className="px-4 py-2 text-amber-600 border border-amber-400 rounded-md hover:bg-amber-50 transition font-medium text-sm"
      >
        Login
      </a>

      <a
        href="/signup"
        className="px-4 py-2 bg-amber-400 rounded-md text-white hover:bg-amber-500 transition shadow-sm font-medium text-sm"
      >
        Sign Up
      </a>
    </>
  )}
</div>
            
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-gray-700 hover:text-amber-500 font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="pt-2">
            <form className="flex items-center border-2 border-gray-300 rounded-md px-2 py-1 w-full">
              <FaSearch className="text-gray-400" />
              <input type="search" placeholder="Search..." className="px-2 py-1.5 rounded-md border-none outline-none w-full text-sm" />
            </form>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;