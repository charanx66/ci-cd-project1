import React, { useState, useEffect } from 'react';

export default function Appointment({ user }) {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ doctorId: '', date: '', time: '' });
  const [appointments, setAppointments] = useState([]);

  useEffect(()=> {
    // demo doctors list
    setDoctors([
      { id: 'd1', name: 'Dr. Priya Rao', specialty: 'General' },
      { id: 'd2', name: 'Dr. Amit Sharma', specialty: 'Dermatology' }
    ]);
  },[]);

  const handleBook = (e) => {
    e.preventDefault();
    const ap = { id: Date.now(), patient: user?.name || 'Guest', ...form, status: 'scheduled' };
    setAppointments(prev => [ap, ...prev]);
    setForm({ doctorId: '', date: '', time: '' });
  };

  return (
    <div className="container" style={{maxWidth:600}}>
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 4px 24px #4f8cff22', padding:32, marginBottom:32}}>
        <h2 style={{color:'#4f8cff', marginBottom:18}}>Book Appointment</h2>
        <form onSubmit={handleBook}>
          <label style={{fontWeight:500, color:'#333'}}>Choose Doctor</label>
          <select value={form.doctorId} onChange={e=>setForm({...form, doctorId:e.target.value})} required>
            <option value="">-- select --</option>
            {doctors.map(d=> <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>)}
          </select>
          <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
          <input type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} required />
          <button type="submit">Book</button>
        </form>
      </div>
      <div style={{background:'#f8fafc', borderRadius:10, boxShadow:'0 2px 8px #4f8cff11', padding:24}}>
        <h3 style={{color:'#222', marginBottom:12}}>Your Appointments</h3>
        {appointments.length===0 && <p style={{color:'#888'}}>No appointments yet.</p>}
        <ul style={{padding:0, listStyle:'none'}}>
          {appointments.map(a=>(
            <li key={a.id} style={{marginBottom:10, padding:10, background:'#fff', borderRadius:6, boxShadow:'0 1px 4px #4f8cff0a'}}>
              <span style={{fontWeight:500}}>{a.date} {a.time}</span> with <span style={{color:'#4f8cff'}}>{doctors.find(d=>d.id===a.doctorId)?.name || a.doctorId}</span> - <span style={{color:'#28a745'}}>{a.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
