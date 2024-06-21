import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import Container from '@mui/material/Container';
import { Button, Grid, Slide } from "@mui/material";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import QuizQuestionButtons from "../Components/AttemptQuiz/QuestionButtons";
import QuizQuestions from "../Components/AttemptQuiz/QuestionsAttempt";
import { WhitePaper } from "../Components/Utils/StyledComponents";
import RestartDialog from "../Components/AttemptQuiz/RestartDialog";
import TimeoutDialog from "../Components/AttemptQuiz/TimeoutDialog";
import ConfirmSubmitDialog from "../Components/AttemptQuiz/ConfirmSubmitDialog";
import PostSubmitDialog from "../Components/AttemptQuiz/PostSubmitDialog";

import { SpecificQuizContext } from '../Components/Utils/Contexts';




function AttemptQuiz() {

    const [questionViewData, setQuestionViewData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [open, setOpen] = useState(false);
    const [restartDialogOpen, setRestartDialogOpen] = useState(false);
    const [timeUpDialogOpen, setTimeUpDialogOpen] = useState(false);
    const [confirmSubmitDialogOpen, setConfirmSubmitDialogOpen] = useState(false);
    const [postSubmitDialogOpen, setPostSubmitDialogOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(65);
    const [snackBarState, setSnackBarState] = useState({ open: false, message: '', alert: 'warning' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const areAllQuestionsAnswered = userAnswer.every(answer => answer !== '');
    const noQuestionsAnswered = userAnswer.every(answer => answer === '');



    useEffect(() => {
        const fetchAttempts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/viewResult/66756fdb6534ae372f41a730');
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
        if (timeLeft > 0 && !isSubmitted ) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            if (timeLeft === 60) {
                setSnackBarState({ open: true, message: 'Only 1 minute left!', alert: 'warning' });
            }
            else if (timeLeft === 30) {
                setSnackBarState({ open: true, message: 'Only 30 seconds left!', alert: 'warning' });
            }
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !isSubmitted) {
            setRestartDialogOpen(false);
            setTimeUpDialogOpen(true);
            setSnackBarState({ open: true, message: 'Your Answers have been submitted', alert: 'success' });
        }
    }, [timeLeft, isSubmitted]);

    console.log(userAnswer)

    const handleRestartDialogClose = () => {
        setRestartDialogOpen(false);
    };

    const handleRestart = () => {
        // Restart logic here
        setUserAnswer(Array(questionViewData.selectedAnswers.length).fill(''));
        setCurrentQuestionIndex(0);
        setTimeLeft(65); // Reset timer
        setRestartDialogOpen(false);
        setTimeUpDialogOpen(false);

    };

    const handleTimeUpDialogClose = () => {
        setTimeUpDialogOpen(false);
    };

    const handleConfirmSubmitDialogOpen = () => {
        setConfirmSubmitDialogOpen(true);
    }
    const handleConfirmSubmitDialogClose = () => {
        setConfirmSubmitDialogOpen(false);
    }

    const handlePostSubmitDialogClose = () => {
        setPostSubmitDialogOpen(false);
    }

    const handleViewResult = () => {
        // View result logic here
        setTimeUpDialogOpen(false);
        setPostSubmitDialogOpen(false);
    };

    // const handleSubmit = () => {
    //     setIsSubmitted(true);
    //     setTimeLeft(0);
    //     setSnackBarState({ open: true, message: 'Your Answers have been submitted', alert: 'success' });
    //     setConfirmSubmitDialogOpen(false);
    //     setPostSubmitDialogOpen(true);
    // }

    const handleSubmit = async () => {
        try {
            // const candidateId = 'candidate123'; // Replace with actual candidate ID
            // const quizId = '6671c33dcd37ec7c5280c9b1'; // Replace with actual quiz ID
            // const attemptId = 'your_attempt_id'; // Replace with the actual attempt ID
            const selectedAnswers = userAnswer.map((answer, index) => ({
                question_id: questionViewData.quiz_id.questions[index],
                selectedAnswer_id: answer || null
            }));
    
            const score = calculateScore(userAnswer); // Implement this function
            const result = calculateResult(userAnswer); // Implement this function
            // const score = 30;
            // const result = false;
    
    
            const response = await axios.put(`http://localhost:3000/updateattempt/66756fdb6534ae372f41a730`, {
                selectedAnswers,
                score,
                result
            });
    
            setIsSubmitted(true);
            setTimeLeft(0);
            setSnackBarState({ open: true, message: 'Your Answers have been submitted', alert: 'success' });
            setConfirmSubmitDialogOpen(false);
            setPostSubmitDialogOpen(true);
        } catch (error) {
            console.error('Error submitting answers:', error);
            setSnackBarState({ open: true, message: 'Submission failed', alert: 'error' });
        }
    };

    const calculateScore = (userAnswer) => {
        let correctAnswers = 0;
        userAnswer.forEach((answer, index) => {
            const question = questionViewData.selectedAnswers[index].question_id;
            const selectedAnswer = question.answers.find(ans => ans._id === answer);
            if (selectedAnswer && selectedAnswer.isCorrect) {
                correctAnswers += 1; // Assuming each correct answer is worth 1 point
            }
        });
        let score = Math.round(correctAnswers / questionViewData.quiz_id.questions.length *100)
        return score;
    };
    
    const calculateResult = (userAnswer) => {
        const score = calculateScore(userAnswer);
        const passingScore = 80; // Define your passing score threshold
        return score >= passingScore;
    };


    const handleSnackBarState = ({ timeLeft }) => {
        setSnackBarState({
            open: true,
            message: timeLeft === 30 ? '30 seconds left !' : "nothing"
        });
    }
    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarState({
            ...snackBarState,
            open: false,
        });
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
                                <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'start', }}>

                                    <Typography
                                        fontSize={'24px'}
                                        fontWeight={500}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: timeLeft <= 30 ? '#ff6666' : timeLeft <= 60 ? '#f57c00' : '#37407b',

                                        }} variant="h6">
                                        {timeLeft <= 30 ? <WarningAmberIcon sx={{ marginRight: '5px', fontSize: "30px" }} /> : <AccessTimeIcon sx={{ marginRight: '5px', fontSize: "30px" }} />}
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
                                        // disabled={!areAllQuestionsAnswered}
                                        onClick={handleConfirmSubmitDialogOpen}
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
                                <ConfirmSubmitDialog
                                    open={confirmSubmitDialogOpen}
                                    onClose={handleConfirmSubmitDialogClose}
                                    onSubmit={handleSubmit}
                                />
                                <PostSubmitDialog
                                    open={postSubmitDialogOpen}
                                    onClose={handlePostSubmitDialogClose}
                                    onViewResult={handleViewResult}
                                />
                                <Snackbar
                                    open={snackBarState.open}
                                    onClose={handleSnackBarClose}
                                    TransitionComponent={Slide}
                                    autoHideDuration={4000}
                                    sx={{}}

                                >
                                    <Alert severity={snackBarState.alert} sx={{}}>
                                        {snackBarState.message}
                                    </Alert>
                                </Snackbar>
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