import React from 'react';

export default function PatientProfile({ user }) {
  return (
    <div className="container" style={{maxWidth:500, marginTop:40}}>
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 4px 24px #4f8cff22', padding:32}}>
        <h2 style={{color:'#4f8cff', marginBottom:18}}>Patient Profile</h2>
        <p style={{fontWeight:500, color:'#222'}}>Name: <span style={{color:'#4f8cff'}}>{user?.name || 'Guest'}</span></p>
        <p style={{fontWeight:500, color:'#222'}}>Email: <span style={{color:'#4f8cff'}}>{user?.email || '-'}</span></p>
        <p style={{color:'#555', marginTop:18}}>Medical records and history will appear here (demo).</p>
      </div>
    </div>
  );
}
