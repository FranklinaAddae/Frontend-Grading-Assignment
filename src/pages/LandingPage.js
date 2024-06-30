import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
    const studentInfo = [
        { label: 'Name', value: 'Franklina Addae', id: 'name' },
        { label: 'Gender', value: 'Female', id: 'gender' },
        { label: 'ID', value: '11262526', id: 'id' },
        { label: 'Program', value: 'Computer Science', id: 'program' },
        { label: 'Year Enrolled', value: '2030', id: 'year' }
      ];
  return (
    <section className="landing-page">
        <Link to="/Homepage">
          <FaSignOutAlt className='logout-icon'/>
        </Link>
        <Header />
        <div className="page-content">
            <Sidebar />
            <div className="profile">
            <div className="profile-page">
      <div className="profile-picture">
      <FaUserCircle className='photo' /> {/* Adjust size as needed */}
      </div>
      <div className="student-info">
        <ul>
          {studentInfo.map((item) => (
            <li key={item.id}>
              <div className="info-item">
                <span className="info-label">{item.label}:</span>
                <span className="info-value">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
            </div>
        </div>
        <Footer />
    </section>

  )
}

export default LandingPage