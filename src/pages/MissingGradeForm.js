import React, { useState } from "react";
import Header from "../components/Header";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';

function MissingGradeFormPage() {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or data processing here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setCourseName("");
      setInstructorName("");
      setExpectedGrade("");
      setExplanation("");
    }, 3000); // Change the value (in milliseconds) to adjust the duration of the confirmation message
  };

  return (
    <div>
      <Header />
      <Link to="/DashboardPage">
          <FaSignOutAlt className='logout-icon'/>
      </Link>
      <Link to="/LandingPage">
        <AccountCircleIcon className='user-icon' style={{ fontSize: 40 }} /> <span className='user-id'>11262526</span>
      </Link>
      <div className="report-form">
        <h2 className="form-title">Missing Grade Form</h2>
        <form className="missing-grade-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName" className="form-label">
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              className="form-input"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructorName" className="form-label">
              Instructor Name:
            </label>
            <input
              type="text"
              id="instructorName"
              className="form-input"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expectedGrade" className="form-label">
              Expected Grade:
            </label>
            <input
              type="text"
              id="expectedGrade"
              className="form-input"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="explanation" className="form-label">
              Explanation:
            </label>
            <textarea
              id="explanation"
              className="form-textarea"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="form-submit-button">
            Submit
          </button>

          {isSubmitted && (
            <p className="confirmation-message">Thank you for reporting the missing grade!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default MissingGradeFormPage;
