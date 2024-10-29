import { useState } from 'react'; // Import useState to manage active content
import Sidebar from '../../components/SidebarButton.jsx';
import Header from '../../components/Header.jsx';
import { useTheme } from '../../contexts/ThemeContexts'; 
import { Link } from 'react-router-dom';
import Overview from '../../components/dashboardnav/Overview'; // Import Overview component
import ActivityLog from '../../components/dashboardnav/ActivityLog.jsx'; // Ensure you have the ActivityLog component

const Home = () => {
  const { isDarkMode } = useTheme();
  const [activePage, setActivePage] = useState('overview'); // State to track the active page

  // Function to render active page component
  const renderActivePage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
      case 'activity-log':
        return <ActivityLog />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Sidebar />
      <div className={`flex-1 flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <Header />
        <main className={`flex-1 flex flex-col overflow-y-auto p-4`}>
          {/* Flex container for navigation and filter */}
          <div className="flex justify-between items-center mb-4">
            {/* Left-aligned links */}
            <div>
              <Link 
                to="#" 
                onClick={() => setActivePage('overview')} 
                className={`font-bold py-2 px-4 rounded-full mr-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-900 hover:bg-blue-700 text-white'}`}>
                Overview
              </Link>
              <Link 
                to="#" 
                onClick={() => setActivePage('activity-log')} 
                className={`font-bold py-2 px-4 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                Activity Log
              </Link>
            </div>

            {/* Right-aligned dropdown for filtering */}
            <div>
              <select
                className={`py-2 px-4 rounded-full font-bold ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
              >
                <option value="">Filter by</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                {/* Add more filter options as needed */}
              </select>
            </div>
          </div>

          <section className="flex-1 overflow-y-auto">
            {renderActivePage()} {/* Render the active page component */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
