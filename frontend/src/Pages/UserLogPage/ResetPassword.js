import React, {useState} from 'react';
import { AppBar, Typography , Snackbar, Alert } from '@mui/material';
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

function ResetPassword() {

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

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const validatePassword = () => {
        let isValid = true;

        if (newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        // Add form submission logic here
        if (validatePassword()) {
            // Simulate a successful or unsuccessful update
            const isUpdateSuccessful = true; // Change to false to simulate unsuccessful update

            setSuccess(isUpdateSuccessful);
            setOpen(true);

            if (isUpdateSuccessful) {
                setShowSignIn(true);
            }
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div className='ResetPasswordPage'>

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
                                        type="password"
                                        label="New Password"
                                        name="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        error={!!passwordError}
                                        helperText={passwordError}
                                        InputProps={{ sx: { borderRadius: '20px' } }}
                                    />

                                    <TextField className={classes.textField}
                                        required
                                        type="password"
                                        label="Confirm Password"
                                        name="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        error={!!confirmPasswordError}
                                        helperText={confirmPasswordError}
                                        InputProps={{ sx: { borderRadius: '20px' } }}
                                    />
                                  
                                  {!showSignIn && (
                                        <Button
                                            sx={{ borderRadius: '20px', textTransform: 'none' }}
                                            className={classes.signButton}
                                            variant="contained"
                                            color='secondary'
                                            type="submit"
                                        >
                                            Update
                                        </Button>
                                    )}

                                    {/* <Button type='submit' sx={{ borderRadius: '20px', textTransform: 'none' }} className={classes.signButton} variant="contained" color='secondary'>Update</Button> */}

                                    {showSignIn && (
                                        <Button
                                            sx={{ borderRadius: '20px', textTransform: 'none', marginTop: '10px' }}
                                            className={classes.signButton}
                                            variant="contained"
                                            color='secondary'
                                            href="#"
                                        >
                                            Sign in
                                        </Button>
                                    )}
                                </Stack>
                            </form>
                            {/* <Typography variant='h9' className={classes.typo} marginBottom={0} marginTop={2}>
                                Want to login again? <Link href="#" underline="none" color='#09BCE0'> {'Login'} </Link>
                            </Typography>  */} <br />
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
                <Alert onClose={handleClose} severity={success ? "success" : "error"} sx={{ width: '100%' }}>
                    {success ? "Updated successfully" : "Update unsuccessful"}
                </Alert>
            </Snackbar>

        </div>
    );
}

export default ResetPassword;