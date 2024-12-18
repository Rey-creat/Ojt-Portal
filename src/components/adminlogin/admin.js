import React, { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (username && password && (isSignUp ? password === confirmPassword : true)) {
      if (isSignUp) {
        // Handle signup (you can add signup logic here)
        navigate('/admindashboard');
      } else {
        // Handle login and redirect to admin dashboard
        navigate('/admindashboard');
      }
    } else {
      setError('Please fill in all fields correctly.');
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true); // Switch to signup form
  };

  const handleLoginClick = () => {
    setIsSignUp(false); // Switch back to login form
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <div className="login-image-container">
            {/* Add any image or leave empty if not needed */}
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2>{isSignUp ? 'REGISTER' : 'ADMIN'}</h2>
              {error && <p className="error-message">{error}</p>}
              <div>
                <label htmlFor="username">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  Username
                </label>
                <input
                type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <FontAwesomeIcon icon={faLock} className="icon" />
                  Password
                </label>
                <input
                type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength="6"
                />
              </div>
              {isSignUp && (
                <div>
                  <label htmlFor="confirm-password">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    Confirm Password
                  </label>
                  <input
                   type="text"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    maxLength="6"
                  />
                </div>
              )}
              <div className="button-container">
                <button type="submit" className="login-button">
                  {isSignUp ? 'REGISTER' : 'LOGIN'}
                </button>
              </div>
            </form>
            <p className="sign-up-text" onClick={isSignUp ? handleLoginClick : handleSignUpClick}>
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "} <span>{isSignUp ? 'Login' : 'Sign up'}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForm;
