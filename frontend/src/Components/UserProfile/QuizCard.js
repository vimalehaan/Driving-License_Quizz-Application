import React from 'react'
import { useContext } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import { WhitePaper } from '../Utils/StyledComponents';
import { QuizDataContext } from '../../Pages/UserProfile';
import { ExamViewContext } from '../../Pages/UserProfile';

export const useStylesOne = makeStyles((theme) => ({

}));



function QuizCard() {
    const { data } = useContext(QuizDataContext);
    const {setShowExamView} = useContext(ExamViewContext);

    const handleViewQuizContent = () => {
        setShowExamView(true);
    }

    return (
        <WhitePaper 
        onClick={handleViewQuizContent}
        sx={{
            // backgroundColor:
            height: '160px',
            padding: '0px',
            backgroundImage: data.result ? 'url("./Images/circle-check-regular.png")' : 'url("./Images/circle-xmark-regular.png")',
            backgroundColor: data.result ? '#fafcf8' : '#fff5f5',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px',
            backgroundPositionX: '120px',
            backgroundPositionY: '-15px',
            transition: 'transform 0.4s, box-shadow 0.4s, margin-top 0.4s',
            cursor: 'pointer',
            ":hover": {
                marginTop: '-10px',
                transform: 'scale(1.1)', // Enlarge the component on hover
                zIndex: 1, // Bring the component slightly forward
                boxShadow: '2px 4px 10px 0px rgba(0, 0, 0, 0.1)',
            }
        }}>

            <Box sx={{ width: '300px', }}>
                <Box sx={{ margin: '15px', display: 'flex', justifyContent: 'start', }} >
                    <Stack direction={'column'} spacing={1}>
                        <Typography
                            align='left'
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            {data.quiz}
                            <CircleIcon
                                sx={{
                                    color:
                                        data.difficulty === 'Easy' ? '#09BCE0' :
                                            data.difficulty === 'Hard' ? '#9F69D5' :
                                                data.difficulty === 'Hardest' ? '#6070D4' : null,
                                    marginLeft: '5px',
                                    fontSize: '15px'
                                }} />
                        </Typography>

                        <Typography
                            align='left'
                            fontSize={'15px'}
                            sx={{
                                display: 'flex', alignItems: 'center'
                            }}>
                            <CalendarMonthIcon sx={{ fontSize: '17px', marginRight: '5px' }} />
                            {data.date}
                        </Typography>
                        {data.type ? <DirectionsCarIcon sx={{ fontSize: '80px' }} /> :
                            <DirectionsBusIcon sx={{ fontSize: '80px' }} />}
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'start', marginTop: '10px' }}>
                    </Box>
                </Box>
            </Box>
        </WhitePaper>
    );
}

export default QuizCard;