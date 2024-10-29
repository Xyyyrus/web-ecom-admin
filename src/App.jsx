import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContexts'; // Import useTheme from the context
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme/muiTheme'; // Import your theme function
// import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/LandingPages/Home";
import Settings from "./pages/LandingPages/Settings";
import User from './pages/LandingPages/User';
import Admin from './pages/LandingPages/Admin';
import Messages from './pages/LandingPages/Messages';

function App() {
  return (
    <ThemeProvider>
      <InnerApp /> {/* Move the router and theme logic into a separate component */}
    </ThemeProvider>
  );
}

const InnerApp = () => {
  const { isDarkMode } = useTheme();  // Now you can access useTheme
  const theme = getTheme(isDarkMode); // Get the theme based on the current mode

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/message" element={<Messages/>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </MUIThemeProvider>
  );
};

export default App;
