import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTasks, faClock, faTachometerAlt, faUsers, faBriefcase, faFile, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Task.css';
import Header from '../header/Header';
import { NotificationContainer, NotificationManager } from 'react-notifications';  // Import NotificationManager and NotificationContainer
import 'react-notifications/lib/notifications.css'; 

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Research ',
      student: 'Donal Trump',
      date: '2024-11-01',
      dueDate: '2025-6-1',
      status: 'Pending',
    },
  ]);
  const handleApprove = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: 'Approved' } : task
    ));
    NotificationManager.success('Task has been approved successfully!', 'Task Approved', 3000);
  };
  
  const handleReject = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: 'Rejected' } : task
    ));
    NotificationManager.error('Task has been rejected!', 'Task Rejected', 3000);
  };

  return (
    <div className="task-container">
      {/* Include Header */}
      <Header />
  
      {/* Sidebar */}
      <div className="main-content">
        <div className="items-container">
          <h2 className="welcome-message">Welcome Admin</h2>
          <Link to="/admindashboard" className="item">
            <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
          </Link>
          <Link to="/manageuser" className="item">
            <FontAwesomeIcon icon={faUsers} /> MANAGE STUDENTS
          </Link>
          <Link to="/adminojtopportunities" className="item">
            <FontAwesomeIcon icon={faBriefcase} /> MANAGE OJT
          </Link>
          <Link to="/admintask" className="item">
            <FontAwesomeIcon icon={faTasks} /> TASK
          </Link>
          <Link to="/adminreport" className="item">
            <FontAwesomeIcon icon={faFile} /> REPORTS
          </Link>
          <a href="/admin" className="item">
            <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
          </a>
        </div>
      </div>
  
      {/* Main Content */}
      <div className="task-bgs">
        <div className="task-header">
          <h2>Tasks</h2>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Student</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.student}</td>
                <td>{new Date(task.date).toLocaleDateString('en-CA')}</td>
                <td>{new Date(task.dueDate).toLocaleDateString('en-CA')}</td>
                <td className={`status ${task.status.toLowerCase()}`}>
                  {task.status}
                </td>
                <td className="action-icons">
                  {task.status === 'Pending' && (
                    <>
                      <button 
                        className="approve-btn" 
                        onClick={() => handleApprove(task.id)}
                      >
                        <FontAwesomeIcon icon={faCheck} /> Approve
                      </button>
                      <button 
                        className="reject-btn" 
                        onClick={() => handleReject(task.id)}
                      >
                        <FontAwesomeIcon icon={faTimes} /> Reject
                      </button>
                    </>
                  )}
                  {task.status === 'Overdue' && (
                    <span className="overdue-icon">
                      <FontAwesomeIcon icon={faClock} /> Overdue
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Notification Container to show notifications */}
      <NotificationContainer />
    </div>
  );
};

export default Task;
