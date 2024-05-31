import React from 'react';

const BarChart = ({ data, theme }) => {
    const chartData = data.map(entry => ({
        month: entry.month,
        totalLeaves: entry.annual_leaves + entry.sick_leaves,
        annualLeaves: entry.annual_leaves,
        sickLeaves: entry.sick_leaves,
    }));

    const maxValue = Math.max(...chartData.map(entry => entry.totalLeaves));
    const interval = Math.ceil(maxValue / 5);
    const yAxisLabels = Array.from({ length: Math.ceil(maxValue / interval) + 1 }, (_, i) => i * interval);

    return (
        <div className={`border ${theme === 'dark' ? 'bg-gray-200 text-gray-400' : 'bg-white'} p-4 rounded-2xl flex flex-col border border-gray-300 relative`}>
            <h2 className={`text-2xl font-bold  ${theme === 'dark' ? 'text-gray-800' : 'text-gray-500'} mb-10`}>Leave Trend</h2>
            <div className={`absolute top-4 right-4 ${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600'}`}>
                <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-green-400 mr-2"></div>
                    <span>Sick Leaves</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 mr-2"></div>
                    <span>Annual Leaves</span>
                </div>
            </div>
            <div className="flex justify-center items-end mt-6 relative h-60">
                {/* Y-axis scale */}
                <div className="absolute left-0 bottom-0 flex flex-col justify-between h-full text-gray-600">
                    {yAxisLabels.map((value, i) => (
                        <div key={i} className="flex items-center justify-between w-full" style={{ position: 'absolute', bottom: `${(value / maxValue) * 100}%` }}>
                            <span className="mr-2">{value}</span>
                            <div className="w-full h-0.5 bg-gray-300"></div>
                        </div>
                    ))}
                </div>
                {chartData.map((entry, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg w-16 flex flex-col items-center justify-end transition-all duration-500 ease-in-out transform hover:scale-105"
                        style={{
                            height: `${(entry.totalLeaves / maxValue) * 100}%`,
                            marginLeft: index === 0 ? 0 : '1rem'
                        }}
                        title={`${entry.month}: Total Leaves - ${entry.totalLeaves}`}
                    >
                        <div
                            className="w-full"
                            style={{
                                height: `${(entry.sickLeaves / entry.totalLeaves) * 100}%`,
                                backgroundColor: '#4ADE80'
                            }}
                        />
                        <div
                            className="w-full"
                            style={{
                                height: `${(entry.annualLeaves / entry.totalLeaves) * 100}%`,
                                backgroundColor: '#1E429F'
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-center">
                {chartData.map((entry, index) => (
                    <div
                        key={index}
                        className="w-16 text-center text-gray-600"
                        style={{ marginLeft: index === 0 ? 0 : '1rem' }}
                    >
                        {entry.month}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChart;
