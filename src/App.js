import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Rockets from './pages/Rockets';
import Profile from './pages/profile';
import Missions from './pages/missions';

export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </Router>
  );
}
