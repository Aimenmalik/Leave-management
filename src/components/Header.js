import React, { useState } from 'react';
import notifications from '../photos/love-bell.png';
import message from '../photos/email.png';
import drive from '../photos/google-drive.png';
import user from '../photos/selfie.png';
import greeting from '../photos/sun.png';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  const { userName, toggleTheme, theme } = props;
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex items-center justify-between p-8 border-b-2 border-gray-100 shadow-md dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <h2 className={`text-2xl font-bold  ${theme === 'light' ? 'text-gray-600 dark:text-gray-300' : 'text-white'} pl-4`}>Welcome back, {userName}</h2>
        <img src={greeting} alt="Greeting" className="w-8 h-8 transition duration-300 hover:scale-110" />
      </div>
      <div className="flex items-center space-x-4 relative">
        <img src={notifications} alt="Notifications" className="w-8 h-8 transition duration-300 hover:scale-110" />
        <img src={message} alt="Messages" className="w-8 h-8 transition duration-300 hover:scale-110" />
        <img src={drive} alt="Drive" className="w-8 h-8 transition duration-300 hover:scale-110" />
        <div className="relative flex items-center">
          <img
            src={user}
            alt="User"
            className="w-9 h-9 transition duration-300 hover:scale-110 cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <button
          className={`w-12 h-7 rounded-full bg-gray-300 flex items-center justify-between p-2 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'}`}
          onClick={toggleTheme}
        >
          <div className={`w-6 h-6 rounded-full shadow-md transform ${theme === 'light' ? 'translate-x-0 bg-gray-700' : 'translate-x-full bg-gray-300'}`} />
        </button>
      </div>
    </div>
  );
}
