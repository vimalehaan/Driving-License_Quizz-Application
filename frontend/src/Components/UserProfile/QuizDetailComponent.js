import React from 'react'

import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Grid } from "@mui/material";

import CircleIcon from '@mui/icons-material/Circle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import ExamViewCauge from './ExamViewGauge';
import { CusButtonPurp } from '../Utils/StyledComponents';
import DirectionsCar from '@mui/icons-material/DirectionsCar';

function QuizzDetails() {
    
    return (
        <div>
            <Grid container  >
                <Grid item xs={12} sx={{}}>
                    <Box sx={{ borderRadius: '20px', marginTop: '-20px' }} >
                        <Stack direction={'row'} spacing={1.5} sx={{ alignItems: 'center' }}>
                            <Typography fontSize={23} fontWeight={700} > Quiz 1</Typography>
                            <DirectionsCar fontSize='large'/>
                            <Chip
                                label='Failed'
                                variant="outlined"
                                sx={{
                                    border: '1.5px solid #FF7C7C',
                                    height: '25px',
                                    fontSize: '15px',
                                    // fontWeight: '700',
                                    color: '#FF7C7C',
                                }} />
                        </Stack>
                        {/* <Rating name="size-medium" defaultValue={2} /> */}
                    </Box>
                </Grid>
                <Grid item xs={5} marginTop={'30px'}>
                    <Stack direction={'row'} spacing={1}>
                        <Chip variant='outlined' label={'Hardest'}  sx={{color: '#6070D4', border: '1.5px solid #6070D4', minWidth: '60px' }}></Chip>
                        <Chip variant='outlined' label={'Car Test'} sx={{ color: '#323A6E', border: '1.5px solid #323A6E', minWidth: '80px' }}></Chip>
                    </Stack>
                    <Box sx={{ marginTop: '10px' }}>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                            <Stack direction={'column'}>
                                <Typography fontSize={'16px'}><CircleIcon sx={{ fontSize: '12px', color: '#8DF4A9' }} /> 6 Correct</Typography>
                                <Typography fontSize={'16px'}><CircleIcon sx={{ fontSize: '12px', color: '#FF7C7C' }} /> 24 Incorrect</Typography>
                            </Stack>
                            <Box>
                                <ExamViewCauge />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={7} spacing={1} sx={{ color: '#7C7C91' }}>
                    <Typography fontFamily={"Passion One"} fontSize={70}>"</Typography>
                    <Typography sx={{ marginTop: '-45px' }}>
                        It’s not the worst thing that could happen. Getting
                        chased by a bull down a narrow street is quite possibly the worst thing that could happen.
                        Let’s give this another shot.
                    </Typography>
                    <CusButtonPurp sx={{ fontSize: '15px', borderRadius: '20px', marginTop: '15px', padding: '20px'}}>Retry the quiz</CusButtonPurp>
                </Grid>
            </Grid>
        </div>
    );
}

export default QuizzDetails;