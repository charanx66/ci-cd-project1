import React, { useState } from "react";
import { signin } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signin(username, password);
      localStorage.setItem("isAuthenticated", "true");
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="center-layout">
      <div className="auth-container">
        <h2>Signin</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Signin</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Signin;
