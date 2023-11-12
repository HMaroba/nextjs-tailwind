'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeBar = () => {
  const [navbar, setNavbar] = useState(false);
  const currentPath = usePathname();

  const navigation = [
    { label: "Home", href: "/", active: currentPath === "/" },
    { label: "About", href: "/pages/about", active: currentPath === "/pages/about" },
    { label: "Contact", href: "/pages/form", active: currentPath === "/pages/form" },
    { label: "Pricing", href: "/pages/pricing", active: currentPath === "/pages/pricing" },
  ];

  return (
    <div className="w-full">
      <nav className="w-full bg-gray-800 shadow fixed top-0 left-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-md text-white font-bold">NEXT JS</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                         <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                             <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-2 nav__item" key={index}>
                    <Link
                      href={menu.href}
                      className={`inline-block px-4 py-2 text-md font-normal rounded-md ${
                        menu.active
                          ? "text-indigo-500 bg-indigo-100"
                          : "text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                      }`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                <Link
                  href="/pages/auth/Register"
                  className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div
              className={`flex flex-wrap w-full my-5 lg:hidden  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <>
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`w-full px-4 py-2 -ml-4 rounded-md ${
                      item.active
                        ? "text-indigo-500"
                        : "text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  Get Started
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeBar;
