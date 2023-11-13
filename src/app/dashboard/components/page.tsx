/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function Components() {
  const menuItems = [
    {
      text: "Home",
      href: "#",
    },
    {
      text: "Registered Users",
      href: "#",
    },
    {
      text: "Products",
      href: "#",
    },
    {
      text: "Orders",
      href: "#",
    },
  ];
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px "
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2">
            {menuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                {item.text}
              </Link>
            ))}
          </li>
        </ul>
      </div>
   
    </>
  );
}
