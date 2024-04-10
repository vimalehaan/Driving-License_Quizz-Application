import React from 'react';
import { useContext } from 'react';

import { PieChart } from '@mui/x-charts/PieChart';

import { PieChartContext } from '../../Pages/UserProfile';

export default function BasicPie() {

    const { easyValue, hardValue, hardestValue } = useContext(PieChartContext)
    console.log('easyValue:', easyValue);
            console.log('hardValue:', hardValue);
            console.log('hardestValue:', hardestValue);
    return (
        
        <div>
            
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: easyValue, label: 'Easy', color: '#09BCE0' },
                            { id: 1, value: hardValue, label: 'Hard', color: '#9F69D5' },
                            { id: 2, value: hardestValue, label: 'Hardest', color: '#6070D4' },
                        ],
                        innerRadius: 30,
                        outerRadius: 80,
                        paddingAngle: 3,
                        cornerRadius: 15,
                        startAngle: -135,
                        endAngle: 135,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -20, color: 'gray' },
                    },
                ]}
                width={330}
                height={200}
            />
        </div>
    );
}