import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUsers, faTasks, faTachometerAlt, faBriefcase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FaPlus } from 'react-icons/fa';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './Manageuser.css';
import Header from '../header/Header';

const Manageuser = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([
    { 
      id: 1, firstName: 'Donald', lastName: 'Trump', gender: 'Male', role: 'Intern', department: 'SBIT', course: 'Information Technology', dateAdded: '2024-11-23' 
    },
  ]);

  const handleAddUser = () => {
    setShowForm(!showForm); // Toggle the form visibility when Add User is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      gender: e.target.gender.value,
      role: e.target.role.value,
      department: e.target.department.value,
      course: e.target.course.value,
      dateAdded: new Date().toLocaleDateString(),
    };
    setUsers([...users, newUser]);
    setShowForm(false); // Hide the form after submitting
    NotificationManager.success('User added successfully', 'Success');
  };

  const handleEdit = (id) => {
    console.log("Edit clicked for user ID:", id);
    NotificationManager.info(`Edit clicked for user ID: ${id}`, 'Edit User');
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
    NotificationManager.warning('User deleted successfully', 'Delete User');
  };

  return (
    <div className="user-container">
      <Header />
      <div className="main-content">
        <div className="items-container">
          <h2 className="welcome-message">Welcome Admin</h2>
          <a href="/admindashboard" className="item home">
            <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
          </a>
          <a href="/manageuser" className="item profile">
            <FontAwesomeIcon icon={faUsers} /> MANAGE STUDENTS
          </a>
          <a href="/adminojtopportunities" className="item profile">
            <FontAwesomeIcon icon={faBriefcase} /> MANAGE OJT 
          </a>
          <a href="/admintask" className="item profile">
            <FontAwesomeIcon icon={faTasks } /> TASK
          </a>
          <a href="adminreport" className="item report">
            <FontAwesomeIcon icon={faFile} /> REPORTS
          </a>
          <a href="/admin" className="item logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
          </a>
        </div>

        <div className="manage-user-bg">
          <div className="manage-user-container">
            <button className="add-user-btn" onClick={handleAddUser}>
              <FaPlus /> Add Student
            </button>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>{user.course}</td>
                    <td>{new Date(user.dateAdded).toLocaleDateString()}</td>
                    <td className="action-icons">
                      <button className="edit-btn" onClick={() => handleEdit(user.id)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the form */}
      {showForm && (
        <div className="form-container">
          <h3>Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="form-group">
                  <label htmlFor="id">ID:</label>
                  <input type="text" id="id" name="id" placeholder="Enter your ID" required />
                </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
              </div>

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
              <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" placeholder="Enter role" required />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" placeholder="Enter department" required />
              </div>

              <div className="form-group">
                <label htmlFor="course">Course:</label>
                <input type="text" id="course" name="course" placeholder="Enter course" required />
              </div>

              <div className="form-group">
          <label htmlFor="dateApplied">Date Applied:</label>
          <input type="date" id="dateApplied" name="dateApplied" className="date-input" required />
        </div>
      </div>

            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        </div>
      )}

      <NotificationContainer /> {/* Notification container */}
    </div>
  );
};

export default Manageuser;
