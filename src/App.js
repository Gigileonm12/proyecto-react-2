import React, { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import { ConfigProvider, theme as antdTheme  } from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrincipalPage from './pages/PrincipalPage';

const theme = 'light'; // o 'dark'
const isAuthenticated = true; // o false

function AppContent() {
useEffect(() => {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
}, [theme]);

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

function App() {
  return (
    <ThemeProvider>  
      <AuthProvider> 
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
