
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import AddQA from "../../Components/Admin/TypeQuestion";
import { CusButton, Item } from "../../Components/Utils/StyledComponents";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { switchCompo } from "../../Components/Admin/TypeQuestion";
import { Container } from "@mui/material";

import {
  React,
  Grid,
  styled,
  Paper,
  Avatar,
  ButtonGroup,
  Box,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Stack,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  GridViewOutlinedIcon,
  AddCircleOutlinedIcon,
  CreditScoreOutlinedIcon,
  PersonOutlinedIcon,
  LogoutOutlinedIcon,
  Pagination, 
  Chip
} from '../../Components/Utils/Mui'

import SideBar from "../../Components/Admin/SideBar";
import { TopButtons } from "../../Components/Admin/TopButtons";

function AddTest() {

  const [activeButton, setActiveButton] = useState({ addQuestions: false, addAnswers: false, correctAnswer: false, timeSetting: false, removeTest: false });

  const handleButtonClick = (id) => {
    setActiveButton((prevState) => ({                                       //Set a button active at a time..
      ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === id ? true : false]))
    }));
  };
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.not('md'));

  return (
    <Box sx={{ display: 'flex' }}>

      <SideBar />

      <Box
        component="main"
        sx={{ flexGrow: 1, height: '650px', p: 3, marginTop: '75px', marginRight: '50px', }}
      >
        <Grid container spacing='20px' sx={{ marginTop: '30px' }}>
          <Grid item lg='12' sx={{ marginBottom: '45px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', width: '748px', borderRadius: '20px', backgroundColor: '#F0F2F7' }}>
              <TopButtons buttons={['Tests', 'Car', 'Commercial Vehicle', 'Motorbike']} sx={{ width: '250px' }} />
              <TopButtons buttons={['Difficulty', 'Easy', 'Hard']} />
              <TopButtons buttons={['User Type', 'Normal', 'Premium']} />
            </Box>
          </Grid>

          <Grid item lg='3.8' xs='12'>
            <Item elevation={0} sx={{backgroundColor: matches ? '#F0F2F7' : 'transparent' ,height: matches ? "270px" : "70px", justifyContent: matches ? "center" : "left",marginBottom: matches?'23px': '-5px' }}>
              <Stack direction={matches ? "column" : "row"} spacing={matches? 3:  1} sx={{ width: "100%", alignItems: "center"}}>
                <CusButton variant="outlined" sx={{ width: matches? '80%':'25%', height: matches ? '50px' : '40px', }} disableTouchRipple
                  clicked={activeButton['addQuestions']}
                  onClick={() => handleButtonClick('addQuestions')}
                  startIcon={<AddCircleOutlinedIcon fontSize="small"/>}><Typography fontSize= {matches? '15px':'13px'}>Questions</Typography></CusButton>
                <CusButton variant="outlined" sx={{ width: matches? '80%':'25%', height: matches ? '50px' : '40px', }} disableTouchRipple 
                  clicked={activeButton['addAnswers']}
                  onClick={() => handleButtonClick('addAnswers')}
                  startIcon={<AddCircleOutlinedIcon />}><Typography fontSize= {matches? '15px':'13px'}>Answers</Typography></CusButton>
                <CusButton variant="outlined" sx={{ width: matches? '80%':'25%', height: matches ? '50px' : '40px', }} disableTouchRipple 
                  clicked={activeButton['correctAnswer']}
                  onClick={() => handleButtonClick('correctAnswer')}
                  startIcon={<AddCircleOutlinedIcon />}><Typography fontSize= {matches? '15px':'13px'}>Correct Answer</Typography></CusButton>
              </Stack>
            </Item>

            <Item elevation={0} sx={{backgroundColor: matches ? '#F0F2F7' : 'transparent', width: matches? '100%':'60%',height: matches ? "200px" : "70px", justifyContent: matches ? "center" : "left",}}>
              <Stack direction={matches ? "column" : "row"} spacing={matches? 3:  1} sx={{ width: "100%", alignItems: "center"}}>
                <CusButton variant="outlined" sx={{ width: matches? '80%':'41%', height: matches ? '50px' : '40px', }}
                  clicked={activeButton['timeSetting']}
                  onClick={() => handleButtonClick('timeSetting')}
                  disableTouchRipple startIcon={<AddCircleOutlinedIcon />}><Typography fontSize= {matches? '15px':'13px'}>Time Setting</Typography></CusButton>
                <CusButton variant="outlined" sx={{ width: matches? '80%':'41%', height: matches ? '50px' : '40px', }}
                  clicked={activeButton['removeTest']}
                  onClick={() => handleButtonClick('removeTest')}
                  disableTouchRipple startIcon={<AddCircleOutlinedIcon />}><Typography fontSize= {matches? '15px':'13px'}>Remove Test</Typography></CusButton>
              </Stack>
            </Item>
          </Grid>

          <Grid item lg='8' xs='12'>
            <Item elevation={0} sx={{ height: '493px', justifyContent: 'center' }}>
              <Stack direction={'column'} spacing={1.5} sx={{ marginTop: '-35px' }}>
                {switchCompo(activeButton, "CEG_023")}
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AddTest;