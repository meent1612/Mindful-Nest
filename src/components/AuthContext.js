import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({ user: null, token: null, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Optionally fetch user profile here
      setUser({}); // or actual user data
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  const login = ({ user, token }) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/problem-checker');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
