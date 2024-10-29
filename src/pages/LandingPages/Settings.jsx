import SidebarButton from '../../components/SidebarButton';
import { useTheme } from '../../contexts/ThemeContexts'; // Correct import path
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../../components/Header'; // Import your Header component

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme context

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <SidebarButton />
      <div className={`settings-page flex-1 flex flex-col p-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Header />

        {/* Navigation Card */}
        <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow rounded-lg p-4 mb-4`}>
          <nav className="flex justify-between">
            <Link to="/profile" className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>
              Profile
            </Link>
            <Link to="/user-management" className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>
              User Management
            </Link>
            <Link to="/notifications" className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>
              Notifications
            </Link>
            <Link to="/customization" className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>
              Customization
            </Link>
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow rounded-lg p-4`}>
          <div className="flex items-center justify-between">
            <span className="mr-2">Dark Mode</span>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              className={`form-checkbox h-5 w-5 ${isDarkMode ? 'text-blue-500' : 'text-gray-600'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
