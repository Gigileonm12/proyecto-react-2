import React, { useEffect, useContext } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrincipalPage from './pages/PrincipalPage';
import { AuthContext } from './contexts/AuthContext';

const theme = 'light'; // o 'dark'

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/principal" /> : <LoginForm />} />
          <Route path="/principal/*" element={isAuthenticated ? <PrincipalPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}