import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../index.css";
import "./Register.css";
import { addUserToServer } from "../../services/auth-service";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (registerSuccess) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length <= 6) {
      setError("Password must be longer than 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      const response = await addUserToServer(formData);

      console.log("Response:", response);

      if (response.status !== 201) {
        throw new Error(response.message || "Registration failed");
      }

      setRegisterSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1 id="registerTitle">Register</h1>
      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} aria-labelledby="registerTitle">
        <div className="imgcontainer">
          <img src="/login/login.png" alt="Avatar" className="avatar" />
        </div>
        <fieldset className="form-container">
          <legend className="legend-register">Register Information</legend>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-required="true"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
          />
          <button type="submit" disabled={loading} aria-busy={loading}>
            Register
          </button>
        </fieldset>
        <p>
          Already have an account? Log in{" "}
          <Link to="/login" className="register-link">
            here
          </Link>
          !
        </p>
      </form>
      {registerSuccess && (
        <div className="success-message" aria-live="polite">
          Sign up Successful!
        </div>
      )}
      {loading && <p>Loading...</p>}
    </main>
  );
}

export default Register;
