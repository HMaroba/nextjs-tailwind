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

export default function Sidebar({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { icon: <FiHome />, text: "Dashboard" },
    { icon: <FiInbox />, text: "Inbox", badge: 3 },
    { icon: <FiUsers />, text: "Users" },
    { icon: <FiBox />, text: "Products" },
    { icon: <FiLogIn />, text: "Sign In" },
    { icon: <FiLogOut />, text: "Sign Up" },
    { icon: <FiArrowUp />, text: "Upgrade to Pro" },
    { icon: <FiBook />, text: "Documentation" },
    { icon: <FiLayers />, text: "Components" },
    { icon: <FiLifeBuoy />, text: "Help" },
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
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button className="text-white lg:hidden" onClick={toggleSidebar}>
            Close
          </button>
          <ul className="space-y-2 font-medium">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {menuItem.icon}
                  <span className="ms-3">{menuItem.text}</span>
                  {menuItem.badge && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {menuItem.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-2 sm:ml-64">{children}</div>
    </>
  );
}
