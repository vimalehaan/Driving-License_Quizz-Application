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
} from '../Utils/Mui'
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { makeStyles } from '@mui/styles';
import { CusButton, CusButtonPurp, Item, ItemOne, SmallButton } from '../Utils/StyledComponents';
import { handleButtonClick } from './Switch_Q&AField';
import AnswerTextField from './AnswerTextField';
import QuestionTextField from './QuestionTextField';
import TestIdComponent from './TestIDContainer';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CheckIcon from '@mui/icons-material/Check';
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
            color: 'black',
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

export const switchCompo = (activeButton, id, setActiveButton) => {
    //id value is passed from "AddTest.js"... 
    //This function is to switch the AddQustion and AddAnswer Text fields...

    if (activeButton['addQuestions']) {
        return (
            <Stack direction={'column'} spacing={1.5} sx={{ marginTop: '-45px' }}>
                <TestIdComponent testid={id} />
                <AddQA index='addQuestions' />
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <CusButtonPurp onClick={() => handleButtonClick('addAnswers', setActiveButton)} sx={{ width: '120px', fontWeight: '40px', }}>
                        <Typography fontSize={16} sx={{ margin: '-2px -6px 0px 0px' }}>Answers</Typography>
                        <NavigateNextIcon sx={{ marginRight: '-8px' }} />
                    </CusButtonPurp>
                </div>
            </Stack>

        );
    } else if (activeButton['addAnswers']) {
        return (
            <Stack direction={'column'} spacing={1.5} sx={{ marginTop: '-45px' }}>
                <TestIdComponent testid={id} />
                <AddQA index='addAnswers' />
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <CusButtonPurp onClick={() => handleButtonClick('addQuestions', setActiveButton)} sx={{ width: '120px', fontWeight: '40px', }}>
                        <NavigateBeforeIcon sx={{ margin: '0px 0 0 -10px' }} />
                        <Typography fontSize={16} sx={{ margin: '0px 0px 0px -4px' }}>Question</Typography>
                    </CusButtonPurp>

                    <CusButtonPurp sx={{ width: '100px', fontWeight: '40px', }}>
                        <CheckIcon sx={{ fontSize: '20px', margin: '-2px 0 0 -4px' }} />
                        <Typography fontSize={16} sx={{ margin: '-1px 0px 0px 3px' }}>Save</Typography>
                    </CusButtonPurp>
                </Stack>

            </Stack>
        );
    }
    return (<img src="./Images/Sentiment analysis-rafiki 1.png" />);
}

function AddQA({ index }) {


    const [activeButton, setActiveButton] = useState({});
    const [questionText, setQuestionText] = useState('');
    const [answers, setAnswers] = useState(['', '', '', '']);


    const enableButton = (id) => {            //set buttons active and deactive..
        setActiveButton((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const classes = useStylesOne();

    return (
        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item xs={12} lg={12}>
                <ItemOne elevation={0} sx={{ height: '350px', }}>
                    <form>
                        <Stack direction={'row'} sx={{ height: '50px', marginBottom: '20px' }}>

                            <Stack direction={'row'} spacing={'10px'} sx={{ width: '500px', marginTop: '25px', marginLeft: '25px' }}>
                                <SmallButton
                                    sx={{ width: '27px', height: '27px' }}
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
                            {index === 'addQuestions' ? <QuestionTextField initialValue={questionText} onChange={setQuestionText} />
                                : index === 'addAnswers' ? <AnswerTextField answers={answers} onAnswerChange={setAnswers} />
                                    : null}

                        </Stack>

                    </form>
                </ItemOne>
            </Grid>

        </Grid>

    );
};

export default AddQA;