import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Card from './Card';
import Header from './Header';
import UpcomingLeaves from './UpcomingLeaves';
import jsonData from './LeavesTrend.json';
import PendingLeaves from './PendingLeaves';
import menu from '../photos/menu.png';

export default function Dashboard() {
    const location = useLocation();
    const { userName } = location.state || {};
    const navigate = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [showSidebar, setShowSidebar] = useState(!isSmallScreen);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTime, setFormattedTime] = useState('');
    const [storedUsername , setStoredUsername] = useState(localStorage.getItem('username'))

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }

        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            setFormattedTime(currentTime.toLocaleTimeString());
        }, 1000);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() =>{
        setStoredUsername(userName);
        localStorage.setItem('username', userName);
    }, [userName]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleWindowSizeChange = () => {
        const isSmall = window.innerWidth <= 768;
        setIsSmallScreen(isSmall);
        setShowSidebar(!isSmall);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const currentDate = new Date();
        setFormattedDate(currentDate.toISOString().split('T')[0]);
    }, []);


    return (
        <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-500 text-white' : 'bg-white text-gray-900'}`}>
            {showSidebar && (
                <div className={`transition-all duration-300 ${theme === 'dark' ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}>
                    <Sidebar theme = {theme}/>
                </div>
            )}

            {isSmallScreen && (
                <span className="fixed top-9 pl-1 z-50 group" onClick={toggleSidebar}>
                    <img src={menu} alt="Menu" className="w-8 h-8 transition duration-300 group-hover:scale-110 cursor-pointer" />
                </span>
            )}

            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    <Header userName={userName} toggleTheme={toggleTheme} theme={theme} />
                    <div className="mt-4 flex items-center justify-between pt-3 pr-12 pl-2">
                        <span>
                            <span className="text-3xl font-bold pl-4">Leave Management</span>
                        </span>
                        <span className="text-l font-bold pl-9">{formattedDate} {formattedTime}</span>
                    </div>
                    <div className={` ${theme === 'dark' ? 'text-white' : 'text-gray-500'} text-s font-bold pr-8 pl-6 pb-3 pt-2`}>Overview</div>
                    <div className="p-3">
                        <Card  theme ={theme}/>
                    </div>
                    <div className={`flex ${isSmallScreen ? 'flex-col' : 'grid'} grid-cols-10 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 p-5 overflow-y-auto`}>
                        <div className='mb-4'>
                            <Chart data={jsonData} theme={theme} />
                        </div>
                        <div className='mb-4'>
                            <UpcomingLeaves theme = {theme} />
                        </div>
                    </div>
                    <div className="p-5">
                        <PendingLeaves theme = {theme} />
                    </div>
                </div>
            </div>
        </div>
    );
}
