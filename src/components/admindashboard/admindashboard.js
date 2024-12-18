import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers,faTasks , faFile,faBriefcase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './admindashboard.css';
import Header from '../header/Header';

const Admin = () => {
  return (
    <div className="user-container">
      {/* Include Header here */}
      <Header />

      {/* Sidebar */}
      <div className="items-container">
        <h2 className="welcome-message">Welcome Admin</h2>

        {/* Sidebar Links */}
        <Link to="/admindashboard" className="item home">
          <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
        </Link>
        <Link to="/manageuser" className="item profile">
          <FontAwesomeIcon icon={faUsers} /> MANAGE STUDENTS
        </Link>
        <Link to="/adminojtopportunities" className="item profile">
          <FontAwesomeIcon icon={faBriefcase} /> MANAGE OJT
        </Link>
        <Link to="/admintask" className="item profile">
          <FontAwesomeIcon icon={faTasks } /> TASK
        </Link>
        <a href="/adminreport" className="item report">
          <FontAwesomeIcon icon={faFile} /> REPORTS
        </a>
        <a href="/admin" className="item logout">
          <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
        </a>
      </div>

      {/* Cards Section */}
      <div className="cardssssssssss-admin">
        <div className="cardssssssssss">
          <h4>Total Students</h4>
          <p>1,200</p> {/* Replace with dynamic data */}
        </div>
        <div className="cardssssssssss">
          <h4>Total Companies</h4>
          <p>33</p> {/* Replace with dynamic data */}
        </div>
        <div className="cardssssssssss">
          <h4>Active Opportunities</h4>
          <p>25</p> {/* Replace with dynamic data */}
        </div>
        <div className="cardssssssssss">
          <h4>Applications Pending</h4>
          <p>10</p> {/* Replace with dynamic data */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
