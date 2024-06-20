import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography } from '@mui/material';
import { Input as BaseInput } from '@mui/base/Input';
import { Box, styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
//import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Appbar } from '../../Components/UserLog/AppBar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useStyle from "../../Components/UserLog/LogStyle.jsx";


function OTP({ separator, length, value, onChange }) {

    const inputRefs = React.useRef(new Array(length).fill(null));

    const focusInput = (targetIndex) => {
      const targetInput = inputRefs.current[targetIndex];
      targetInput.focus();
    }

    const selectInput = (targetIndex) => {
        const targetInput = inputRefs.current[targetIndex];
        targetInput.select();
      };

      const handleKeyDown = (event, currentIndex) => {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case ' ':
            event.preventDefault();
            break;
          case 'ArrowLeft':
            event.preventDefault();
            if (currentIndex > 0) {
              focusInput(currentIndex - 1);
              selectInput(currentIndex - 1);
            }
            break;
          case 'ArrowRight':
            event.preventDefault();
            if (currentIndex < length - 1) {
              focusInput(currentIndex + 1);
              selectInput(currentIndex + 1);
            }
            break;
          case 'Delete':
            event.preventDefault();
            onChange((prevOtp) => {
              const otp =
                prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
              return otp;
            });
    
            break;
          case 'Backspace':
            event.preventDefault();
            if (currentIndex > 0) {
              focusInput(currentIndex - 1);
              selectInput(currentIndex - 1);
            }
    
            onChange((prevOtp) => {
              const otp =
                prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
              return otp;
            });
            break;
    
          default:
            break;
        }
      };
    
      const handleChange = (event, currentIndex) => {
        const currentValue = event.target.value;
        let indexToEnter = 0;
    
        while (indexToEnter <= currentIndex) {
          if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
            indexToEnter += 1;
          } else {
            break;
          }
        }
        onChange((prev) => {
          const otpArray = prev.split('');
          const lastValue = currentValue[currentValue.length - 1];
          otpArray[indexToEnter] = lastValue;
          return otpArray.join('');
        });
        if (currentValue !== '') {
          if (currentIndex < length - 1) {
            focusInput(currentIndex + 1);
          }
        }
      };
    
      const handleClick = (event, currentIndex) => {
        selectInput(currentIndex);
      };
    
      const handlePaste = (event, currentIndex) => {
        event.preventDefault();
        const clipboardData = event.clipboardData;
    
        // Check if there is text data in the clipboard
        if (clipboardData.types.includes('text/plain')) {
          let pastedText = clipboardData.getData('text/plain');
          pastedText = pastedText.substring(0, length).trim();
          let indexToEnter = 0;
    
          while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
              indexToEnter += 1;
            } else {
              break;
            }
          }
    
          const otpArray = value.split('');
    
          for (let i = indexToEnter; i < length; i += 1) {
            const lastValue = pastedText[i - indexToEnter] ?? ' ';
            otpArray[i] = lastValue;
          }
    
          onChange(otpArray.join(''));
        }
      };
    


    const classes = useStyle();

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#e3f2fd',
                dark: '#e3f2fd'
                // contrastText: '#fff'
            },
            secondary: {
                main: '#F0F2F7'
                
            }
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (

        <div className='loginPage'>
            
            <Grid container className={classes.gridContainer} >
               <Grid item lg ={12}>
                        <Appbar/>
                </Grid>
                <Grid item lg={6}>
                    <img src="./Images/login.png" alt="Image" className={classes.loginImage} />
                </Grid>

                <Grid item alignItems='center' lg={6}>
                    <ThemeProvider theme={outerTheme}>
                    <Typography variant='h6' className={classes.typo} marginBottom={0} marginTop={1.5} marginRight={40}  width='60vh'>
                                Enter the OTP we have send to your email that you have provide  <br></br>
                    </Typography> <br />
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' , marginLeft: '150px', marginBottom:"300px"}}>
                      
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? '',
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
   
    <Button sx={{backgroundColor:"#6070D4", borderRadius: '20px' , textTransform: 'none' , color: 'white', fontSize: '20px', fontFamily: 'Inter, sans-serif', marginRight:"350px", marginTop:"-450px" }} 
    className={classes.signButton} variant="contained" color='secondary'> Submit</Button>
    
  </ThemeProvider>
  </Grid> 
 </Grid>

        </div>
    );
}

OTP.propTypes = {
    length: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    separator: PropTypes.node,
    value: PropTypes.string.isRequired,
  };


export default function OTPInput() {
    const [otp, setOtp] = React.useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={5} />
      <span>Entered value: {otp}</span>
    </Box>
  );
}
const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const InputElement = styled('input')(
    ({ theme }) => `
    width: 40px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 0px;
    border-radius: 8px;
    text-align: center;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );