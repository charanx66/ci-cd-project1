import React, { useState } from "react";
import { register } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await register(username, email, password);
      alert("Register successful! Please signin.");
      navigate("/signin");
    } catch (error) {
      alert("Register failed!");
    }
  };

  return (
    <div className="center-layout">
      <div className="auth-container">
        <h2>Register</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Register</button>
        <p>Already have an account? <Link to="/signin">Signin</Link></p>
      </div>
    </div>
  );
};

export default Register;
