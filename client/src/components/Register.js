import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    setUsername();
    setEmail();
    setPassword();
  };

  return (
    <main className="register">
      <h1 className="registerTitle">Create an account</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="username">Username</label>
        <input
          required
          name="username"
          id="username"
          value={username}
          type="text"
          placeholder=""
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="email">Email Address</label>
        <input
          required
          name="email"
          id="email"
          value={email}
          type="text"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="password">Password</label>
        <input
          required
          name="password"
          id="password"
          value={password}
          type="text"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerBtn">Register</button>
        <p>
          Have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
