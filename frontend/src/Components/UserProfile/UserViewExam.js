import React from 'react'
import { useState } from 'react';

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


import QuizzDetails from './QuizDetailComponent';
import { WhitePaper } from '../Utils/StyledComponents';

const questionsData = [
    {
        question: "This free Alberta Driving Practice Test (updated for 2024) covers the basic questions",
        answers: [
            { text: "Correct Answer 1", isCorrect: true, isSelected: true },
            { text: "Wrong Answer 1", isCorrect: false, isSelected: false },
            { text: "Wrong Answer 2", isCorrect: false, isSelected: false },
            { text: "Wrong Answer 3", isCorrect: false, isSelected: false }
        ],
        userAnswer: "User's Answer 1",
        userIsCorrect: true
    },
    {
        question: "This free Alberta Driving Practice Test (updated for 2024) covers the basic questions",
        answers: [
            { text: "Correct Answer 1", isCorrect: true, isSelected: false },
            { text: "Wrong Answer 1", isCorrect: false, isSelected: true },
            { text: "Wrong Answer 2", isCorrect: false, isSelected: false },
            { text: "Wrong Answer 3", isCorrect: false, isSelected: false }
        ],
        userAnswer: "User's Answer 1",
        userIsCorrect: false
    },
    {
        question: "This free Alberta Driving Practice Test (updated for 2024) covers the basic questions",
        answers: [
            { text: "Wrong Answer 1", isCorrect: false, isSelected: true },
            { text: "Wrong Answer 2", isCorrect: false, isSelected: false },
            { text: "Wrong Answer 3", isCorrect: false, isSelected: false },
            { text: "Correct Answer 1", isCorrect: true, isSelected: false }
        ],
        userAnswer: "User's Answer 1",
        userIsCorrect: false
    },
];

const getBackgroundColor = (answers) => {
    const hasWrongAnswer = answers.some(answer => !answer.isSelected && answer.isCorrect);
    return hasWrongAnswer ? '#ffeff1' : '#f3f9ed';
};




function UserExamView() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const totalQuestions = questionsData.length;

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

    const currentQuestion = questionsData[currentQuestionIndex];


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
                                    backgroundColor: currentQuestion.userIsCorrect ? '#f3f9ed' : '#ffeff1',
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
                                        label={currentQuestion.userIsCorrect ? 'Correct' : 'Wrong'}
                                        variant="outlined"
                                        icon={currentQuestion.userIsCorrect ? <CheckIcon color='inherit' /> : <CloseIcon color='inherit' />}
                                        sx={{
                                            border: currentQuestion.userIsCorrect ? '1.5px solid green' : '1.5px solid #FF7C7C',
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            color: currentQuestion.userIsCorrect ? 'green' : '#FF7C7C',
                                        }} />
                                </Stack>

                                <Typography fontSize={18} sx={{ margin: '15px 0 0 0px', }}>
                                    {currentQuestion.question}
                                </Typography>

                                <Stack direction={"column"} spacing={2.5} sx={{ textAlign: 'left', margin: '25px 0 0 100px' }}>
                                    {currentQuestion.answers.map((answer, answerIndex) => (
                                        <Stack direction={'row'} spacing={1} key={answerIndex}>
                                            {answer.isCorrect ? (
                                                <CheckCircleIcon fontSize="medium" sx={{ color: 'green' }} />
                                            ) : answer.isCorrect === false && answer.isSelected === true ? (
                                                <CancelIcon fontSize="medium" sx={{ color: '#d32f2f' }} />
                                            ) : (<CancelIcon fontSize="medium" sx={{ color: '#9e9e9e' }} />)}

                                            <Typography fontSize={18}
                                                sx={{
                                                    color:
                                                        answer.isCorrect ? 'green' :
                                                            answer.isCorrect === false && answer.isSelected === true ? '#d32f2f' :
                                                                '#9e9e9e',
                                                    textDecoration:
                                                        answer.isCorrect === false && answer.isSelected === false ? 'line-through' :
                                                            'none'
                                                }}>
                                                {answer.text}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Typography fontSize={18} sx={{ margin: '25px 0 0 0px' }}>
                                    <span style={{ fontWeight: 600 }}>Your Answer: </span>
                                    <span style={{
                                        marginLeft: '10px',
                                        color: currentQuestion.answers.find(answer => answer.isSelected && !answer.isCorrect) ? '#d32f2f' : 'green'
                                    }}>
                                        {currentQuestion.answers.find(answer => answer.isSelected)?.text}
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