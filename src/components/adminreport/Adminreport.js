import React, { useState } from 'react';
import './Adminreport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTasks, faUsers, faFile, faSignOutAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import { NotificationContainer, NotificationManager } from 'react-notifications'; // Import NotificationManager
import 'react-notifications/lib/notifications.css'; // Don't forget to import the CSS for the notifications

const AdminReports = () => {
  const [selectedStudent, setSelectedStudent] = useState(null); // State for selected student
  const [adminResponse, setAdminResponse] = useState(''); // State for admin response
  const [messages, setMessages] = useState([]); // State to hold the conversation
  const [showProgressReport, setShowProgressReport] = useState(false); // State to control visibility of report section

  // Sample data for Evaluation, Time Logs, and Final Grade
  const evaluationData = [
    { category: 'Attendance', rating: 4.5 },
    { category: 'Performance', rating: 4.0 },
    { category: 'Participation', rating: 5.0 },
    // Add more evaluation categories as needed
  ];

  const timeLogs = [
    { date: '2024-11-01', hoursWorked: 8 },
    // Add more time logs as needed
  ];

  const finalGrade = "92%"; // Example final grade

  const progressReport = [
    { student: "Donald Trump", week: 1, tasksCompleted: 1, totalTasks: 1, attendance: "Present" },
    // Add more reports as needed
  ];

  const handleStudentClick = (studentName) => {
    setSelectedStudent(studentName); // Set the selected student
  };

  const handleAdminResponseChange = (event) => {
    setAdminResponse(event.target.value); // Update the admin's response
  };

  const handleSendResponse = () => {
    if (adminResponse.trim() !== '') {
      setMessages([ // Append the response to the conversation
        ...messages,
        { sender: 'Admin', message: adminResponse },
        { sender: 'Student', message: `' ${selectedStudent}` },
      ]);
      setAdminResponse(''); // Clear admin response after sending
    }
  };

  // Calculate reports to review
  const reportsToReview = progressReport.length; // Number of reports

  const handleReviewReportsClick = () => {
    setShowProgressReport(true); // Show progress report when the button is clicked
  };

  // Action Handlers using NotificationManager
  const handleEditTaskCompletion = () => {
    NotificationManager.success('Edit Task Completion Success', );
  };

  const handleUpdateAttendance = () => {
    NotificationManager.success('Update Attendance Action Success',);
  };

  const handleAdjustPerformanceRatings = () => {
    NotificationManager.success('Adjust Performance Ratings Action Success',);
  };

  const handleGeneratePDFReport = () => {
    NotificationManager.success('Generate PDF Report Action Success', );
  };

  const handleSendFeedback = () => {
    NotificationManager.success('Send Feedback to Student Action Triggered', 'Action Triggered');
  };

  return (
    <div className="reports-container">
      <Header />

      {/* Links section */}
      <div className="items-container">
        <h2 className="welcome-message">Welcome Admin</h2>
        <a href="/admindashboard" className="item dashboard">
          <FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD
        </a>
        <a href="manageuser" className="item profile">
          <FontAwesomeIcon icon={faUsers} /> MANAGE STUDENTS
        </a>
        <a href="adminojtopportunities" className="item profile">
          <FontAwesomeIcon icon={faBriefcase} /> MANAGE OJT 
        </a>
        <a href="admintask" className="item profile">
          <FontAwesomeIcon icon={faTasks} /> TASK
        </a>
        <a href="/adminreport" className="item reports">
          <FontAwesomeIcon icon={faFile} /> REPORTS
        </a>
        <a href="/admin" className="item logout">
          <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
        </a>
      </div>

      {/* Reports Overview Section */}
      <div className="reports-overview">
        <h3 className="section-titles">Reports Overview</h3>
        <p>{reportsToReview} reports to review.</p> {/* Display the number of reports */}
        <button className="review-button" onClick={handleReviewReportsClick}>Review Reports</button>
      </div>

      {/* Progress Report Section - Conditional Rendering */}
      {showProgressReport && (
        <>
          {/* Progress Report */}
          <div id="view-reports" className="report-section">
            <h3 className="section-title">Progress Report</h3>
            <div className="cardss progress-report">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Week</th>
                    <th>Tasks Completed</th>
                    <th>Total Tasks</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {progressReport.map((report, index) => (
                    <tr key={index}>
                      <td>
                        <button
                          onClick={() => handleStudentClick(report.student)} 
                          className="student-name-button"
                        >
                          {report.student}
                        </button>
                      </td>
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
          <div className="report-section">
            <h3 className="section-title">Evaluation</h3>
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
            <h3 className="section-title">Time Log</h3>
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

          {/* Action Buttons */}
          <div className="action-buttons">
            <button onClick={handleEditTaskCompletion} className="action-button">Edit Task Completion</button>
            <button onClick={handleUpdateAttendance} className="action-button">Update Attendance</button>
            <button onClick={handleGeneratePDFReport} className="action-button">Generate PDF Report</button>
          </div>
        </>
      )}

      {/* Student Conversation Section */}
      {selectedStudent && (
        <div className="student-chat-section">
          <h4>Conversation with {selectedStudent}</h4>

          <div className="messagess">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === 'Admin' ? 'admin-message' : 'student-message'}>
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}
          </div>

          {/* Admin response input */}
          <textarea
            value={adminResponse}
            onChange={handleAdminResponseChange}
            placeholder="Type your response here..."
            className="admin-response-input"
          />
          <button onClick={handleSendResponse} className="send-response-button">
            Send Response
          </button>
        </div>
      )}

      {/* Notification Container to show notifications */}
      <NotificationContainer />
    </div>
  );
};

export default AdminReports;
