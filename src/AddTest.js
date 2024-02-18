import useStyle from "./AddTestStyle";
import { useState } from "react";
import AddQA from "./Components/Admin/TypeQuestion";
import { CusButton, Item } from "./Components/StyledComponents";
import { switchCompo } from "./Components/Admin/TypeQuestion";

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
} from './Mui'
import SideBar from "./Components/Admin/SideBar";

function AddTest() {

  const [activeButton, setActiveButton] = useState({ addQuestions: false, addAnswers: false, correctAnswer: false, timeSetting: false, removeTest: false });

  const handleButtonClick = (id) => {                                        
    setActiveButton((prevState) => ({                                       //Set a button active at a time..
      ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === id ? true : false]))
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>

      <SideBar />

      <Box
        component="main"
        sx={{ flexGrow: 1, height: '650px', p: 3, marginTop: '75px', marginRight: '50px', }}
      >
        <Grid container spacing='20px' sx={{ marginTop: '30px' }}>
          <Grid item lg='12' sx={{ marginBottom: '45px' }}>
            <ButtonGroup  sx={{ display: 'flex', justifyContent: 'left', width: '750px', borderRadius: '20px', backgroundColor: '#F0F2F7' }} >
              <CusButton sx={{ height: '40px', width: '250px' }}>hello</CusButton>
              <CusButton sx={{ height: '40px', width: '250px' }}>hello</CusButton>
              <CusButton sx={{ height: '40px', width: '250px' }}>hello</CusButton>
            </ButtonGroup>
          </Grid>

          <Grid item lg='3.8' xs='0'>
            <Item elevation={0} sx={{ height: '270px', marginBottom: '23px' }}>
              <Stack direction={"column"} spacing={3}>
                <CusButton variant="outlined" disableTouchRipple sx={{width: '300px', height: '50px',}}
                  clicked={activeButton['addQuestions']}
                  onClick={() => handleButtonClick('addQuestions')}
                  startIcon={<AddCircleOutlinedIcon />}>Questions</CusButton>
                <CusButton variant="outlined" disableTouchRipple sx={{width: '300px', height: '50px',}}
                  clicked={activeButton['addAnswers']}
                  onClick={() => handleButtonClick('addAnswers')}
                  startIcon={<AddCircleOutlinedIcon />}>Answers</CusButton>
                <CusButton variant="outlined" disableTouchRipple sx={{width: '300px', height: '50px',}}
                  clicked={activeButton['correctAnswer']}
                  onClick={() => handleButtonClick('correctAnswer')}
                  startIcon={<AddCircleOutlinedIcon />}>Correct Answer</CusButton>
              </Stack>
            </Item>

            <Item elevation={0} sx={{ height: '200px' }}>
              <Stack direction={"column"} spacing={3}>
                <CusButton variant="outlined" sx={{width: '300px', height: '50px',}}
                  clicked={activeButton['timeSetting']}
                  onClick={() => handleButtonClick('timeSetting')}
                  disableTouchRipple startIcon={<AddCircleOutlinedIcon />}>Time Setting</CusButton>
                <CusButton variant="outlined" sx={{width: '300px', height: '50px',}}
                  clicked={activeButton['removeTest']}
                  onClick={() => handleButtonClick('removeTest')}
                  disableTouchRipple startIcon={<AddCircleOutlinedIcon />}>Remove Test</CusButton>
              </Stack>
            </Item>
          </Grid>

          <Grid item lg='8' xs='12'>
            <Item elevation={0} sx={{ height: '493px' }}>
              <Stack direction={'column'}>
                <Item elevation={0} sx={{ height: '493px' }}>
                  {switchCompo(activeButton)}
                </Item>

              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AddTest;