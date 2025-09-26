import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake register - in real app send to backend
    console.log('Registered:', form);
    navigate('/signin');
  };

  return (
    <div className="container" style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60vh'}}>
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 4px 24px #4f8cff22', padding:32, minWidth:320}}>
        <h2 style={{color:'#4f8cff', marginBottom:18}}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full name" 
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
