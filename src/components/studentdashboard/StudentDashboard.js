import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser,faTasks, faBriefcase, faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './StudentDashboard.css';
import Header from '../header/Header';
import sarfaidImage from '../images/SARFAID.png';
import sbitImage from '../images/SBIT.png';
import shtmImage from '../images/SHTM.png';
import sslateImage from '../images/SSLATE.png';

const User = () => {
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

        <div className="cards-grid">
          <div className="cards sarfaid">
            <img src={sarfaidImage} alt="SARFAID" className="card-image" />
            <div className="card-text">School of Architecture, Fine Arts & Interior Design</div>
          </div>
          <div className="cards sbit">
            <img src={sbitImage} alt="SBIT" className="card-image" />
            <div className="card-text">School of Business & Information Technology</div>
          </div>
          <div className="cards shtm">
            <img src={shtmImage} alt="SHTM" className="card-image" />
            <div className="card-text">School of Hospitality & Tourism Management</div>
          </div>
          <div className="cards sslate">
            <img src={sslateImage} alt="SSLATE" className="card-image" />
            <div className="card-text">School of Sciences, Liberal Arts & Teacher Education</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
