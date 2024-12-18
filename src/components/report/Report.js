import React from 'react';
import './Report.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser,faTasks, faBriefcase,faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header'; // Import Header

const Reports = () => {
  // Sample data for reports (you can replace this with actual data from your backend)
  const progressReport = [
    { week: 1, tasksCompleted: 1, totalTasks: 1, attendance: "Present" },
  ];

  // Sample evaluation data
  const evaluationData = [
    { category: 'Attendance', rating: 4.5 },
    { category: 'Performance', rating: 4.0 },
    { category: 'Participation', rating: 5.0 },
  ];

  // Sample time logs
  const timeLogs = [
    { date: "2024-11-01", hoursWorked: 8 },
  ];

  // Sample final grade
  const finalGrade = "92%";

  return (
    <div className="reports-container">
      <Header /> {/* Add Header component */}

      {/* Links section */}
      <div className="items-container">
        <h2 className="welcome-message">Welcome Student</h2>
        <a href="studentdashboard" className="item dashboard">
          <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
        </a>
        <a href="profile" className="item home">
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

      {/* Progress Report */}
      <div className="report-section">
  <h3 className="section-titless">Progress Report</h3>

  {/* Add Student 1 header */}
  <h3 className="student-title">Student 1</h3>

        <div className="cardss progress-report">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Tasks Completed</th>
                <th>Total Tasks</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {progressReport.map((report, index) => (
                <tr key={index}>
                  <td>{report.week}</td>
                  <td>{report.tasksCompleted}</td>
                  <td>{report.totalTasks}</td>
                  <td>{report.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evaluation Cards */}
      <div className="report-sections">
        <h3 className="section-titless">Evaluation</h3>
        <div className="evaluation-cards">
          {evaluationData.map((evaluation, index) => (
            <div key={index} className="evaluation-card">
              <h4>{evaluation.category}</h4>
              <p>Rating: {evaluation.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>

      {/* Time Log */}
      <div className="report-section">
        <h3 className="section-titless">Time Log</h3>
        <div className="cardss time-log-card">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Hours Worked</th>
              </tr>
            </thead>
            <tbody>
              {timeLogs.map((log, index) => (
                <tr key={index}>
                  <td>{log.date}</td>
                  <td>{log.hoursWorked} hours</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Grade */}
      <div className="report-section">
        <h3 className="section-title">Final Grade</h3>
        <div className="cardss final-grade-card">
          <p>Your final grade: <strong>{finalGrade}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
