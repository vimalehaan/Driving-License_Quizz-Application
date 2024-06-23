import React from "react";
import { useState } from "react";

import { Grid } from "@mui/material";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";

import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Item, CusBigButton } from "../../Components/Utils/StyledComponents";
import { SwitchCompo } from "../../Components/Admin/Switch_Component";
import { handleButtonClick } from "../../Components/Admin/Switch_Q&AField";
import { TopButton_Difficulty, TopButton_Tests} from "../../Components/Admin/TopButtons";
import SideBar from "../../Components/Admin/SideBar";



function AddTest() {

  const [activeButton, setActiveButton] = useState(
    { addQuestions: false, addAnswers: false, correctAnswer: false, timeSetting: false, removeTest: false }
  );
  

  const [selectedButton_Tests, setSelectedButtons_Tests] = React.useState();

  const handleSelectedButtons_Tests = (selectedItem) => {
      // Append the newly selected item to the existing selectedButtons array
      setSelectedButtons_Tests(selectedItem);
  };
  
  const [selectedButtons_Difficulty, setSelectedButtons_Difficulty] = React.useState();

  const handleSelectedButtons_Difficulty = (selectedItem) => {
      // Append the newly selected item to the existing selectedButtons array
      setSelectedButtons_Difficulty(selectedItem);
  };
  


  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.not('md'));

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '1550px'
      }}>

      <Box sx={{ display: 'flex' }}>
        <SideBar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '650px',
            p: 3,
            marginTop: '75px',
            marginRight: '50px',
          }}
        >
          <Grid container spacing='20px' sx={{ marginTop: '30px'}}>

            <Grid item lg='12' sx={{ marginBottom: '45px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  width: '748px',
                  borderRadius: '20px',
                  backgroundColor: '#F0F2F7'
                }}>
                  

                <TopButton_Tests buttons={['Tests', 'Car', 'Commercial Vehicle', 'Motorbike']} sx={{ width: '250px' }} handleSelectedButtons_Tests={handleSelectedButtons_Tests}/>
               
                <TopButton_Difficulty buttons={['Difficulty', 'Easy', 'Hard']} handleSelectedButtons_Difficulty={handleSelectedButtons_Difficulty}  />


{/* <TopButtons buttons={['User Type', 'Normal', 'Premium']}/*/}

              </Box>
            </Grid>

            <Grid item lg='3.8' xs='12'>
              <Item elevation={0}
                sx={{
                  height: "270px",
                  justifyContent: "center",
                  marginBottom: '23px'
                }}
              >

                <Stack
                  direction={matches ? "column" : "row"}
                  spacing={matches ? 3 : 1}
                  sx={{ width: "100%", alignItems: "center" }}>

                  <CusBigButton variant="outlined"
                    disableTouchRipple
                    clicked={activeButton['addQuestions']}
                    onClick={() => handleButtonClick('addQuestions', setActiveButton)}
                    startIcon={<AddCircleOutlinedIcon fontSize="small" />}>
                    <Typography fontSize={matches ? '15px' : '13px'}>Questions</Typography>
                  </CusBigButton>

                  <CusBigButton variant="outlined"
                    disableTouchRipple
                    clicked={activeButton['addAnswers']}
                    onClick={() => handleButtonClick('addAnswers', setActiveButton)}
                    startIcon={<AddCircleOutlinedIcon />}>
                    <Typography fontSize={matches ? '15px' : '13px'}>Answers</Typography>
                  </CusBigButton>

                  <CusBigButton variant="outlined"
                    disableTouchRipple
                    clicked={activeButton['correctAnswer']}
                    onClick={() => handleButtonClick('correctAnswer', setActiveButton)}
                    startIcon={<AddCircleOutlinedIcon />}>
                    <Typography fontSize={matches ? '15px' : '13px'}>Correct Answer</Typography>
                  </CusBigButton>

                </Stack>

              </Item>



              <Item elevation={0}
                sx={{
                  backgroundColor: '#F0F2F7',
                  width: '100%',
                  height: "200px",
                  justifyContent: "center",
                }}>

                <Stack direction={"column"} spacing={3}
                  sx={{
                    width: "100%",
                    alignItems: "center"
                  }}>

                  <CusBigButton variant="outlined"
                    clicked={activeButton['timeSetting']}
                    onClick={() => handleButtonClick('timeSetting', setActiveButton)}
                    disableTouchRipple
                    startIcon={<AddCircleOutlinedIcon />}>
                    <Typography fontSize={'15px'}>Time Setting</Typography>
                  </CusBigButton>

                  <CusBigButton variant="outlined"
                    clicked={activeButton['removeTest']}
                    onClick={() => handleButtonClick('removeTest', setActiveButton)}
                    disableTouchRipple
                    startIcon={<AddCircleOutlinedIcon />}>
                    <Typography fontSize={'15px'}>Remove Test</Typography>
                  </CusBigButton>

                </Stack>

              </Item>

            </Grid>

            <Grid item lg='8' xs='12'>

              <Item elevation={0} sx={{ height: '493px', justifyContent: 'center' }}>

                <Stack direction={'column'} spacing={1.5} sx={{ marginTop: 'px' }}>

                  {SwitchCompo(activeButton, "CEG_023", setActiveButton, selectedButton_Tests,selectedButtons_Difficulty)}

                </Stack>
              </Item>

            </Grid>

          </Grid>
        </Box>
      </Box>
    </Container>
  );

}

export default AddTest;