import { useState } from 'react'; // Import useState to manage active content
import SidebarButton from '../../components/SidebarButton';
import { useTheme } from '../../contexts/ThemeContexts'; 
import { Link } from 'react-router-dom'; 
import Header from '../../components/Header'; 
import Profile from '../../components/settingnav/Profile'; // Import the Profile component
import UserManagement from '../../components/settingnav/UserManagement'; // Import UserManagement component
import Notifications from '../../components/settingnav/Notifications'; // Import Notifications component
import Customization from '../../components/settingnav/Customization'; // Import Customization component

const Settings = () => {
  const { isDarkMode } = useTheme(); 
  const [activePage, setActivePage] = useState('profile'); // State to track the active page

  // Function to render active page component
  const renderActivePage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'user-management':
        return <UserManagement />;
      case 'notifications':
        return <Notifications />;
      case 'customization':
        return <Customization />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <SidebarButton />
      <div className={`settings-page flex-1 flex flex-col ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Header />

        {/* Navigation Card */}
        <div className={`shadow rounded-lg p-4 mb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <nav className="flex items-center justify-between">
            <Link 
              to="#" 
              onClick={() => setActivePage('profile')} 
              className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}
            >
              Profile
            </Link>
            <Link 
              to="#" 
              onClick={() => setActivePage('user-management')} 
              className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}
            >
              User Management
            </Link>
            <Link 
              to="#" 
              onClick={() => setActivePage('notifications')} 
              className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}
            >
              Notifications
            </Link>
            <Link 
              to="#" 
              onClick={() => setActivePage('customization')} 
              className={`flex-1 p-2 text-center rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}
            >
              Customization
            </Link>
          </nav>
        </div>

    
            {renderActivePage()}
      
      </div>
    </div>
  );
};

export default Settings;
