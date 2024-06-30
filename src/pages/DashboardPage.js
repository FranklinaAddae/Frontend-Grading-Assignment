import React, { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DashboardPage = () => {
  const [grades, setGrades] = useState([]);
  const [missingGradesCount, setMissingGradesCount] = useState(0);
  const [averageGrade, setAverageGrade] = useState(0);

  useEffect(() => {
    // Mocked student grades data
    const studentGrades = [
      { id: 1, subject: 'Programming Fundamentals', grade: 'A' },
      { id: 2, subject: 'Multi Media and Web Design', grade: 'B+' },
      { id: 3, subject: 'Digital Systems and Logic Design', grade: 'B' },
      { id: 4, subject: 'E-Business Architectures', grade: 'A' },
      { id: 5, subject: 'Computer Organization and Architecture', grade: 'A' },
      { id: 6, subject: 'Academic Writing II', grade: 'N/A' },
      { id: 7, subject: 'Machine Learning', grade: 'N/A' },
    ];

    setGrades(studentGrades);

    // Calculate missing grades count
    const missingCount = studentGrades.filter(grade => grade.grade === 'N/A').length;
    setMissingGradesCount(missingCount);

    // Calculate average grade considering 'N/A' grades as zeros
    const validGrades = studentGrades.map(grade => {
      return { ...grade, grade: grade.grade !== 'N/A' ? gradeValue(grade.grade) : 0 };
    });
    const sum = validGrades.reduce((acc, grade) => acc + grade.grade, 0);
    const average = validGrades.length > 0 ? sum / validGrades.length : 0;
    setAverageGrade(average);
  }, []);

  // Function to assign a value to each grade (for determining average)
  const gradeValue = (grade) => {
    switch (grade) {
      case 'A':
        return 4;
      case 'B':
        return 3;
      case 'C':
        return 2;
      case 'D':
        return 1;
      default:
        return 0; // Treat 'N/A' as zero
    }
  };

  // Function to determine color based on average grade
  const getProgressBarColor = () => {
    if (averageGrade === 0) {
      return 'red'; // No available grades, low performance
    } else if (averageGrade >= 3.5) {
      return 'green'; // High performance
    } else if (averageGrade >= 2.5) {
      return 'rgb(30, 66, 195)'; // Moderate performance
    } else {
      return 'red'; // Low performance
    }
  };

  return (
    <div>
      <Header />
      <Link to="/LandingPage">
        <AccountCircleIcon className='user-icon' style={{ fontSize: 40 }} /> <span className='user-id'>11262526</span>
      </Link>
      <Link to="/Homepage">
          <FaSignOutAlt className='logout-icon'/>
      </Link>
      <div className="board-page">
        <Sidebar />
        <div>
          <div className="dashboard-container">
            <h1>Student Dashboard</h1>
            <div className="grade-table">
              <h2>Grade Overview</h2>
              {/* Table displaying course name, grade, and alert for missing grades */}
              <table>
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Course Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map(grade => (
                    <tr key={grade.id}>
                      <td>{grade.subject}</td>
                      <td>{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="performance-bar">
              {/* Progress bar displaying overall performance */}
              <h2>Overall Performance</h2>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${(averageGrade / 4) * 100}%`, backgroundColor: getProgressBarColor() }}
                ></div>
              </div>
              <p>Average Grade: {averageGrade.toFixed(2)}</p>
            </div>
            <div className="missing-grades">
              {/* Alert section displaying missing grades */}
              <h2>Missing Grade Alerts</h2>
              <p className="missing-count">
                <FaExclamationCircle className="alert-icon" /> You have {missingGradesCount} Missing Grade(s)
              </p>
              <Link to="/MissingGradeForm">
                <button className="report-button">
                  Report Missing Grades
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
