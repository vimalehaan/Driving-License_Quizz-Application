import React from 'react';
import { AppBar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Appbar } from '../../Components/UserLog/AppBar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useStyle from "/Users/lehaan/Desktop/ProjectF/frontend/src/Components/UserLog/LogStyle.jsx";
import '../../Components/UserLog/Login.css';

function Loginpg1() {

    const classes = useStyle();

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#e3f2fd',
                dark: '#e3f2fd'
                // contrastText: '#fff'
            },
            secondary: {
                main: '#6070D4'
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
                        <Stack className={classes.formContainer} direction="column" spacing={0}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column" >
                                    <TextField className={classes.textField}
                                        required
                                        label="Email "
                                        InputProps={{ sx: { borderRadius: '20px' } }}
                                    />

                                    <TextField className={classes.textField}
                                        required
                                        label="Password"
                                        InputProps={{ sx: { borderRadius: '20px' } }}
                                    />

                                    <Button sx={{ borderRadius: '20px' , textTransform: 'none' }} className={classes.signButton} variant="contained" color='secondary'>Sign up</Button>
                                </Stack>
                            </form>
                            <Typography variant='h9' className={classes.typo} marginBottom={0} marginTop={2}>
                                Already have an account? <Link href="#" underline="none" color='#09BCE0'> {'Login'} </Link>
                            </Typography> <br />
                            <Divider className={classes.divider} > or </Divider><br />
                            <Stack direction={'row'} spacing={1.5} marginTop={-1} >
                                <IconButton variant='outlined' size='large'><GoogleIcon color='primary' fontSize='large' /></IconButton>
                                <IconButton variant='outlined' size='large'><FacebookRoundedIcon color='primary' fontSize='large' /></IconButton>
                            </Stack>
                            <Typography variant='h9' className={classes.typo} marginBottom={0} marginTop={1.5} width='45vh'>
                                By signing up to create an account I accept <br />Company’s <Link href="#" underline="none" color={'#09BCE0'}> {'Terms of Use and Privacy Policy'} </Link>
                            </Typography> <br />
                        </Stack>
                    </ThemeProvider>
                </Grid>
            </Grid>

        </div>
    );
}

export default Loginpg1;