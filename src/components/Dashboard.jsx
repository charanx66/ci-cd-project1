import React from 'react';

export default function Dashboard({ user }) {
  return (
    <div className="container" style={{maxWidth:600, marginTop:40}}>
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 4px 24px #4f8cff22', padding:32}}>
        <h2 style={{color:'#4f8cff', marginBottom:18}}>Doctor Dashboard</h2>
        <p style={{fontWeight:500, color:'#222'}}>Welcome, {user?.name || 'Doctor'}.</p>
        <p style={{color:'#555'}}>This dashboard will show your schedule and patients.</p>
        <p style={{color:'#888', fontSize:'0.98em'}}>(Demo) No backend connected yet.</p>
      </div>
    </div>
  );
}
