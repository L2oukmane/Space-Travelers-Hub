import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import React, { Component }  from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;