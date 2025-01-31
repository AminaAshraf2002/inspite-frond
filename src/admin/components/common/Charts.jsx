// components/common/Charts.js
import React from 'react';
import { 
    LineChart, 
    Line, 
    BarChart, 
    Bar,
    PieChart,
    Pie,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts';
import './Charts.css';

export const LineChartComponent = ({ data, height = 300, lines }) => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={height}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {lines.map((line, index) => (
                        <Line
                            key={line.dataKey}
                            type="monotone"
                            dataKey={line.dataKey}
                            stroke={line.color || `#${Math.floor(Math.random()*16777215).toString(16)}`}
                            name={line.name}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export const BarChartComponent = ({ data, height = 300, bars }) => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {bars.map((bar, index) => (
                        <Bar
                            key={bar.dataKey}
                            dataKey={bar.dataKey}
                            fill={bar.color || `#${Math.floor(Math.random()*16777215).toString(16)}`}
                            name={bar.name}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export const PieChartComponent = ({ data, height = 300 }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={height}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

// Usage Example:
const ChartExample = () => {
    const lineData = [
        { name: 'Jan', revenue: 4000, profit: 2400 },
        { name: 'Feb', revenue: 3000, profit: 1398 },
        { name: 'Mar', revenue: 2000, profit: 9800 },
        { name: 'Apr', revenue: 2780, profit: 3908 },
    ];

    const lines = [
        { dataKey: 'revenue', name: 'Revenue', color: '#8884d8' },
        { dataKey: 'profit', name: 'Profit', color: '#82ca9d' }
    ];

    return (
        <div className="charts-example">
            <LineChartComponent 
                data={lineData} 
                lines={lines} 
                height={300} 
            />
        </div>
    );
};

export default {
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
};