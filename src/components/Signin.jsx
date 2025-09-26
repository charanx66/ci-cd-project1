import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // fake login for demo
    const user = { id: 1, email, role: 'patient', name: 'Demo Patient' };
    setUser(user);
    navigate('/appointment');
  };

  return (
    <div className="container" style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60vh'}}>
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 4px 24px #4f8cff22', padding:32, minWidth:320}}>
        <h2 style={{color:'#4f8cff', marginBottom:18}}>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
