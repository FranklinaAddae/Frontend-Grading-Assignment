import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Transcript = () => {
  // Simulated student data for demonstration
  const studentResults = [
    // Your student results data
    { level: '100', semester: '1', course: 'Introduction to Computer Science', grade: 'A' },
    { level: '100', semester: '1', course: 'Office Productivity Tools', grade: 'B' },
    { level: '100', semester: '2', course: 'Mathematics for IT Professionals', grade: 'A' },
    { level: '100', semester: '2', course: 'Introduction to Economics I', grade: 'B+' },
    { level: '100', semester: '2', course: 'Introduction to Statistics & Probability I', grade: 'B+' },

    { level: '200', semester: '1', course: 'Mathematics', grade: 'A' },
    { level: '200', semester: '1', course: 'English', grade: 'B' },
    { level: '200', semester: '2', course: 'Physics', grade: 'A' },
    { level: '200', semester: '2', course: 'Chemistry', grade: 'B+' },
    // Add more student results here for different levels and semesters
    { level: '300', semester: '1', course: 'Operating Systems', grade: 'A' },
    { level: '300', semester: '1', course: 'Computer Networks', grade: 'A' },
    { level: '300', semester: '2', course: 'Database Fundamentals', grade: 'A' },
    { level: '300', semester: '2', course: 'Introduction to Artificial Intelligence', grade: 'A' },
    { level: '300', semester: '2', course: 'IT Project Management', grade: 'A' },

    { level: '400', semester: '1', course: 'Introduction to Computer Science', grade: 'A' },
    { level: '400', semester: '1', course: 'Office Productivity Tools', grade: 'B' },
    { level: '400', semester: '2', course: 'Mathematics for IT Professionals', grade: 'A' },
    { level: '400', semester: '2', course: 'Introduction to Economics I', grade: 'B+' },
    { level: '400', semester: '2', course: 'Introduction to Statistics & Probability I', grade: 'B+' },
  ];

  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Filter and set default state to level '100' courses when component mounts
    const level100Courses = studentResults.filter(result => result.level === '100');
    setFilteredResults(level100Courses);
  }, []); // Empty dependency array to run this effect only once on mount

  const filterResults = (level) => {
    const filtered = studentResults.filter((result) => result.level === level);
    setFilteredResults(filtered);
  };

  const renderSecondSemesterList = () => {
    const secondSemesterLists = [];

    for (let i = 100; i <= 400; i += 100) {
      const levelCourses = filteredResults.filter(result => result.level === `${i}`);
      const secondSemesterCourses = levelCourses.filter(course => course.semester === '2');

      if (secondSemesterCourses.length > 0) {
        secondSemesterLists.push(
          <div key={i}>
            <h1 className="semester">Second Semester - Level {i}</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {secondSemesterCourses.map((result, index) => (
                <li key={index}>
                  <span className='course-title'>{result.course}</span>
                  <span className='grade'>{result.grade}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }

    return secondSemesterLists;
  };

/*const Transcript = () => {
  // Simulated student data for demonstration
  const studentResults = [
    { level: '100', semester: '1', course: 'Introduction to Computer Science', grade: 'A' },
    { level: '100', semester: '1', course: 'Office Productivity Tools', grade: 'B' },
    { level: '100', semester: '2', course: 'Mathematics for IT Professionals', grade: 'A' },
    { level: '100', semester: '2', course: 'Introduction to Economics I', grade: 'B+' },
    { level: '100', semester: '2', course: 'Introduction to Statistics & Probability I', grade: 'B+' },

    { level: '200', semester: '1', course: 'Mathematics', grade: 'A' },
    { level: '200', semester: '1', course: 'English', grade: 'B' },
    { level: '200', semester: '2', course: 'Physics', grade: 'A-' },
    { level: '200', semester: '2', course: 'Chemistry', grade: 'B+' },
    // Add more student results here for different levels and semesters
    { level: '300', semester: '1', course: 'Operating Systems', grade: 'A' },
    { level: '300', semester: '1', course: 'Computer Networks', grade: 'A' },
    { level: '300', semester: '2', course: 'Database Fundamentals', grade: 'A' },
    { level: '300', semester: '2', course: 'Introduction to Artificial Intelligence', grade: 'A' },
    { level: '300', semester: '2', course: 'IT Project Management', grade: 'A' },

    { level: '400', semester: '1', course: 'Introduction to Computer Science', grade: 'A' },
    { level: '400', semester: '1', course: 'Office Productivity Tools', grade: 'B' },
    { level: '400', semester: '2', course: 'Mathematics for IT Professionals', grade: 'A' },
    { level: '400', semester: '2', course: 'Introduction to Economics I', grade: 'B+' },
    { level: '400', semester: '2', course: 'Introduction to Statistics & Probability I', grade: 'B+' },
  ];

  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Filter and set default state to level '100' courses when component mounts
    const level100Courses = studentResults.filter(result => result.level === '100');
    setFilteredResults(level100Courses);
  }, []); // Empty dependency array to run this effect only once on mount

  const filterResults = (level) => {
    const filtered = studentResults.filter((result) => result.level === level);
    setFilteredResults(filtered);
  };
*/

return (
  <div className="transcript-page">
    <Header />
    <div className="page-content">
      <Sidebar />
      <div className='results-page'>
        {/* Level filter buttons */}
        <div className="level-filter">
          <p>Filter Levels</p>
          <button onClick={() => filterResults('100')}>Level 100</button>
          <button onClick={() => filterResults('200')}>Level 200</button>
          <button onClick={() => filterResults('300')}>Level 300</button>
          <button onClick={() => filterResults('400')}>Level 400</button>
        </div>

        {/* Results container */}
        <div id="resultsContainer" className='results-container'>
          <h1 className="semester">First Semester</h1>
          {filteredResults.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredResults.map((result, index) => (
                <li key={index}>
                  <span className='course-title'>{result.course}</span>
                  <span className='grade'>{result.grade}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Second semester lists for each level */}
          {renderSecondSemesterList()}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Transcript;

 /* return (
    <div className="transcript-page">
        <div className="page-content">
                <Sidebar />
                <div className='results-page'>
                {/* Level filter buttons *//*}
/*                <div className="level-filter">
                    <p>Filter Levels</p>
                    <button onClick={() => filterResults('100')}>Level 100</button>
                    <button onClick={() => filterResults('200')}>Level 200</button>
                    <button onClick={() => filterResults('300')}>Level 300</button>
                    <button onClick={() => filterResults('400')}>Level 400</button>
                </div>

                {/* Results container *//*}
/*                <div id="resultsContainer" className='results-container'>
                    <h1 className="semester">First Semester</h1>
                    {filteredResults.length === 0 ? (
                    <p>No results found.</p>
                    ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {filteredResults.map((result, index) => (
                        <li
                            key={index} >
                            <span className='course-title'>{result.course}</span>
                            <span className='grade'>{result.grade}</span>

                        </li>
                        ))}
                        <h1 className="semester">Second Semester</h1>
                    </ul>
                    )}
                </div>
            </div>
        </div>
    </div>

  );
};

export default Transcript;*/
