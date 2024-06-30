import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBook, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import RefreshIcon from '@mui/icons-material/Refresh';

const Header = () => {

  const handleRefresh = () => {
    // Reload the page or trigger the refresh action here
    window.location.reload(); // This will reload the entire page
    // You can replace this with the appropriate refresh logic for your system
  };
  return (
    <div className="header">
      <span>
      <RefreshIcon className='refresh-icon'  onClick={handleRefresh} />
      </span>
       
        {/*<FaGraduationCap size={48} color="white" />*/}
  </div>
  )
}

export default Header