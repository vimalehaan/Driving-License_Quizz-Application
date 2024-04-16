import React from 'react';
import { useContext } from 'react';

import { PieChart } from '@mui/x-charts/PieChart';

import { ChartDataContext } from '../../Pages/UserProfile';

export default function BasicPie() {

    const { QuizData } = useContext(ChartDataContext);
    const easyValue = QuizData.filter(data => data.difficulty === 'Easy').length;
    const hardValue = QuizData.filter(data => data.difficulty === 'Hard').length;
    const hardestValue = QuizData.filter(data => data.difficulty === 'Hardest').length;

    console.log('easyValue:', easyValue);

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
                        innerRadius: 25,
                        outerRadius: 80,
                        paddingAngle: 2,
                        cornerRadius: 13,
                        startAngle: -135,
                        endAngle: 135,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 25, additionalRadius: -20, color: 'gray' },
                    },
                ]}
                width={330}
                height={200}
            />
        </div>
    );
}