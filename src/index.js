import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
      <CssBaseline />
    </Provider>
  </Router>
);

