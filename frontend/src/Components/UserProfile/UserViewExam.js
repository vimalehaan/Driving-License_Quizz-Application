import React from 'react'
import { useState, useContext } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Gauge } from '@mui/x-charts/Gauge';

import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { SpecificQuizContext } from '../../Pages/UserProfile';

import QuizzDetails from './QuizDetailComponent';
import { WhitePaper } from '../Utils/StyledComponents';



const getBackgroundColor = (answers) => {
    const hasWrongAnswer = answers.some(answer => !answer.isSelected && answer.isCorrect);
    return hasWrongAnswer ? '#ffeff1' : '#f3f9ed';
};




function UserExamView() {

    const {questionViewData, currentQuestionIndex, setCurrentQuestionIndex} = useContext(SpecificQuizContext);
    console.log(questionViewData.questions)
    

    
    
    

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

    // const currentQuestion = questionsData[currentQuestionIndex];

    const currentQuestion = questionViewData.questions[currentQuestionIndex];
    const totalQuestions = questionViewData.questions.length;
    const answersData = currentQuestion.answers;
    console.log(currentQuestion.answers)


    return (
        <Box>
            <WhitePaper
                sx={{
                    padding: '50px 50px 20px 50px',
                    
                }}>
                <Stack direction={"column"} spacing={2} sx={{ textAlign: 'left' }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <QuizzDetails />
                            <Box key={currentQuestionIndex}
                                sx={{
                                    backgroundColor: currentQuestion.isCorrect ? '#fafcf8' : '#fffafa',
                                    borderRadius: '20px',
                                    p: '20px',
                                    marginTop: '25px'
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
                                            border: currentQuestion.isCorrect ? '1.5px solid #15d147' : '1.5px solid #ff4d4d',
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            color: currentQuestion.isCorrect ? '#15d147' : '#ff4d4d',
                                        }} />
                                </Stack>

                                <Typography fontSize={18} sx={{ margin: '15px 0 0 0px', }}>
                                    {currentQuestion.question_text}
                                </Typography>

                                <Stack direction={"column"} spacing={2.5} sx={{ textAlign: 'left', margin: '25px 0 0 100px' }}>
                                    {answersData.map((answer, answerIndex) => (
                                        <Stack direction={'row'} spacing={1} key={answerIndex}>
                                            {answer.isCorrect ? (
                                                <CheckCircleIcon fontSize="medium" sx={{ color: '#15d147' }} />
                                            ) : answer.isCorrect === false && answer.isSelect === true ? (
                                                <CancelIcon fontSize="medium" sx={{ color: '#ff4d4d' }} />
                                            ) : (<CancelIcon fontSize="medium" sx={{ color: '#9e9e9e' }} />)}

                                            <Typography fontSize={18}
                                                sx={{
                                                    color:
                                                        answer.isCorrect ? '#12ba3f' :
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
                                        color: currentQuestion.isCorrect ? '#12ba3f' : '#ff4d4d'
                                    }}>
                                        {currentQuestion.userAnswer.answer_text}
                                    </span>

                                </Typography>
                            </Box>
                        </Grid>
                        <Box xs={12} sx={{ justifyContent: 'center', marginTop: '15px' }}>
                            <Stack direction={'row'} spacing={2}>
                                <IconButton size='small' onClick={handlePrevQuestion} sx={{ border: '1px solid #7C7C91' }}> <NavigateBeforeIcon /></IconButton>
                                <IconButton size='small' onClick={handleNextQuestion} sx={{ border: '1px solid #7C7C91' }}> <NavigateNextIcon /></IconButton>
                            </Stack>
                        </Box>

                    </Grid>
                </Stack>
            </WhitePaper>
        </Box>
    );
}

export default UserExamView;