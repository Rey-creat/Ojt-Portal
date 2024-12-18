import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faTasks, faFile, faSignOutAlt, faPlus, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Importing the 'faBriefcase' icon for OJT
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css'; // Don't forget to import the CSS for the notifications
import './AdminOjtOpportunities.css';

// Sample data for OJT opportunities
const initialOpportunities = [
  { id: 1, title: 'Architectural Design ', appliedStudents: 0 },
  { id: 2, title: 'DataSpring Philippines', appliedStudents: 0 },
  { id: 3, title: 'Sugarland Hotel', appliedStudents: 0 },
  { id: 4, title: 'La Consolacion College ', appliedStudents: 0 },
];

const AdminOjtOpportunities = () => {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [showOjtContent, setShowOjtContent] = useState(true); // Set to true to show OJT content initially

  // Handle delete opportunity
  const handleDelete = (id) => {
    NotificationManager.info('Are you sure you want to delete this opportunity?', 'Confirm Delete', 3000, () => {
      setOpportunities(opportunities.filter((opp) => opp.id !== id));
      NotificationManager.success('Opportunity deleted successfully', 'Deleted');
    });
  };

  // Handle add new opportunity
  const handleAdd = () => {
    const newOpportunity = {
      id: opportunities.length + 1,
      title: 'New Opportunity',
      appliedStudents: 0,
    };
    setOpportunities([...opportunities, newOpportunity]);
    NotificationManager.success('New opportunity added successfully', 'Success');
  };

  return (
    <div className="admin-ojt-container ">
      <Header />
      <div className="main-content">
        <div className="items-container">
          <h2 className="welcome-message">Welcome Admin</h2>
          <Link to="/admindashboard" className="item dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
          </Link>
          <Link to="/manageuser" className="item profile">
            <FontAwesomeIcon icon={faUsers} /> MANAGE STUDENTS
          </Link>
          <Link to="/adminojtopportunities" className="item profile">
            <FontAwesomeIcon icon={faBriefcase} /> MANAGE OJT {/* Added the icon here */}
          </Link>
          <Link to="/admintask" className="item profile">
            <FontAwesomeIcon icon={faTasks} /> TASK {/* Added the icon here */}
          </Link>
          <Link to="/adminreport" className="item reports">
            <FontAwesomeIcon icon={faFile} /> REPORTS
          </Link>
          <Link to="/admin" className="item logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mains-contents">
        {showOjtContent && (
          <div className="ojt-content">
            <h2></h2>
            <button className="add-opportunity-btn" onClick={handleAdd}>
              <FontAwesomeIcon icon={faPlus} /> Add New Opportunity
            </button>
            <div className="ojt-list">
              {opportunities.map((opp) => (
                <div key={opp.id} className="ojt-card">
                  <div className="ojt-info">
                    <h3>{opp.title}</h3>
                    <p>{opp.appliedStudents} Students Applied</p>
                  </div>
                  <div className="ojt-actions">
                    <button className="delete-btn" onClick={() => handleDelete(opp.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Notification container for displaying notifications */}
      <NotificationContainer />
    </div>
  );
};

export default AdminOjtOpportunities;
