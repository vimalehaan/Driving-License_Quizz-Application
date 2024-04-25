import React from 'react'
import { useContext } from 'react';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { SpecificQuizContext } from '../Utils/Contexts';

// import { SpecificQuizContext } from '../../Pages/UserProfile';


function ExamViewCauge() {

    const { questionViewData } = useContext(SpecificQuizContext);

    // if (!questionViewData) {
    //     // If questionViewData is null, render some fallback content or return null
    //     return <div>Loading...</div>;
    // }
    // // Check if questions array is not null before accessing its properties
    // if (!questionViewData || questionViewData.length === 0) {
    //     // If questions array is null or empty, render some fallback content or return null
    //     return <div>No questions available</div>;
    // }

    return (
        <Gauge
            width={180}
            height={120}
            outerRadius={80}
            innerRadius={55}
            value={Math.round(questionViewData.questions.filter(question => question.isCorrect).length / questionViewData.questions.length *100)}
            cornerRadius={'20px'}
            startAngle={-110}
            endAngle={110}
            sx={(theme) => ({
                
                [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 35,
                    fontWeight: 600
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#37407b',
                },
                
                [`& .${gaugeClasses.referenceArc}`]: {
                    fill: '#a6a6a6',
                },
            })}
            text={
                ({value}) => `${value}%`
            }
        />
    );
}

export default ExamViewCauge;