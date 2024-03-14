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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Payment() {
    const classes = useStyle();



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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <Grid container lg={12} >
            <Grid container lg={12} sx={{
                margin: "100px 100px 0px 100px",
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Grid item lg={6}>
                    <Box sx={{
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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ThemeProvider theme={outerTheme}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction={'column'} spacing={0} sx={{ display: 'flex', justifyContent: 'center' }}>

                                    <Typography variant='h6' fontWeight={'1000'} display={'flex'} alignItems={'start'} marginBottom={'30px'} >Pay with Card</Typography>
                                    <Typography variant='h9' display={'flex'} alignItems={'start'} >Card Number</Typography>
                                    <TextField InputProps={{ sx: { borderRadius: '20px' } }} sx={{ marginBottom: '20px' }}></TextField>
                                    <Typography variant='h9' display={'flex'} alignItems={'start'}>Name on Card</Typography>
                                    <TextField InputProps={{ sx: { borderRadius: '20px' } }} sx={{ marginBottom: '20px' }}></TextField>
                                    <Stack direction={'row'} spacing={5}>
                                        <Stack direction={'column'}>
                                            <Typography variant='h9' display={'flex'} alignItems={'start'}>Exp (MM/YY)</Typography>
                                            {/* <TextField InputProps={{ sx: { borderRadius: '20px' } }} sx={{ marginBottom: '20px', width: '250px' }}> </TextField> */}
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker className={classes.dateField} InputProps={{ sx: { borderRadius: '20px' } }} views={['month', 'year']} />
                                            </LocalizationProvider>
                                        </Stack>
                                        <Stack direction={'column'} >
                                            <Typography variant='h9' display={'flex'} alignItems={'start'}>CVV</Typography>
                                            <TextField InputProps={{ sx: { borderRadius: '20px' } }} sx={{ marginBottom: '20px', width: '100px' }}> </TextField>
                                        </Stack>
                                    </Stack>
                                    <FormControlLabel required control={<Checkbox />} label="I accept the terms and conditions" />
                                    <Button sx={{ borderRadius: '20px', height: '50px', marginTop: '15px' }} variant="contained" color='secondary'>Subscribe</Button>

                                </Stack>
                            </form>
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