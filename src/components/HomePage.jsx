import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1 style={{fontSize: '2.3em', color: '#4f8cff', margin: 0, letterSpacing: '1px'}}>Healthcare Appointment System</h1>
        <nav>
          <Link to="/signin">Sign In</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <section style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop: 32, marginBottom: 32}}>
        <img src="vite.svg" alt="Healthcare" style={{width: 120, marginBottom: 18, filter:'drop-shadow(0 2px 8px #4f8cff33)'}} />
        <h2 style={{color:'#222', fontWeight:600, marginBottom:8}}>Book Appointments Easily</h2>
        <p style={{color:'#555', fontSize:'1.1em', maxWidth:500, textAlign:'center', marginBottom:24}}>
          Book appointments with doctors, manage your health records, and join virtual consultations. Fast, secure, and user-friendly.
        </p>
        <Link to="/appointment"><button style={{fontSize:'1.1em', padding:'12px 32px'}}>Book Appointment</button></Link>
      </section>
    </div>
  );
}
