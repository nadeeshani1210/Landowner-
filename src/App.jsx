import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SpotManagement from './pages/SpotManagement';
import AddParking from './pages/AddParking'
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/spot-management" element={<SpotManagement />} />
          <Route path="/add-parking" element={<AddParking />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;