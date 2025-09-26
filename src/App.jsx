import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './components/Signin';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Appointment from './components/Appointment';
import Dashboard from './components/Dashboard';
import PatientProfile from './components/PatientProfile';

function App() {
  const [user, setUser] = useState(null);

  return (
   <BrowserRouter basename="/ci-cd-project1">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<Signin setUser={setUser} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/appointment" element={<Appointment user={user} />} />
    <Route path="/dashboard" element={<Dashboard user={user} />} />
    <Route path="/profile" element={<PatientProfile user={user} />} />
    <Route path="*" element={<HomePage />} /> {/* fallback */}
  </Routes>
</BrowserRouter>


  );
}

export default App;
