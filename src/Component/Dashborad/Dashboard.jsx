import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { meetContext } from '../../Context/UseContextProvider';

const Dashboard = () => {
     const {meet, setMeet} = useContext(meetContext);
     const call = meet.filter(met => met.interactionType == 'call');
     const text = meet.filter(met => met.interactionType == 'text');
     const video = meet.filter(met => met.interactionType == 'video');
            const data = [
        { name: 'call', value: call.length, fill: '#0088FE' },
        { name: 'text', value: text.length, fill: '#00C49F' },
        { name: 'video', value: video.length, fill: '#FFBB28' },
        ];
    return (
        <div className='container mx-auto my-10'>
        <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '40vh', aspectRatio: 1, margin:'auto' }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Legend/>
            <Tooltip/>
            </PieChart>
        </div>
    );
};

export default Dashboard;