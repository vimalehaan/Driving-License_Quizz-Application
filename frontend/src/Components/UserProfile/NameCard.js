import React from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';


import DiamondIcon from '@mui/icons-material/Diamond';


export default function ImgMediaCard() {
    return (

        <Card sx={{  borderRadius: '20px', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.1)',}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240px"
                image="/Images/Rectangle 60.png"
            />
            <CardContent>
                
                <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', margin: '-130px 0 0 30px' }}>
                    <Avatar sx={{ width: '130px', height: '130px', bgcolor: '#323A6E', fontSize: '40px', border: '2px solid white' }}>L</Avatar>
                    <Stack direction={'column'} spacing={1} sx={{ alignItems: 'flex-start', }}>
                        <Typography fontWeight='700' sx={{ color: 'white', fontSize: '22px', }}>Lehaananth Vimalanathan</Typography>
                        <Typography sx={{ color: 'white', fontSize: '14px', }}>lehaan1234</Typography>
                    </Stack>
                </Stack>

            </CardContent>
            <CardActions sx={{height:'1px', justifyContent:'flex-end'}}>
                {/* <Chip variant="outlined" sx={{marginBottom: '30px', border: '2px solid #ffc400',color:'#ffc400'}} icon={<DiamondIcon sx={{color:'#ffc400'}} color='#ffc400' />} label="Premium" /> */}
            </CardActions>
        </Card>

    );
}