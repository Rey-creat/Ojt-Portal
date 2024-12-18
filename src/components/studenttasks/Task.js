import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBriefcase,faTasks, faTachometerAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Task.css';
import Header from '../header/Header';

const StudentTask = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Research',
      student: 'Donald Trump',
      date: '2024-11-01',
      dueDate: '2025-06-01',
      status: 'Pending',
    },
  ]);

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
        </div>

      {/* Main Content */}
      <div className="student-task-content">
        <div className="student-task-header">
        </div>
        <table className="student-task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Student</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Status</th>
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
                <td className={`student-status ${task.status.toLowerCase()}`}>
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTask;
