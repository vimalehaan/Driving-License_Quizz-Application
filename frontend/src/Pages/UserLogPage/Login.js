import React, { useState } from 'react';
import { AppBar, Typography, Snackbar, Alert } from '@mui/material';
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

import useStyle from "../../Components/UserLog/LogStyle.jsx";
import '../../Components/UserLog/Login.css';

function Login() {

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [open, setOpen] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };



    const handleSubmit = (event) => {

        event.preventDefault();
        
        let isValid = true;
        console.log('asdas');
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            // Add form submission logic here
            console.log('Form submitted');
        }
    
};

const handleForgotPassword = () => {
    // Add your logic for handling forgot password here, e.g., sending an email
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);

};

return (

    <div className='loginPage'>

        <Grid container className={classes.gridContainer} >
            <Grid item lg={12}>
                <Appbar />
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
                                    name="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!emailError}
                                    helperText={emailError}
                                    InputProps={{ sx: { borderRadius: '20px' } }}
                                />

                                <TextField className={classes.textField}
                                    required
                                    type="password"
                                    label="Password"
                                    name="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!passwordError}
                                    helperText={passwordError}
                                    InputProps={{ sx: { borderRadius: '20px' } }}
                                />

                                <Typography variant='h10' className={classes.typo} marginBottom={3} marginTop={-2} marginRight={34}><br></br>
                                    <Link 
                                     href="#" underline="none" color='#09BCE0' onClick={handleForgotPassword}> {'Forget Password ?'} </Link>
                                </Typography>

                                <Button type="submit" sx={{ borderRadius: '20px', textTransform: 'none' }} className={classes.signButton} variant="contained" color='secondary'>Sign in</Button>
                            </Stack>
                        </form>
                        <Typography variant='h9' className={classes.typo} marginBottom={0} marginTop={2}>
                                Don't you have an account? <Link href="#" underline="none" color='#09BCE0'> {'Signup'} </Link>
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

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    We have sent a link to your email address you provided. Click the link and change your password.
                </Alert>
            </Snackbar>

    </div>
);
}


export default Login;