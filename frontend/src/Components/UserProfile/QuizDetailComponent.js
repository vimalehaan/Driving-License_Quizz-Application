import React from 'react'

import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Grid } from "@mui/material";



import CircleIcon from '@mui/icons-material/Circle';

import ExamViewCauge from './ExamViewGauge';

function QuizzDetails() {
    return (
        <div>
            <Grid container  >
                <Grid item xs={12} sx={{}}>
                    <Box sx={{ borderRadius: '20px', marginTop: '-20px'}} >
                        <Stack direction={'row'} spacing={1.5} sx={{ alignItems: 'center' }}>
                            <Typography fontSize={23} fontWeight={700} > Quiz 1</Typography>
                            <Chip
                                label='Failed'
                                variant="outlined"
                                sx={{
                                    border: '1.5px solid #FF7C7C',
                                    height: '25px',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    color: '#FF7C7C',
                                }} />
                        </Stack>
                        {/* <Rating name="size-medium" defaultValue={2} /> */}
                    </Box>
                </Grid>
                <Grid item xs={5} marginTop={'30px'}>
                    <Stack direction={'row'} spacing={1}>
                        <Chip label={'Hardest'} sx={{ minWidth: '60px' }}></Chip>
                        <Chip label={'Car Test'} sx={{ minWidth: '80px' }}></Chip>
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
                        Let’s give this another shot.</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default QuizzDetails;