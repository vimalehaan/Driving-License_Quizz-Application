import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import Container from '@mui/material/Container';
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";

import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';

import QuizQuestionButtons from "../Components/AttemptQuiz/QuestionButtons";
import QuizQuestions from "../Components/AttemptQuiz/QuestionsAttempt";
import { WhitePaper } from "../Components/Utils/StyledComponents";

import { SpecificQuizContext } from '../Components/Utils/Contexts';


function AttemptQuiz() {

    const [questionViewData, setQuestionViewData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState(Array(questionViewData.selectedAnswers));

    const areAllQuestionsAnswered = userAnswer.every(answer => answer !== undefined || null);

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setUserAnswer(Array(questionViewData.selectedAnswers.length));
    };

    console.log(userAnswer)
    useEffect(() => {
        const fetchAttempts = async () => {
            try {
                // Make a GET request to your backend endpoint
                const response = await axios.get('http://localhost:3000/viewResult/6671c33dcd37ec7c5280c9b1'); // Adjust the URL if your backend is hosted on a different domain
                console.log('Response from backend:', response.data);
                // Set the fetched attempted quiz in state
                setQuestionViewData(response.data);
            } catch (error) {
                console.error('Error fetching attempted quizzes:', error);
            }
        };

        // Call the fetchAttempts function when the component mounts
        fetchAttempts();
    }, []);

    if (!questionViewData) {
        // If questionViewData is null, render some fallback content or return null
        return <div>Loading...</div>;
    }
    // Check if questions array is not null before accessing its properties
    if (!questionViewData || questionViewData.length === 0) {
        // If questions array is null or empty, render some fallback content or return null
        return <div>No questions available</div>;
    }

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
                    <SpecificQuizContext.Provider value={{ questionViewData, currentQuestionIndex, setCurrentQuestionIndex, userAnswer, setUserAnswer }}>
                        <Grid item lg='4' xs='4'>
                            <WhitePaper sx={{ marginTop: '30px' }}>
                                <QuizQuestionButtons />
                            </WhitePaper>
                            <Box sx={{ marginTop: '20px' }}>
                                <Stack direction={"row"} spacing={'15px'}>
                                    <Button
                                        onClick={handleRestart}
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