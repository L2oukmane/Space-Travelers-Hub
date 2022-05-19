import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Mission from './components/Mission';

export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </Router>
  );
}
