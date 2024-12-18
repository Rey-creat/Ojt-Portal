import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faTasks, faBriefcase, faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './Opportunities.css';
import Header from '../header/Header';

const User = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [showForm, setShowForm] = useState(false);

  const schools = {
    SARFAID: [
      { name: 'Architectural Design Studio', positions: ['Assistant Architect', 'Design Assistant', 'Project Coordinator'] },
      { name: 'Interior Inspirations', positions: ['Interior Assistant', 'Design Consultant', 'Project Manager'] },
      { name: 'Bacolod Space Planners', positions: ['Junior Architect', 'Planning Assistant', 'Site Coordinator'] },
      { name: 'Urban Planning Associates', positions: ['Urban Designer', 'Planning Assistant', 'Project Manager'] },
      { name: 'Creative Structures', positions: ['Junior Architect', 'Design Assistant', 'Project Coordinator'] },
      { name: 'Green Architecture Firm', positions: ['Consultant', 'Architectural Assistant', 'Project Architect'] }
    ],
    SBIT: [
      { name: 'LCCB IT Department', positions: ['IT Assistant', 'Software Developer', 'Support Specialist'] },
      { name: 'Negros Women Foundation', positions: ['IT Assistant', 'Web Developer', 'System Analyst'] },
      { name: 'Focus IT Solutions', positions: ['Junior Developer', 'UI/UX Designer', 'Technical Support'] },
      { name: 'Tech Innovations', positions: ['Full Stack Developer', 'System Administrator', 'Network Specialist'] },
      { name: 'Digital Solutions', positions: ['Software Engineer', 'Web Developer', 'Database Administrator'] },
      { name: 'FutureTech Enterprises', positions: ['Junior Web Developer', 'Tech Support Specialist', 'QA Engineer'] }
    ],
  
    SHTM: [
      { name: 'Seda Capitol Central', positions: ['Hotel Assistant', 'F&B Intern', 'Customer Service'] },
      { name: 'Sugarland Hotel', positions: ['Assistant Manager', 'Room Service Staff', 'Event Coordinator'] },
      { name: 'L’Fisher Hotel', positions: ['Concierge Assistant', 'Marketing Intern', 'Event Planner'] },
      { name: 'Park Inn by Radisson', positions: ['F&B Assistant', 'Room Attendant', 'Event Assistant'] },
      { name: 'The Residence Hotel', positions: ['Guest Services Associate', 'Concierge Intern', 'Event Coordinator'] },
      { name: 'The Manor Hotel', positions: ['Housekeeping Assistant', 'Event Staff', 'Front Desk Intern'] }
    ],
  
    SSLATE: [
      { name: 'La Consolacion College Bacolod', positions: ['Teaching Assistant', 'Research Assistant', 'Event Coordinator'] },
      { name: 'University of St. La Salle', positions: ['Admin Assistant', 'Research Intern', 'Marketing Assistant'] },
      { name: 'Negros Museum', positions: ['Exhibit Assistant', 'Event Coordinator', 'Marketing Intern'] },
      { name: 'Arts Foundation', positions: ['Event Coordinator', 'Art Curator', 'Exhibit Assistant'] },
      { name: 'Bacolod City Library', positions: ['Library Assistant', 'Research Intern', 'Event Coordinator'] },
      { name: 'National Museum', positions: ['Museum Assistant', 'Curatorial Intern', 'Marketing Coordinator'] }
    ]
  };

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
    setShowForm(false); // Reset form visibility when changing school
  };

  const handleApplyClick = (job, position) => {
    setSelectedJob(`${job.name} - ${position}`);
    setShowForm(true); // Show form when Apply button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success notification
    NotificationManager.success('Application submitted!', 'Success');
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="user-container">
      <Header />
      <div className="main-content">
        <div className="opportunities-selector">
          <div className="school-selector">
            <label htmlFor="school">Select Department:</label>
            <select id="school" value={selectedSchool} onChange={handleSchoolChange}>
              <option value="">Select Department</option>
              {Object.keys(schools).map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="items-container">
          <h2 className="welcome-message">Welcome Student</h2>
          <a href="studentdashboard" className="item dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
          </a>
          <a href="profile" className="item dashboard">
            <FontAwesomeIcon icon={faUser} /> PROFILE
          </a>
          <a href="opportunities" className="item profile">
            <FontAwesomeIcon icon={faBriefcase} /> OJT OPPORTUNITIES
          </a>
          <a href="studenttasks" className="item profile">
            <FontAwesomeIcon icon={faTasks} /> TASK
          </a>
          <a href="report" className="item forms">
            <FontAwesomeIcon icon={faEye} /> VIEW REPORT
          </a>
          <a href="/student" className="item logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
          </a>
        </div>

        {/* Cards section */}
        {selectedSchool && (
          <div className="cards-container">
            {schools[selectedSchool].map((job) => (
              <div key={job.name} className="card">
                <h3 className="job-title">{job.name}</h3>
                {job.positions.map((position) => (
                  <button
                    key={position}
                    className="apply-btn"
                    onClick={() => handleApplyClick(job, position)}
                  >
                    Apply for {position}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}

        {showForm && selectedJob && (
          <div className="form-container">
            <h3>Application Form for {selectedJob}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                {/* ID */}
                <div className="form-group">
                  <label htmlFor="id">ID:</label>
                  <input type="text" id="id" name="id" placeholder="Enter your ID" required />
                </div>

                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                </div>

                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                </div>

                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" className="custom-select-height" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                {/* Role */}
                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input type="text" id="role" name="role" placeholder="Enter your role" required />
                </div>

                {/* Department */}
                <div className="form-group">
                  <label htmlFor="department">Department:</label>
                  <input type="text" id="department" name="department" placeholder="Enter your department" required />
                </div>

                {/* Course */}
                <div className="form-group">
                  <label htmlFor="course">Course:</label>
                  <input type="text" id="course" name="course" placeholder="Enter your course" required />
                </div>

                {/* Date Applied */}
                <div className="form-group">
                  <label htmlFor="dateApplied">Date Applied:</label>
                  <input type="date" id="dateApplied" name="dateApplied" className="date-input" required />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        )}
      </div>

      {/* Notification Container */}
      <NotificationContainer />
    </div>
  );
};

export default User;
