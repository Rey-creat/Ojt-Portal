import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faTasks, faBriefcase, faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Profile.css'; // Import the CSS file for styling
import Header from '../header/Header';
import { NotificationContainer, NotificationManager } from 'react-notifications'; // Import notifications
import 'react-notifications/lib/notifications.css'; // Import the CSS for notifications

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    nationality: '',
    civilStatus: '',
    course: '',
    yearLevel: '',
    major: '',
    school: '',
    schoolAddress: '',
    gpa: '',
    yearStarted: '',
    graduationDate: ''
  });

  const [updateMessage, setUpdateMessage] = useState(''); // State for the update confirmation message

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);

    // Use NotificationManager for success message instead of alert
    NotificationManager.success('Profile updated successfully!', 'Success', 3000);
    
    setUpdateMessage('');
    
    setTimeout(() => {
      setUpdateMessage(''); // Clear the message after 3 seconds
    }, 3000);
  };

  return (
    <div className="user-container">
      <Header />
      <div className="main-content">
        <div className="items-container">
          <h2 className="welcome-message">Welcome Student</h2>
          <Link to="/studentdashboard" className="item home">
            <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
          </Link>
          <Link to="/profile" className="item home">
            <FontAwesomeIcon icon={faUser} /> PROFILE
          </Link>
          <Link to="/opportunities" className="item profile">
            <FontAwesomeIcon icon={faBriefcase} /> OJT OPPORTUNITIES
          </Link>
          <Link to="/studenttasks" className="item profile">
            <FontAwesomeIcon icon={faTasks} /> TASK
          </Link>
          <a href="/report" className="item forms">
            <FontAwesomeIcon icon={faEye} /> VIEW REPORT
          </a>
          <a href="/student" className="item logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
          </a>
        </div>

        {/* Profile form section */}
        <div className="profile-forms-containers">

          <div className="profile-section">
            {/* Personal Information */}
            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="forms-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your Full Name"
                  value={profile.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="MM/DD/YYYY"
                  value={profile.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Enter your Age"
                  value={profile.age}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  placeholder="Male/Female/Other"
                  value={profile.gender}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your Address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your Phone Number"
                  value={profile.contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Enter your Nationality"
                  value={profile.nationality}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="civilStatus">Civil Status</label>
                <input
                  type="text"
                  id="civilStatus"
                  name="civilStatus"
                  placeholder="Single/Married/etc."
                  value={profile.civilStatus}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Educational Background */}
            <div className="educational-info">
              <h3>Educational Background</h3>
              <div className="forms-group">
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  placeholder="Bachelor of Science in IT"
                  value={profile.course}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="yearLevel">Year Level</label>
                <input
                  type="text"
                  id="yearLevel"
                  name="yearLevel"
                  placeholder="e.g., 3rd Year"
                  value={profile.yearLevel}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="major">Major/Focus</label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  placeholder="e.g., Software Development"
                  value={profile.major}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="school">School/University</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  placeholder="Name of School"
                  value={profile.school}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="schoolAddress">School Address</label>
                <input
                  type="text"
                  id="schoolAddress"
                  name="schoolAddress"
                  placeholder="Complete School Address"
                  value={profile.schoolAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="gpa">GPA</label>
                <input
                  type="text"
                  id="gpa"
                  name="gpa"
                  placeholder="Your GPA (if applicable)"
                  value={profile.gpa}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="yearStarted">Year Started</label>
                <input
                  type="text"
                  id="yearStarted"
                  name="yearStarted"
                  placeholder="Year you started"
                  value={profile.yearStarted}
                  onChange={handleChange}
                />
              </div>

              <div className="forms-group">
                <label htmlFor="graduationDate">Expected Graduation</label>
                <input
                  type="text"
                  id="graduationDate"
                  name="graduationDate"
                  placeholder="Expected Graduation Date"
                  value={profile.graduationDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Show success message */}
          {updateMessage && <div className="update-message">{updateMessage}</div>}

          <button onClick={handleSubmit} type="button" className="update-btn">Update Profile</button>
        </div>
      </div>

      {/* Notification Container for displaying notifications */}
      <NotificationContainer />
    </div>
  );
};

export default Profile;
