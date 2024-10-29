// src/main.jsx (or src/index.jsx)
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Make sure this points to your main App file
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme/muiTheme'; // Import your custom theme
import './index.css'; // Your global CSS styles

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  {/* Wrap your App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
