import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import Login from './components/loginsection/Login';
import Quora from './quora/Quora';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './quora/PrivateRoute';



function App() {

  return (
    <Box>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quora/*" element={<PrivateRoute><Quora /></PrivateRoute>} />
      </Routes>
    </Box>
  );
}

export default App;
