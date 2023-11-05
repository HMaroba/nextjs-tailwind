"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          <h2>Your Logo</h2>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <Link href="/menu1" className="text-white">
            Menu Item 1
          </Link>
          <Link href="/menu1" className="text-white">
            Menu Item 1
          </Link>
          <Link href="/menu1" className="text-white">
            Menu Item 1
          </Link>
          <Link href="/menu1" className="text-white">
            Menu Item 1
          </Link>
        </div>

        {/* Logout Button */}
        <button className="text-white">Logout</button>
      </div>
    </nav>
  );
};

export default TopNavbar;
