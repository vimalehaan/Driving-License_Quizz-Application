import React from 'react'
import { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

import { SpecificQuizContext } from '../Utils/Contexts';


function QuestionBox() {
    const { questionViewData, currentQuestionIndex, setCurrentQuestionIndex } = useContext(SpecificQuizContext);
   
    // if (!questionViewData) {
    //     // If questionViewData is null, render some fallback content or return null
    //     return <div>Loading...</div>;
    // }
    // // Check if questions array is not null before accessing its properties
    // if (!questionViewData || questionViewData.length === 0) {
    //     // If questions array is null or empty, render some fallback content or return null
    //     return <div>No questions available</div>;
    // }

    const currentQuestion = questionViewData.questions[currentQuestionIndex];
    const totalQuestions = questionViewData.questions.length;
    const answersData = currentQuestion.answers;
    console.log(currentQuestion.answers)

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div>

            <Box key={currentQuestionIndex}
                sx={{
                    backgroundColor: currentQuestion.isCorrect ? '#edeff7' : '#f2f2f2',
                    borderRadius: '20px',
                    p: '20px',
                    textAlign: 'left'
                }}>
                <Stack direction={'row'} spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Typography variant="inherit" fontSize={18} fontWeight={700}>
                        Q-{currentQuestionIndex + 1}
                    </Typography>
                    <Chip
                        label={currentQuestion.isCorrect ? 'Correct' : 'Wrong'}
                        variant="outlined"
                        icon={currentQuestion.isCorrect ? <CheckIcon color='inherit' /> : <CloseIcon color='inherit' />}
                        sx={{
                            border: currentQuestion.isCorrect ? '1.5px solid #3f4a8d' : '1.5px solid #666666',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: currentQuestion.isCorrect ? '#3f4a8d' : '#666666',
                        }} />
                </Stack>

                <Typography align='left' fontSize={18} sx={{ margin: '15px 0 0 0px', }}>
                    {currentQuestion.question_text}
                </Typography>

                <Stack direction={"column"} spacing={2.5} sx={{ textAlign: 'left', margin: '25px 0 0 100px' }}>
                    {answersData && answersData.map((answer, answerIndex) => (
                        <Stack direction={'row'} spacing={1} key={answerIndex}>
                            {answer.isCorrect ? (
                                <CheckCircleIcon fontSize="medium" sx={{ color: '#37407b' }} />
                            ) : answer.isCorrect === false && answer.isSelect === true ? (
                                <CancelIcon fontSize="medium" sx={{ color: '#ff4d4d' }} />
                            ) : (<CancelIcon fontSize="medium" sx={{ color: '#9e9e9e' }} />)}

                            <Typography fontSize={18}
                                sx={{
                                    color:
                                        answer.isCorrect ? '#37407b' :
                                            answer.isCorrect === false && answer.isSelect === true ? '#ff4d4d' :
                                                '#9e9e9e',
                                    textDecoration:
                                        answer.isCorrect === false && answer.isSelect === false ? 'line-through' :
                                            'none'
                                }}>
                                {answer.answer_text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
                <Typography fontSize={18} sx={{ margin: '25px 0 0 0px' }}>
                    <span style={{ fontWeight: 600 }}>Your Answer: </span>
                    <span style={{
                        marginLeft: '10px',
                        color: currentQuestion.isCorrect ? '#37407b' : '#ff4d4d'
                    }}>
                        {currentQuestion.userAnswer.answer_text}
                    </span>

                </Typography>

            </Box>

            <Box xs={12} sx={{display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Stack direction={'row'} spacing={2}>
                    <IconButton size='small' onClick={handlePrevQuestion} sx={{ border: '1px solid #7C7C91' }}> <NavigateBeforeIcon /></IconButton>
                    <IconButton size='small' onClick={handleNextQuestion} sx={{ border: '1px solid #7C7C91' }}> <NavigateNextIcon /></IconButton>
                </Stack>
            </Box>

        </div>
    );
}

export default QuestionBox;