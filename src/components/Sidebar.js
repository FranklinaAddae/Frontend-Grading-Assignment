import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FaClipboardList } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="side-bar">
        <div className="dashboard">
            <Link className='links' to="/dashboard">
                <FaClipboardList className='dashboard-icon' /> {/* Use the desired icon component */}
                <span>Dashboard</span>
            </Link>
        </div>
        <Link className='links' to="/GradeReportPage">
            <div className="dashboard">
                <FaFileAlt className='dashboard-icon' /> {/* Use the desired icon component */}
                <span>Transcript</span>
            </div>
        </Link>
        <Link className='links' to="/MissingGradeForm">
            <div className="dashboard">
                <FaFileSignature className='dashboard-icon'/> {/* Use an appropriate icon component */}
                <span>Report</span>
            </div>
        </Link>
        <Link className='links' to="/ContactPage">
            <div className="dashboard">
                <FaAddressBook className='dashboard-icon' /> {/* Use the contact icon component */}
                <span>Contact</span>
            </div>
        </Link>
     </div>
  )
}

export default Sidebar