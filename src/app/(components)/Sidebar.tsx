'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 left-0 ${isOpen ? 'w-64' : 'w-16'} bg-gray-800 p-4`}>
      <button className="text-white" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={isOpen ? 'block' : 'hidden'}>
        {/* Add your sidebar links here */}
        <a className="block text-white py-2">Link 1</a>
        <a className="block text-white py-2">Link 2</a>
        <a className="block text-white py-2">Link 3</a>
      </nav>
    </div>
  );
};

export default Sidebar;
