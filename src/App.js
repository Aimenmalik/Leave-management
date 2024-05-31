import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Performance from './components/PerformanceManagement';
import Payroll from './components/Payroll';
import Training from './components/Training';
import Profile from './components/Profile';
import Help from './components/Help';
import RequestLeave from './components/RequestLeave';
import LeaveCalendar from './components/LeaveCalender';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Router>
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/attendance" element={<Attendance />} />
        <Route path="/dashboard/performance" element={<Performance />} />
        <Route path="/dashboard/payroll" element={<Payroll />} />
        <Route path="/dashboard/training" element={<Training />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/help" element={<Help />} />
        <Route path="/dashboard/requestLeave" element={<RequestLeave />} />
        <Route path="/dashboard/leaveCalender" element={<LeaveCalendar />} />
    
      </Routes>
      <ToastContainer/>
    </div>
    </Router>
  );
}

export default App;
