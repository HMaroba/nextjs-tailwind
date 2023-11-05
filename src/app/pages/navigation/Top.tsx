import Link from "next/link";
import { useState } from "react";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-white text-xl font-bold">
            Your Logo
          </a>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <Link href="/menu1">
            <a className="text-white">Menu Item 1</a>
          </Link>
          <Link href="/menu2">
            <a className="text-white">Menu Item 2</a>
          </Link>
          <Link href="/menu3">
            <a className="text-white">Menu Item 3</a>
          </Link>
        </div>

        {/* Logout Button */}
        <button className="text-white">Logout</button>
      </div>
    </nav>
  );
};

export default TopNavbar;
