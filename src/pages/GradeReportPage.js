import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { RiSearchLine } from 'react-icons/ri';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const GradeReportPage = () => {
  const [courses] = useState([
    { id: 1, level: 100, semester: 1, name: 'Critical Thinking and Practical Reasoning', grade: 'A' },
    { id: 2, level: 100, semester: 1, name: 'Introduction to Computer Science', grade: 'B' },
    { id: 3, level: 100, semester: 1, name: 'Office Productivity Tools', grade: 'C' },
    { id: 4, level: 100, semester: 1, name: 'Mathematics for IT Professionals', grade: 'A' },
    { id: 5, level: 100, semester: 1, name: 'Introduction to Economics I', grade: 'B' },
    { id: 6, level: 100, semester: 1, name: 'Introduction to Statistics and Probability', grade: 'C' },
    { id: 7, level: 100, semester: 2, name: 'Academic Writing I', grade: 'A' },
    { id: 8, level: 100, semester: 2, name: 'Computer Hardware Fundamentals and Circuits', grade: 'B' },
    { id: 9, level: 100, semester: 2, name: 'Programming Fundamentals', grade: 'C' },
    { id: 10, level: 100, semester: 2, name: 'Introduction to Economics II', grade: 'A' },
    { id: 11, level: 100, semester: 2, name: 'Introduction to Statistics and Probability II', grade: 'B' },
    { id: 12, level: 100, semester: 2, name: 'Calculus I', grade: 'C' },
    // Add more courses for levels 200, 300, and 400
    { id: 13, level: 200, semester: 1, name: 'Programming Fundamentals', grade: 'A' },
    { id: 14, level: 200, semester: 1, name: 'Digital Systems and Logic Design', grade: 'B' },
    { id: 15, level: 200, semester: 1, name: 'Multi Media and Web Design', grade: 'C' },
    { id: 16, level: 200, semester: 1, name: 'Computer Organization and Architecture', grade: 'A' },
    { id: 17, level: 200, semester: 1, name: 'E-Business Architectures', grade: 'B' },
    { id: 18, level: 200, semester: 1, name: 'Academic Writing II', grade: 'C' },
    { id: 19, level: 200, semester: 2, name: 'Course 7', grade: 'A' },
    { id: 20, level: 200, semester: 2, name: 'Course 8', grade: 'B' },
    { id: 21, level: 200, semester: 2, name: 'Course 9', grade: 'C' },
    { id: 22, level: 200, semester: 2, name: 'Course 10', grade: 'A' },
    { id: 23, level: 200, semester: 2, name: 'Course 11', grade: 'B' },
    { id: 24, level: 200, semester: 2, name: 'Course 12', grade: 'C' },

    { id: 25, level: 300, semester: 1, name: 'Course 7', grade: '' },
    { id: 26, level: 300, semester: 1, name: 'Course 7', grade: '' },
    { id: 27, level: 300, semester: 1, name: 'Course 7', grade: 'A' },
    { id: 28, level: 300, semester: 1, name: 'E-Business Architectures', grade: 'B' },
    { id: 29, level: 300, semester: 1, name: 'Academic Writing II', grade: 'C' },
    { id: 30, level: 300, semester: 2, name: 'Course 7', grade: 'A' },
    { id: 31, level: 300, semester: 2, name: 'Course 8', grade: 'B' },
    { id: 32, level: 300, semester: 2, name: 'Course 9', grade: 'C' },
    { id: 33, level: 300, semester: 2, name: 'Course 10', grade: 'A' },
    { id: 34, level: 300, semester: 2, name: 'Course 11', grade: 'B' },
    { id: 35, level: 300, semester: 2, name: 'Course 12', grade: 'C' }
    
  ]);

  const [selectedLevel, setSelectedLevel] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLevelChange = (event) => {
    setSelectedLevel(parseInt(event.target.value));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.level === selectedLevel &&
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const semesters = Array.from(
    new Set(filteredCourses.map((course) => course.semester))
  );

  return (
    <div>
        <Header />
        <Link to="/Homepage">
          <FaSignOutAlt className='logout-icon'/>
      </Link>
      <Link to="/LandingPage">
        <AccountCircleIcon className='user-icon' style={{ fontSize: 40 }} /> <span className='user-id'>11262526</span>
      </Link>
        <div className='grades-page'>
        <Sidebar />
        <div className="grade-report">
        <h1 className='grades-page-title'>Grade Report</h1>
           <div className="table-section">
             {/* Level filter */}
             <select value={selectedLevel} onChange={handleLevelChange}>
                <option value={100}>Level 100</option>
                <option value={200}>Level 200</option>
                <option value={300}>Level 300</option>
                <option value={400}>Level 400</option>
             </select>

                {/* Search bar */}
            <div className='searchbar'>
                <input
                type="text"
                placeholder="Search by course name"
                value={searchTerm}
                onChange={handleSearch}
                />
                <RiSearchLine className='search-icon' />
            </div>

                {/* Course list */}
                <div className="table-container">
                    <table className="grade-table">
                    <thead>
                        <tr>
                        <th>Course Name</th>
                        <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semesters.map((semester) => (
                        <React.Fragment key={semester}>
                            <tr>
                            <th
                                colSpan="2"
                                className="semester-header"
                            >
                                Semester {semester}
                            </th>
                            </tr>
                            {filteredCourses
                            .filter((course) => course.semester === semester)
                            .map((course) => (
                                <tr
                                key={course.id}
                                className={`level-${course.level} semester-${course.semester}`}
                                >
                                <td>{course.name}</td>
                                <td>{course.grade}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div> 
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default GradeReportPage;
