import React, { useState, useEffect } from 'react';
import pendingDataJson from './PendingLeaves.json'; 
import threeDotsImage from '../photos/three-dots.png';
import edit from '../photos/pen.png';

const PendingLeaves = ({theme}) => {
  const [leavesData, setLeavesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLeavesData(pendingDataJson); 
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = leavesData.filter((leave) => {
    return Object.values(leave).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className={`border ${theme === 'dark' ? 'bg-gray-200 text-gray-400' : 'bg-white'} p-4 rounded-2xl flex flex-col border border-gray-300`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-800' : 'text-gray-500'}`}>Pending Approvals</h2>
        <div className="flex items-center space-x-2">
          <input 
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border p-2 rounded"
          />
          <div className="group">
            <img 
              src={threeDotsImage} 
              alt="Three dots" 
              className="w-4 h-4 transition duration-300 group-hover:scale-110" 
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto pt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600'}`}>
            <tr>
              <th className="px-6 py-3 text-left text-1 font-medium text-gray-750 tracking-wider">Leave Type</th>
              <th className="px-6 py-3 text-between text-1 font-medium text-gray-750 tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-1 font-medium text-gray-750 tracking-wider">No. of Days</th>
              <th className="px-6 py-3 text-left text-1 font-medium text-gray-750 tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-1 font-medium text-gray-750 tracking-wider">Date Requested</th>
              <th className="px-6 py-3 text-left text-1 font-medium text-gray-750 tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className= {`${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600'} divide-y divide-gray-200`}>
            {filteredData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{leave.leave_type}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{leave.dates}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{leave.no_of_days}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-block px-2 py-1 text-orange-500 border-2 border-orange-600 bg-orange-100 rounded">
                    {leave.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{leave.date_requested}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  <span className="inline-flex items-center px-2 py-1 text-blue-500 border-2 border-blue-600 rounded">
                    <span>{leave.action}</span>
                    <div className="ml-2 group">
                      <img src={edit} alt="Edit icon" className="w-4 h-4 transition duration-300 group-hover:scale-110" />
                    </div>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingLeaves;
