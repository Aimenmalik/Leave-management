import React from 'react';
import threeDotsImage from '../photos/three-dots.png';

const Cards = ({theme}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pr-4">
      {/* Card 1 */}
      <div className={`border ${theme === 'dark' ? 'bg-gray-100 text-gray-400' : 'bg-gray-50'} p-5 rounded-lg flex flex-col border border-gray-300 hover:border-blue-400 shadow-md hover:shadow-lg transition duration-300`}>
        <div className="text-2xl font-bold text-gray-500">Total Leaves</div>
        <div className="ml-auto mt-[-1.35remx] group"><img src={threeDotsImage} alt="Three dots"  className="w-4 h-4 justify-end transition duration-300 group-hover:scale-110" /></div>
        <div className="mt-4 flex items-center justify-between pt-9">
          <span>
            <span className="text-3xl font-bold text-gray-600">12</span>
            <span className="text-1xl text-gray-400">/20</span>
          </span>
          <span className="text-1xl text-gray-400">All time</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className={`border ${theme === 'dark' ? 'bg-gray-100 text-gray-400' : 'bg-gray-50'} p-5 rounded-lg flex flex-col border border-gray-300 hover:border-blue-400 shadow-md hover:shadow-lg transition duration-300`}>
        <div className="text-2xl font-bold text-gray-500">Annual Leave</div>
        <div className="ml-auto mt-[-1.35rem] group"><img src={threeDotsImage} alt="Three dots"  className="w-4 h-4 justify-end transition duration-300 group-hover:scale-110" /></div>
        <div className="mt-4 flex items-center justify-between pt-9">
          <span>
            <span className="text-3xl font-bold text-gray-600">12</span>
            <span className="text-1xl text-gray-400">/20</span>
          </span>
          <span className="text-1xl text-gray-400">2024</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className={`border ${theme === 'dark' ? 'bg-gray-100 text-gray-400' : 'bg-gray-50'} p-5 rounded-lg flex flex-col border border-gray-300 hover:border-blue-400 shadow-md hover:shadow-lg transition duration-300`}>
        <div className="text-2xl font-bold text-gray-500">Sick Leave</div>
        <div className="ml-auto mt-[-1.35rem] group"><img src={threeDotsImage} alt="Three dots"  className="w-4 h-4 justify-end transition duration-300 group-hover:scale-110" /></div>
        <div className="mt-4 flex items-center justify-between pt-9">
          <span>
            <span className="text-3xl font-bold text-gray-600">12</span>
            <span className="text-1xl text-gray-400">/20</span>
          </span>
          <span className="text-1xl text-gray-400">2024</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className={`border ${theme === 'dark' ? 'bg-gray-100 text-gray-400' : 'bg-gray-50'} p-5 rounded-lg flex flex-col border border-gray-300 hover:border-blue-400 shadow-md hover:shadow-lg transition duration-300`}>
        <div className="text-2xl font-bold text-gray-500">Other Leave</div>
        <div className="ml-auto mt-[-1.35rem] group"><img src={threeDotsImage} alt="Three dots"  className="w-4 h-4 justify-end transition duration-300 group-hover:scale-110" /></div>
        <div className="mt-4 flex items-center justify-between pt-9">
          <span>
            <span className="text-3xl font-bold text-gray-600">12</span>
            <span className="text-1xl text-gray-400">/20</span>
          </span>
          <span className="text-1xl text-gray-400">2024</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
