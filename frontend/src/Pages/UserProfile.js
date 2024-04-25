import React from 'react'
import { createContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@emotion/react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';

import Namecard from '../Components/UserProfile/NameCard'
import SideBar from '../Components/Admin/SideBar';
import UserSideBar from '../Components/UserProfile/UserSideBar';
import { WhitePaper } from '../Components/Utils/StyledComponents';
import BasicPie from '../Components/UserProfile/PieChart';
import PassRatioChart from '../Components/UserProfile/PassRatioChart';
import ExamTable from '../Components/UserProfile/ExamTable';
import { typographyTheme } from '../Components/Utils/TypographyTheme';
import UserExamView from '../Components/UserProfile/UserViewExam';
import QuizCard from '../Components/UserProfile/QuizCard';
import SimpleLineChart from '../Components/UserProfile/LineChart';

import { QuizData } from '../Components/UserProfile/ExamTable';

import { SpecificQuizContext } from '../Components/Utils/Contexts';



export const RatioChartContext = createContext();
export const ChartDataContext = createContext();
export const ExamViewContext = createContext();
export const QuestionViewContext = createContext();
export const QuizDataContext = createContext();
// export const SpecificQuizContext = createContext();



function UserProfilePage() {
    const [attemptsData, setAttemptsData] = useState([]);
    const [questionViewData, setQuestionViewData] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    console.log('questionViewData:: ' + questionViewData._id)
    console.log('dataQst: ' +questionViewData.questions)

    const attempts = attemptsData.length;
    const completed = attemptsData.filter(data => data.result).length;

    const [showExamView, setShowExamView] = useState(false);
    const userExamViewRef = useRef(null);

    useEffect(() => {
        // Define a function to fetch attempted quizzes
        const fetchAttempts = async () => {
            try {
                // Make a GET request to your backend endpoint
                const response = await axios.get('http://localhost:3000/getattempts'); // Adjust the URL if your backend is hosted on a different domain
                console.log('Response from backend:', response.data);
                // Set the fetched attempted quizzes in state
                setAttemptsData(response.data);
            } catch (error) {
                console.error('Error fetching attempted quizzes:', error);
            }
        };

        // Call the fetchAttempts function when the component mounts
        fetchAttempts();
    }, []);

    console.log("attempt Data length: " + attemptsData.length)
    {
        attemptsData.map(attempts => (
            console.log("attempt Data: " + attempts.difficulty)
        ))
    }



    useEffect(() => {
        if (showExamView && userExamViewRef.current) {
            userExamViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showExamView]);

    return (
        <ThemeProvider theme={typographyTheme}>
            <ChartDataContext.Provider value={{ attemptsData }}>
                <Container
                    maxWidth={'false'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '1300px',
                    }}>
                    <Box sx={{ display: 'flex' }}>
                        <UserSideBar />

                        <Box
                            component="main"
                            sx={{
                                // border: '1px solid black',
                                flexGrow: 1,
                                p: 3,
                                marginTop: '0px',
                                marginRight: '30px',
                            }}
                        >
                            <Grid container spacing='30px' sx={{ marginTop: '0px', justifyContent: 'center', }}>
                                <Grid item lg='12' xs='12' sx={{ marginBottom: '5px' }}>
                                    <Typography fontSize={'25px'} fontWeight={600} textAlign={'left'}>Progress</Typography>
                                </Grid>
                                <Grid item lg='12' xs='12'>
                                    <Namecard />
                                </Grid>
                                <Grid item lg='4.5' xs='4.5'>
                                    <WhitePaper sx={{ height: '60px', display: 'flex', }}>
                                        <Stack direction={'row'} flexGrow={1} >
                                            <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'center', flexBasis: '50%', textAlign: 'center' }}>
                                                <Typography fontSize={'32px'} fontWeight={650} sx={{ marginTop: '-6px' }}>{attempts}</Typography>
                                                <Typography fontSize={'15px'}>Attempts</Typography>
                                            </Stack>
                                            <Divider orientation="vertical" />
                                            <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'center', flexBasis: '50%' }}>
                                                <Typography fontSize={'32px'} fontWeight={650} sx={{ marginTop: '-6px' }}>{completed}</Typography>
                                                <Typography fontSize={'15px'}>Completed</Typography>
                                            </Stack>
                                        </Stack>
                                    </WhitePaper>
                                    <WhitePaper sx={{ height: '230px', marginTop: '20px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-20px' }}>
                                            <BasicPie />
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0px', marginTop: '-50px' }}>
                                            <PassRatioChart difficulty='easy' />
                                            <PassRatioChart difficulty='hard' />
                                            <PassRatioChart difficulty='hardest' />
                                        </Box>
                                    </WhitePaper>


                                </Grid>
                                <ExamViewContext.Provider value={{ setShowExamView, setQuestionViewData }}>
                                    <Grid item lg='7.5' xs='7.5'>
                                        {/* <ExamTable /> */}
                                        {/* <WhitePaper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350px' }}> */}
                                        {/* <SimpleLineChart /> */}
                                        <img height='400px' src='./Images/progress.png' />
                                        {/* </WhitePaper> */}
                                    </Grid>

                                    <Grid item lg='12' xs='12' sx={{ marginTop: '20px' }}>
                                        <Box sx={{ maxWidth: '1000px' }}>
                                            <Typography align='left' fontSize='20px' fontWeight={600} sx={{ marginLeft: '20px' }}>Your Quizzes</Typography>
                                            <Stack direction={'row'} spacing={'30px'} sx={{ overflowX: 'scroll', padding: '20px' }}>
                                                {attemptsData.map((data) => (
                                                    <QuizDataContext.Provider value={{ data, setCurrentQuestionIndex }}>
                                                        <QuizCard />
                                                    </QuizDataContext.Provider>
                                                ))}

                                            </Stack>

                                        </Box>
                                    </Grid>
                                </ExamViewContext.Provider>

                                {showExamView ? (
                                    <SpecificQuizContext.Provider value={{ questionViewData, currentQuestionIndex, setCurrentQuestionIndex}}>
                                        <Grid item lg='12' xs='12'>
                                            <div ref={userExamViewRef}></div>
                                            <UserExamView />
                                        </Grid>
                                    </SpecificQuizContext.Provider>
                                ) : null}


                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ChartDataContext.Provider>
        </ThemeProvider>


    );
}

export default UserProfilePage;