// components/Login.js
import React, { useState, useEffect } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  // Get the intended destination or default to home
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setMounted(true);
    
    // If already logged in, redirect immediately
    if (user) {
      console.log('Already logged in, redirecting to:', from);
      navigate(from, { replace: true });
    }
    
    return () => setMounted(false);
  }, [user, navigate, from]);

  const handleChange = (e) => {
    if (!mounted) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mounted) return;
    
    setLoading(true);
    setError("");

    try {
      const result = await login(formData);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      if (mounted) {
        setLoading(false);
      }
    }
  };

  // Don't show anything if already logged in (will redirect)
  if (user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Redirecting...</h2>
          <p>You are already logged in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading} className="auth-button">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link 
              to="/register" 
              state={{ from: location.state?.from || { pathname: "/" } }}
              className="auth-link"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;