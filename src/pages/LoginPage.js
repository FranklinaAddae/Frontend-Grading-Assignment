import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';

const LoginPage = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const validStudentIDRegex = /^\d{8}$/; // 8 digits
    const validPINRegex = /^\d{5}$/; // 5 digits

    if (!validStudentIDRegex.test(studentID) || !validPINRegex.test(pin)) {
      setErrorMessage('Invalid Student ID or PIN format. Please try again.');
      setLoggedIn(false); // Ensure loggedIn is set to false on incorrect details
    } else {
      // Mock authentication logic (replace with actual authentication)
      // Here, you can put the actual backend call to authenticate the user
      // For this example, let's just set loggedIn to true on successful login
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-page">
      {loggedIn && <Navigate to="/landingpage" />}
      <div className="login-container">
        <h1>Student Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="studentID">Student ID:</label>
            <input
              type="text"
              id="studentID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              pattern="\d{8}"
              title="Enter an 8-digit number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin">PIN:</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              pattern="\d{5}"
              title="Enter a 5-digit number"
              required
            />
          </div>
          {!loggedIn && (
            <button type="submit">Login</button>
          )}
        </form>
        {errorMessage && <p className="error-msg">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
