"use client";

import { useState } from "react";
import {
  FiHome,
  FiInbox,
  FiUsers,
  FiBox,
  FiLogIn,
  FiLogOut,
  FiArrowUp,
  FiBook,
  FiLayers,
  FiLifeBuoy,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar2({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentPath = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    {
      icon: <FiHome />,
      text: "Dashboard",
      href: "/",
      active: currentPath === "/",
    },
    {
      icon: <FiInbox />,
      text: "Inbox",
      badge: 3,
      href: "/pages/about",
      active: currentPath === "/pages/about",
    },
    {
      icon: <FiUsers />,
      text: "Users",
      href: "/pages/users",
      active: currentPath === "/pages/users",
    },
    {
      icon: <FiBox />,
      text: "Products",
      href: "/pages/pricing",
      active: currentPath === "/pages/pricing",
    },
    {
      icon: <FiLogIn />,
      text: "Sign In",
      href: "/pages/auth/login",
      active: currentPath === "/pages/auth/login",
    },
    {
      icon: <FiLogOut />,
      text: "Sign Up",
      href: "/pages/auth/Register",
      active: currentPath === "/pages/auth/Register",
    },
    {
      icon: <FiArrowUp />,
      text: "Upgrade to Pro",
      href: "/pages/about",
      active: currentPath === "/pages/about",
    },
    {
      icon: <FiBook />,
      text: "Documentation",
      href: "/pages/about",
      active: currentPath === "/pages/about",
    },
    {
      icon: <FiLayers />,
      text: "Components",
      href: "/pages/about",
      active: currentPath === "/pages/about",
    },
    {
      icon: <FiLifeBuoy />,
      text: "Help",
      href: "/pages/about",
      active: currentPath === "/pages/about",
    },
  ];

  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="fixed top-0 left-0 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Toggle sidebar</span>

        {sidebarOpen ? (
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M13 4a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9zm-1 10V5H5v9h7zM3 4a1 1 0 100-2 1 1 0 000 2zM3 18a1 1 0 100-2 1 1 0 000 2z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M13 4a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9zm-1 10V5H5v9h7zM18 4a1 1 0 100-2 1 1 0 000 2zM18 18a1 1 0 100-2 1 1 0 000 2z"
            ></path>
          </svg>
        )}
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-2 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button className="text-white lg:hidden" onClick={toggleSidebar}>
            Close
          </button>
          <ul className="space-y-2 font-small">
            {menuItems.map((menuItem, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={menuItem.href}
                  className={`flex items-center p-2
                   ${
                     menuItem.active
                       ? "text-white bg-indigo-600 text-md"
                       : "text-gray-900 rounded-lg text-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                   }
                   `}
                >
                  {menuItem.icon}
                  <span className="ms-3">{menuItem.text}</span>
                  {menuItem.badge && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {menuItem.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-2 sm:ml-64">{children}</div>
    </>
  );
}
