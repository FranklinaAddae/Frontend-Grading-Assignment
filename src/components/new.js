import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? <FaCog /> : <FaHome />}
        </button>
      </div>
      <nav className={`sidebar-nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#" className="nav-link">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <FaUser /> Profile
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <FaCog /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;