import React, { useState, useEffect } from 'react';
import leavesDataJson from './LeavesUpcoming.json'; 
import threeDotsImage from '../photos/three-dots.png';

const UpcomingLeaves = ({ theme }) => {
  const [leavesData, setLeavesData] = useState([]);

  useEffect(() => {
    setLeavesData(leavesDataJson); 
  }, []);

  return (
    <div className={`border ${theme === 'dark' ? 'bg-gray-200' : 'bg-white'} p-4 rounded-2xl flex flex-col border border-gray-300`}>
      <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-800' : 'text-gray-500'} mb-4`}>Upcoming Leaves</h2>
      <div className="ml-auto mt-[-2.8rem] group">
        <img src={threeDotsImage} alt="Three dots" className="w-4 h-4 justify-end transition duration-300 group-hover:scale-110" />
      </div>
      <div className="overflow-x-auto pt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600'}`}>
            <tr>
              <th className="px-6 py-3 text-left text-1 font-medium tracking-wider">Leave Type</th>
              <th className="px-6 py-3 text-left text-1 font-medium tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-1 font-medium tracking-wider">No. of Days</th>
              <th className="px-6 py-3 text-left text-1 font-medium tracking-wider">Approved by</th>
            </tr>
          </thead>
          <tbody className={`${theme === 'dark' ? 'bg-gray-200' : 'bg-white'} divide-y divide-gray-200`}>
            {leavesData.map((leave, index) => (
              <tr key={index} className={`hover:bg-gray-100 transition duration-200 ${theme === 'dark' ? 'bg-gray-200' : ''}`}>
                <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-800' : 'text-gray-600'}`}>{leave.leave_type}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-800' : 'text-gray-600'}`}>{leave.dates}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-800' : 'text-gray-600'}`}>{leave.no_of_days}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-800' : 'text-gray-600'}`}>{leave.approved_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingLeaves;
