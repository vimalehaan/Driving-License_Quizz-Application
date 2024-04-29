import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createContext } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { typographyTheme } from '../Components/Utils/TypographyTheme';
import { WhitePaper, CusButtonPurp } from '../Components/Utils/StyledComponents';
import ExamViewCauge from '../Components/UserProfile/ExamViewGauge';
import QuestionButtons from '../Components/ViewResult/QuestionButtonSet';
import QuestionBox from '../Components/UserProfile/QuestionBox';
import QuizzDetails from '../Components/UserProfile/QuizDetailComponent';
import QuizResultComponent from '../Components/ViewResult/QuizResultData';
import { SpecificQuizContext } from '../Components/Utils/Contexts';
import UserExamView from '../Components/UserProfile/UserViewExam';

function ViewResultPage() {
    const [questionViewData, setQuestionViewData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const fetchAttempts = async () => {
            try {
                // Make a GET request to your backend endpoint
                const response = await axios.get('http://localhost:3000/viewResult/662c21929cf7df3af2937cfb'); // Adjust the URL if your backend is hosted on a different domain
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
            <ThemeProvider theme={typographyTheme}>
                <Container
                    maxWidth={'false'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '1100px',
                        marginTop: '50px'
                    }}>
                    <Grid container spacing={"30px"}>

                        <SpecificQuizContext.Provider value={{ questionViewData, currentQuestionIndex, setCurrentQuestionIndex }}>
                            <Grid item lg='4' xs='4'>
                                {/* <UserExamView /> */}
                                <WhitePaper sx={{ height: '220px' }}>
                                    <QuizResultComponent />
                                </WhitePaper>
                                <Box>
                                    
                                </Box>
                                <WhitePaper sx={{ marginTop: '30px' }}>

                                    {/* <QuizzDetails /> */}
                                    <QuestionButtons />


                                </WhitePaper>
                            </Grid>
                            <Grid item lg='8' xs='8'>
                                <WhitePaper >
                                    <QuestionBox />
                                </WhitePaper>
                            </Grid>
                        </SpecificQuizContext.Provider>

                    </Grid>
                </Container>

            </ThemeProvider>
        </div>
    );
}

export default ViewResultPage;