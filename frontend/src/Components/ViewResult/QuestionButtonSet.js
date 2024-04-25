import React from 'react'
import { useContext } from 'react';

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

import { SpecificQuizContext } from '../Utils/Contexts';

function QuestionButtons() {

    const {questionViewData, setCurrentQuestionIndex} = useContext(SpecificQuizContext);

    const handleQuestionView = (index) => {
       setCurrentQuestionIndex(index);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '100%' ,  flexWrap: 'wrap' }}>
            {questionViewData.questions.map((question, index) => (
                <Button
                key={index}
                variant="contained"
                onClick={() => handleQuestionView(index)}
                sx={{
                    color:  question.isCorrect ? '#ffffff' : '#272d59',
                    backgroundColor: question.isCorrect ? '#37407b' : '#a6a6a6',
                    borderRadius: '8px',
                    height: '32px',
                    width: '32px',
                    minWidth: '0',
                    padding: '14px',
                    margin: '4px', // Optional: Add margin between buttons
                    "&:hover": {
                        backgroundColor: question.isCorrect ? '#272d59' : '#808080'
                      },
                }}
            >
                {index + 1}
            </Button>
            ))}

        </Box>
    );
}

export default QuestionButtons;