import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBell } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [studentGrades] = useState([
    { course: 'Math', grade: null },
    { course: 'Science', grade: 'A' },
    { course: 'History', grade: 'B' },
    // Additional sample grades
    { course: 'English', grade:null },
    { course: 'Physics', grade: null },
    { course: 'Econs', grade: "A" },
    { course: 'Stat', grade: 'A' },
  ]);

  useEffect(() => {
    checkMissingGrades();
  }, []);

  const [missingGradesNotification, setMissingGradesNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const checkMissingGrades = () => {
    const missingGrades = studentGrades.filter((grade) => grade.grade === null);

    if (missingGrades.length > 0) {
      setMissingGradesNotification(missingGrades.length);
    }
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <section className="dashboard-page">
      <Header />
      <Link to="/Homepage">
          <FaSignOutAlt className='logout-icon'/>
      </Link>
      <div className="board-section">
        <Sidebar />
        <div className="right-content">
          <div className="report">
            <h1>Student Grade Report</h1>
            <div className="grades-container">
            <div className="notifications-container">
              <div className="notification-icon" onClick={handleNotificationClick}>
                <FaExclamationCircle />
                {missingGradesNotification > 0 && (
                  <div className="badge-container">
                    <span className="notification-badge">{missingGradesNotification}</span>                    
                  </div>
                )}
              </div>
              {showNotification && (
                <div className="notification">
                  {missingGradesNotification > 0 ? (
                    <span>You have {missingGradesNotification} missing grade(s).</span>
                  ) : (
                    <span>No missing grades.</span>
                  )}
                </div>
              )}
            </div>
              <h2>
                <span>Academic Year: </span>
                <span>2022/2023</span>
                <span className='current-sem'>First Semester</span>
              </h2>
              <ul className="grade-list">
                {studentGrades.map((grade, index) => (
                  <li key={index}>
                    <span className="course-title">{`${grade.course}:`}</span>
                    <span className="grade">{`${grade.grade !== null ? grade.grade : 'N/A'}`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="notice-board">
         <header>
          <span className="notice-board-title">Notice Board</span>
          <span className="bell-icon"><FaBell /> </span>
        </header>
         <div className="announcements">
            <ul className="notifications-list">
              <li className="message">
                <h4>Extension alert</h4>
                <span className='info'>New deadline for missing grade submissions is 5th Jan., 2023. Act promptly!</span>
              </li>
              <li className="message">
                <h4>Grade Rectification Process</h4>
                <span className='info'>Instructors reviewing reported missing grades. Expect updates soon. Thank you for your patience.</span>
              </li>
              <li className="message">
                <h4>Maintenance Notice</h4>
                <span className='info'> System update from 23rd Dec., 2023. Apologies for temporary unavailability.</span>
              </li>
              <li className="message">
                <h4>Maintenance Notice</h4>
                <span className='info'> System update from 23rd Dec., 2023. Apologies for temporary unavailability.</span>
              </li>
              <li className="message">
                <h4>Maintenance </h4>
                <span className='info'>Your feedback matters! Share your thoughts on the reporting system. Help us serve you better. </span>
              </li>
            </ul>
         </div>
      </div>
      </div>
      <Footer />
    </section>
  )
}

export default Dashboard;