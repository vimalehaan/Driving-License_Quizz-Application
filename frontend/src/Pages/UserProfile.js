import React from 'react'
import { createContext } from 'react';
import { ThemeProvider } from '@emotion/react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';

import Namecard from '../Components/UserProfile/NameCard'
import SideBar from '../Components/Admin/SideBar';
import {  WhitePaper } from '../Components/Utils/StyledComponents';
import BasicPie from '../Components/UserProfile/PieChart';
import PassRatioChart from '../Components/UserProfile/PassRatioChart';
import ExamTable from '../Components/UserProfile/ExamTable';
import { typographyTheme } from '../Components/Utils/TypographyTheme';



export const RatioChartContext = createContext();
export const PieChartContext = createContext();

function UserProfilePage() {

    const [attempts, completed] = [15, 10]
    const [easyValue, hardValue, hardestValue] = [6, 8, 10]
    const [easyPassValue, hardPassValue, hardestPassValue] = [5, 4, 5]

    return (
        <ThemeProvider theme={typographyTheme}>
        <Container
            maxWidth={'false'}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '1300px',
            }}>
            <Box sx={{ display: 'flex' }}>
                <SideBar />

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
                    <Grid container spacing='30px' sx={{ marginTop: '30px', justifyContent: 'center', }}>
                        <Grid item lg='12' xs='12' sx={{ marginBottom: '5px' }}>
                            <Typography fontSize={'25px'} fontWeight={600} textAlign={'left'}>Profile</Typography>
                        </Grid>
                        <Grid item lg='12' xs='12'>
                            <Namecard />
                        </Grid>
                        <Grid item lg='4.5' xs='4.5'>
                            <WhitePaper sx={{ height: '60px', display: 'flex',}}>
                                <Stack direction={'row'} flexGrow={1} >
                                    <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'center', flexBasis: '50%', textAlign: 'center' }}>
                                        <Typography fontSize={'32px'} fontWeight={650} sx={{marginTop:'-6px'}}>{attempts}</Typography>
                                        <Typography fontSize={'15px'}>Attempts</Typography>
                                    </Stack>
                                    <Divider orientation="vertical" />
                                    <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'center', flexBasis: '50%' }}>
                                        <Typography fontSize={'32px'} fontWeight={650} sx={{marginTop:'-6px'}}>{completed}</Typography>
                                        <Typography fontSize={'15px'}>Completed</Typography>
                                    </Stack>
                                </Stack>
                            </WhitePaper>
                            <WhitePaper sx={{height:'230px', marginTop: '20px'}}>
                            
                                <PieChartContext.Provider value={{ easyValue, hardValue, hardestValue }}>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'-20px' }}>
                                        <BasicPie />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0px', marginTop: '-50px' }}>
                                        <RatioChartContext.Provider value={{ easyValue, hardValue, hardestValue, easyPassValue, hardPassValue, hardestPassValue }}>
                                            <PassRatioChart difficulty='easy' />
                                            <PassRatioChart difficulty='hard' />
                                            <PassRatioChart difficulty='hardest' />
                                        </RatioChartContext.Provider>
                                    </Box>

                                </PieChartContext.Provider>
                            
                            </WhitePaper>


                        </Grid>
                        {/* <Grid item lg='5.5' xs='5.5' > */}
                            {/* <WhitePaper elevation={0} >
                            
                                <PieChartContext.Provider value={{ easyValue, hardValue, hardestValue }}>

                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <BasicPie />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                        <RatioChartContext.Provider value={{ easyValue, hardValue, hardestValue, easyPassValue, hardPassValue, hardestPassValue }}>
                                            <PassRatioChart difficulty='easy' />
                                            <PassRatioChart difficulty='hard' />
                                            <PassRatioChart difficulty='hardest' />
                                        </RatioChartContext.Provider>
                                    </Box>

                                </PieChartContext.Provider>
                            
                            </WhitePaper> */}

                        {/* </Grid> */}
                        <Grid item lg='7.5' xs='7.5'>
                            <ExamTable />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>
        </ThemeProvider>


    );
}

export default UserProfilePage;