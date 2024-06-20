import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import Container from '@mui/material/Container';
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import QuizQuestionButtons from "../Components/AttemptQuiz/QuestionButtons";
import QuizQuestions from "../Components/AttemptQuiz/QuestionsAttempt";
import { WhitePaper } from "../Components/Utils/StyledComponents";
import RestartDialog from "../Components/AttemptQuiz/RestartDialog";
import TimeoutDialog from "../Components/AttemptQuiz/TimeoutDialog";

import { SpecificQuizContext } from '../Components/Utils/Contexts';




function AttemptQuiz() {

    const [questionViewData, setQuestionViewData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [open, setOpen] = useState(false);
    const [restartDialogOpen, setRestartDialogOpen] = useState(false);
    const [timeUpDialogOpen, setTimeUpDialogOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); 

    const areAllQuestionsAnswered = userAnswer.every(answer => answer !== '');
    const noQuestionsAnswered = userAnswer.every(answer => answer === '');


    
    useEffect(() => {
        const fetchAttempts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/viewResult/6671c33dcd37ec7c5280c9b1');
                console.log('Response from backend:', response.data);
                setQuestionViewData(response.data);
                setUserAnswer(Array(response.data.selectedAnswers.length).fill(''));
            } catch (error) {
                console.error('Error fetching attempted quizzes:', error);
            }
        };
        fetchAttempts();
    }, []);

    useEffect(() => {
        if (timeLeft > 0 ) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setRestartDialogOpen(false);
            setTimeUpDialogOpen(true);
        }
    }, [timeLeft]);

    console.log(userAnswer)

    const handleRestartDialogClose = () => {
        setRestartDialogOpen(false);
    };

    const handleRestart = () => {
        // Restart logic here
        setUserAnswer(Array(questionViewData.selectedAnswers.length).fill(''));
        setCurrentQuestionIndex(0);
        setTimeLeft(10); // Reset timer
        setRestartDialogOpen(false);
        setTimeUpDialogOpen(false);

    };

    const handleTimeUpDialogClose = () => {
        setTimeUpDialogOpen(false);
    };

    const handleViewResult = () => {
        // View result logic here
        setTimeUpDialogOpen(false);
    };



    if (!questionViewData) {
        return <div>Loading...</div>;
    }
    if (!questionViewData || questionViewData.length === 0) {
        return <div>No questions available</div>;
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div>
            <Container
                maxWidth={'false'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '1100px',
                    marginTop: '50px'
                }}>
                <Grid container spacing={"20px"}>
                    <SpecificQuizContext.Provider value={{ questionViewData, currentQuestionIndex, setCurrentQuestionIndex, userAnswer, setUserAnswer, open, setOpen, timeLeft, setTimeLeft, }}>
                        <Grid item lg='4' xs='4'>
                            <WhitePaper sx={{ marginTop: '30px', }}>
                                <QuizQuestionButtons />
                                <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'start', }}>

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: timeLeft <= 30 ? '#ff6666' : '#37407b',
                        
                                        }} variant="h6">
                                        {timeLeft <= 30 ? <WarningAmberIcon sx={{ marginRight: '5px' }} /> : <AccessTimeIcon sx={{ marginRight: '5px' }} />}
                                        {formatTime(timeLeft)}
                                    </Typography>
                                </Box>
                            </WhitePaper>
                            <Box sx={{ marginTop: '20px' }}>
                                <Stack direction={"row"} spacing={'15px'}>
                                    <Button
                                        disabled={noQuestionsAnswered}
                                        onClick={() => setRestartDialogOpen(true)}
                                        startIcon={<ReplayIcon />}
                                        disableRipple
                                        sx={{
                                            flexGrow: '1',
                                            color: '#37407b',
                                            height: '40px',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '20px',
                                            "&:hover": { backgroundColor: '#ffffff' },
                                            boxShadow: '2px 1px 10px 0px rgba(0, 0, 0, 0.1)',
                                            textTransform: 'capitalize'
                                        }}>Restart
                                    </Button>
                                    <Button
                                        disabled={!areAllQuestionsAnswered}
                                        endIcon={<SendIcon />}
                                        disableRipple
                                        sx={{
                                            flexGrow: '1',
                                            color: '#37407b',
                                            height: '40px',
                                            backgroundColor: "#ffffff",
                                            borderRadius: '20px',
                                            "&:hover": { backgroundColor: '#ffffff' },
                                            boxShadow: '2px 1px 10px 0px rgba(0, 0, 0, 0.1)',
                                            textTransform: 'capitalize'
                                        }}>Submit
                                    </Button>
                                </Stack>

                                <RestartDialog
                                    open={restartDialogOpen}
                                    onClose={handleRestartDialogClose}
                                    onRestart={handleRestart}
                                    timeLeft={timeLeft}
                                />
                                <TimeoutDialog
                                    open={timeUpDialogOpen}
                                    onClose={handleTimeUpDialogClose}
                                    onRestart={handleRestart}
                                    onViewResult={handleViewResult}
                                />
                            </Box>

                        </Grid>
                        <Grid item lg='8' xs='8'>
                            <WhitePaper sx={{ marginTop: '30px' }}>
                                <QuizQuestions />
                            </WhitePaper>
                        </Grid>

                    </SpecificQuizContext.Provider>
                </Grid>
            </Container>


        </div>
    );
}

export default AttemptQuiz;