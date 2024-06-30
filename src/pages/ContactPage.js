import React, { useState } from 'react';
import Header from '../components/Header';
import { FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Dummy data of instructors
const instructorsData = [
  { id: 1, name: 'Dr. Benedicta Addae', email: 'dictaddy@gmail.com' },
  { id: 2, name: 'Dr. Christopher Martin Amissah', email: 'chrismartin306@gmail.com' },
  { id: 3, name: 'Dr. Ferdinand', email: 'ferdinand222@gmail.com' },
  { id: 4, name: 'Prof. Bryan', email: 'cobibryan306@gmail.com' },
  // Add more instructors here
];

const ContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  // Function to handle selecting an instructor
  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(selectedInstructor === instructor ? null : instructor);
    setEmailContent('');
  };

  // Function to simulate sending an email
  const sendEmail = () => {
    if (selectedInstructor) {
      console.log(`Simulated email sent to ${selectedInstructor.email} with content:\n${emailContent}`);
      setEmailContent('');
    }
  };

  return (
    <div className='contact-instructor-page'>
      <Header />
      <Link to="/DashboardPage">
          <FaSignOutAlt className='logout-icon'/>
      </Link>
      <Link to="/LandingPage">
        <AccountCircleIcon className='user-icon' style={{ fontSize: 40 }} /> <span className='user-id'>11262526</span>
      </Link>
      <div className="contact-instructor-container-custom">
        <h1 className='contactpage-title'>Contact Instructors</h1>
        <div className="instructors-list-custom">
          {instructorsData.map((instructor) => (
            <div key={instructor.id} className="instructor-item-custom">
              <div className="instructor-details-custom">
                <h2>{instructor.name}</h2>
                <p>Email: {instructor.email}</p>
              </div>
              <button onClick={() => handleInstructorSelect(instructor)} className="contact-btn-custom">
                Contact
              </button>
              {selectedInstructor && selectedInstructor.id === instructor.id && (
                <div className="email-section-custom">
                  <textarea
                    className="email-textarea-custom"
                    placeholder="Compose your message..."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows={8}
                    cols={50}
                  />
                  <button className="send-email-btn-custom" onClick={sendEmail}>
                    Send Email (Simulated)
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
