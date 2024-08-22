import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Nalumsari', value: 400 },
    { name: 'Gebog', value: 300 },
    { name: 'Besito', value: 300 },
    { name: 'Gondosari', value: 200 },
];

const COLORS = ['#515151', '#A8C5DA', '#A1E3CB', '#B1E3FF'];

const ChartPie = () => {
    // Calculate the total value for percentage calculations
    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <div className="bg-white py-5 px-10 rounded-xl">
            <p>PPDS</p>
            <ResponsiveContainer width={200} height={200} className="mt-8">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col mt-5 space-y-3">
                {data.map((entry, index) => (
                    <div key={`label-${index}`} className="flex justify-between items-center ">
                        <div className="flex gap-3 justify-center items-center">
                            <div
                                className="w-[10px] h-[9.5px] rounded-full"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <p className="text-[12px] text-black">{entry.name}</p>
                        </div>
                        <p className="text-[12px] text-black">{((entry.value / total) * 100).toFixed(1)}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartPie;
