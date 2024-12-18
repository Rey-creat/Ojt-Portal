import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/studentlogin/LoginForm';
import StudentDashboard from './components/studentdashboard/StudentDashboard';
import AdminForm from './components/adminlogin/admin';
import AdminDashboard from './components/admindashboard/admindashboard';
import OpportunitiesPage from './components/opportunities/Opportunities'; 
import Reports from './components/report/Report';
import ManageUsers from './components/managestudent/Manageuser';
import Adminreport from './components/adminreport/Adminreport';
import Profile from './components/profile/Profile';
import AdminOjtOpportunities from './components/adminojtopportunities/AdminOjtOpportunities';
import AdminTask from './components/admintask/Task';
import StudentTask from './components/studenttasks/Task';
// NotFound component for undefined routes
function NotFound() {
  return <h2>Page not found!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Redirect root path to /login */}
        <Route path="/" element={<Navigate to="/student" />} /> 
        
        {/* Login and other routes */}
        <Route path="/student" element={<LoginForm />} /> {/* Login route */}
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/opportunities" element={<OpportunitiesPage/>} />
        <Route path="/studenttasks" element={<StudentTask/>} />
        <Route path="/report" element={<Reports/>} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/manageuser" element={<ManageUsers />} />
        <Route path="/adminojtopportunities" element={<AdminOjtOpportunities />} />
        <Route path="/admintask" element={<AdminTask />} />
        <Route path="/adminreport" element={<Adminreport />} />
        <Route path="*" element={<NotFound />} /> {/* Not found page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
