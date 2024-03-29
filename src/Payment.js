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
    TextField,
    Checkbox,
    FormControlLabel
} from './Mui'

import useStyle from './PaymentStyle';
import { Appbar } from './Components/Loginpg/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Payment() {

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#6070D4',
                dark: '#e3f2fd'
                // contrastText: '#fff'
            },
            secondary: {
                main: '#6070D4'
            }
        },
    });

    const classes = useStyle();
    return (
        <Grid container lg={12} >
             
            <Grid item lg ={12}>
            <br></br> <br></br> <br></br> <br></br>
                        <Appbar/>
            </Grid>
            <Grid container lg={12} sx={{
                margin: "100px 100px 0px 100px",
                // width: '200px',
                // height: '300px',
                borderRadius: '20px',
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Grid item lg={6}>
                    <Box sx={{
                        // flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '600px', p: 3,
                        background: 'linear-gradient(180deg, #6070D4 0%, #323A6E 99.99%, #323A6E 100%)',
                        borderRadius: '20px 0px 0px 20px'
                    }}>
                        <img src='./Images/Payment Information-rafiki 1.png' width={'350px'}></img>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box sx={{
                        flexGrow: 1,
                        height: '600px', p: 3,
                        backgroundColor: '#F0F2F7',
                        borderRadius: '0px 20px 20px 0px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <ThemeProvider theme={outerTheme}>
                            <Stack direction={'column'} spacing={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='h6' fontWeight={'1000'} display={'flex'} alignItems={'start'} marginBottom={'30px'} sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '26.14px',fontWeight:"bold" ,fontFamily: 'Inter, sans-serif'}}>Pay with Card</Typography>
                                <Typography variant='h9' display={'flex'} alignItems={'start'}  sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '20.11px',fontFamily: 'Inter, sans-serif'}}>Card Number</Typography>
                                <TextField sx={{ marginBottom: '20px' }}></TextField>
                                <Typography variant='h9' display={'flex'} alignItems={'start'}  sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '20.11px',fontFamily: 'Inter, sans-serif'}}>Name on Card</Typography>
                                <TextField sx={{ marginBottom: '20px' }}></TextField>
                                <Stack direction={'row'} spacing={5}>
                                    <Stack direction={'column'}>
                                        <Typography variant='h9' display={'flex'} alignItems={'start'}  sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '20.11px',fontFamily: 'Inter, sans-serif'}}>Exp (MM/YY)</Typography>
                                        <TextField sx={{ marginBottom: '20px', width: '200px' }}> </TextField>
                                    </Stack>
                                    <Stack direction={'column'} >
                                        <Typography variant='h9' display={'flex'} alignItems={'start'}  sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '20.11px',fontFamily: 'Inter, sans-serif'}}>CVV</Typography>
                                        <TextField sx={{ marginBottom: '20px', width: '100px' }}> </TextField>
                                    </Stack>
                                </Stack>
                                <FormControlLabel required control={<Checkbox />}  sx={{ textTransform: 'none',  color: '#323A6E', fontSize: '20.11px',fontWeight:"bold" ,fontFamily: 'Inter, sans-serif'}}label="I accept the terms and conditions " /><br></br>
                                <Button sx={{ borderRadius: '20px' , textTransform: 'none' , color: '#323A6', fontSize: '20.11px', fontFamily: 'Inter, sans-serif' }} className={classes.signButton} variant="contained" color='secondary'>Subscribe</Button>

                            </Stack>
                        </ThemeProvider>

                    </Box>
                </Grid>

            </Grid>
            <Grid container lg={6}>

            </Grid>
        </Grid>


    );
};

export default Payment;