// components/Sidebar.js
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../photos/dashboard-interface.png';
import attendance from '../photos/attendant-list.png';
import calendar from '../photos/calendar.png';
import performance from '../photos/graph.png';
import payroll from '../photos/wallet.png';
import training from '../photos/machine-learning.png';
import profile from '../photos/approve.png';
import help from '../photos/help.png';
import logout from '../photos/logout-outline.png';
import { useNavigate } from 'react-router-dom';
import  './Chart.css';



export default function Sidebar({theme}) {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (

        <nav >
            <div className='h-custom'></div>
            <div className='py-35 p-5'>
            <div onClick={() => navigate("/dashboard")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className=" group"><img src={dashboard} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-4 pr-8">Dashboard</span>
            </div>
            <div onClick={() => navigate("/dashboard/attendance")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="group"><img src={attendance} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-4 pr-8">Attendance</span>
            </div>
            <div className="relative">
                    <div
                        onClick={toggleExpand}
                        className="h-14 pr-5 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5 cursor-pointer"
                    >
                        <span className="ml-auto group">
                            <img src={calendar} alt="Calendar" className="w-6 h-6 transition duration-300 group-hover:scale-110" />
                        </span>
                        <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Leave Management</span>
                    </div>
                    {isExpanded && (
                        <div className="p-3 border border-gray-300 rounded-lg shadow-md bg-white mb-5">
                            <ul>
                                <li className="p-3 hover:bg-gray-100">
                                    <div onClick={() => navigate("/dashboard")}>Overview</div>
                                </li>
                                <li className="p-3 hover:bg-gray-100">
                                <div onClick={() => navigate("/dashboard/leaveCalender")}>Leave Calender</div>
                                </li>
                                <li className="p-3 hover:bg-gray-100">
                                <div onClick={() => navigate("/dashboard/requestLeave")}>Request Leave</div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            <div onClick={() => navigate("/dashboard/performance")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="ml-auto group"><img src={performance} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Performance Mgt</span>
            </div>
            <div onClick={() => navigate("/dashboard/payroll")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1bg-white rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="group"><img src={payroll} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Payroll</span>
            </div>
            <div onClick={() => navigate("/dashboard/training")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="ml-auto group"><img src={training} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Training and Dev</span>
            </div>
            <div onClick={() => navigate("/dashboard/profile")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className=" group"><img src={profile} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Profile</span>
            </div>
            <div onClick={() => navigate("/dashboard/help")} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="group"><img src={help} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Help</span>
            </div>
            <div onClick={handleLogout} className="h-14 pr-8 pb-3 pt-3 pl-5 bg-white p-1 rounded-lg flex flex-row items-center border border-gray-300 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-300 mb-5">
                <span className="group"><img src={logout} alt="Three dots" className="w-6 h-6 transition duration-300 group-hover:scale-110" /></span>
                <span className="text-1xl font-bold text-gray-600 pl-3 pr-1">Logout</span>
            </div>
            </div>
        </nav>

    );
}
