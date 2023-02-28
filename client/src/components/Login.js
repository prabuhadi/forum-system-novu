import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <main className="login">
      <h1 className="loginTitle">Log into your account</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="JohnDoe@mail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
        />
        <button className="loginBtn">SIGN IN</button>
        <p>
          Don't have an account? <Link to="/register"> Create New</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
