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
    Chip
} from '../../Mui'

import { makeStyles } from '@mui/styles';
import { Item, ItemOne, SmallButton } from '../StyledComponents';
import AnswerTextField from './AnswerTextField';
import QuestionTextField from './QuestionTextField';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export const useStylesOne = makeStyles((theme) => ({
    bigTextField: {

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "0px solid black", // Styles the input border
            },
            "&:hover fieldset": {
                border: "0px solid black" // Styles the input border on hover
            },
            "&.Mui-focused fieldset": {
                border: "0px solid black", // Styles the input border when focused
            },
        },
        "& .MuiInputBase-root": {
            color: 'black'
        }
    },
    SmallTextField: {

        "& .MuiOutlinedInput-root": {
            borderRadius: '20px',
            "& fieldset": {
                border: "1px solid #9196B2", // Styles the input border
            },
            "&:hover fieldset": {
                border: "1.5px solid #9196B2" // Styles the input border on hover
            },
            "&.Mui-focused fieldset": {
                border: "1.5px solid #6070D4", // Styles the input border when focused
            },
        },
        "& .MuiInputBase-root": {
            color: 'black'
        }
    },
    textButton: {
        "&:hover": {
            color: '#6070D4',
            border: '0px solid #6070D4',
            backgroundColor: 'transparent ! important'
        },
    },
}));

export const switchCompo = (activeButton) => {
    if (activeButton
    ['addQuestions']) {
        return (

            <AddQA index='addQuestions' />

        );
    } else if (activeButton['addAnswers']) {
        return (
            <AddQA index='addAnswers' />
        );
    }
    return (<img src="./Images/Sentiment analysis-rafiki 1.png" />);
}

function AddQA({ index }) {

    const [activeButton, setActiveButton] = useState({});

    const enableButton = (id) => {            //set buttons active and deactive..
        setActiveButton((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const classes = useStylesOne();


    return (
        <Grid containe sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item lg={12}>
                <ItemOne elevation={0} sx={{ height: '350px', }}>
                    <form>
                        <Stack direction={'row'} sx={{ height: '50px', marginBottom: '20px' }}>

                            <Stack direction={'row'} spacing={'10px'} sx={{ width: '500px', marginTop: '25px', marginLeft: '25px' }}>
                                <SmallButton
                                    sx={{ width: '27px', height: '27px', }}
                                    disableTouchRipple
                                    clicked={activeButton['1']}
                                    onClick={() => enableButton('1')}
                                >
                                    <FormatBoldIcon />
                                </SmallButton>
                                <SmallButton
                                    sx={{ width: '27px', height: '27px', }}
                                    disableTouchRipple
                                    clicked={activeButton['2']}
                                    onClick={() => enableButton('2')}
                                >
                                    <Typography variant='h9' fontSize={20} fontWeight={30}>/</Typography>
                                </SmallButton>
                                <SmallButton
                                    sx={{ width: '27px', height: '27px', }}
                                    disableTouchRipple
                                    clicked={activeButton['3']}
                                    onClick={() => enableButton('3')}
                                >
                                    <FormatUnderlinedIcon fontSize='small' />
                                </SmallButton>

                            </Stack >
                            <Stack sx={{ marginTop: '25px', marginLeft: '-10px' }}>
                                <IconButton disableElevation sx={{ color: '#9196B2', width: '120px', border: '0px', }} className={classes.textButton} disableTouchRipple disableFocusRipple>
                                    <AddCircleOutlinedIcon sx={{ fontSize: '17px', marginRight: '5px' }} />
                                    <Typography variant='h9' fontSize={14} fontWeight={30}>Add Image</Typography>
                                </IconButton>
                            </Stack>

                        </Stack>

                        <Stack sx={{ height: '250px' }}>
                            {/* <QuestionTextField /> */}
                            {index === 'addQuestions' ? <QuestionTextField /> : index === 'addAnswers' ? <AnswerTextField /> : null}

                        </Stack>
                        {/* <Stack sx={{ marginBottom: '-150px', marginLeft: '8px' }}>
                            <IconButton disableElevation sx={{ color: '#9196B2', width: '120px', border: '0px', }} className={classes.textButton} disableTouchRipple disableFocusRipple>
                                <CloudUploadIcon sx={{ fontSize: '17px', marginRight: '5px' }} />
                                <Typography variant='h9' fontSize={14} fontWeight={30}>Upload</Typography>
                            </IconButton>
                        </Stack> */}

                    </form>
                </ItemOne>
            </Grid>

        </Grid>

    );
};

export default AddQA;