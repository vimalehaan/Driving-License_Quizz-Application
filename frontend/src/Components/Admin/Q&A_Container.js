import React from 'react';
import { useState, useContext } from 'react';

import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

import { ItemOne, SmallButton } from '../Utils/StyledComponents';
import AnswerTextField from './AnswerTextField';
import QuestionTextField from './QuestionTextField';

import { QuestionContext } from './Switch_Component';





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



function AddQA({ index }) {

    const { questionText, setQuestionText } = useContext(QuestionContext);

    const [activeButton, setActiveButton] = useState({});

    const enableButton = (id) => {            //set buttons active and deactive..
        setActiveButton((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const classes = useStylesOne();

    return (

        <Grid container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <Grid item xs={12} lg={12}>
                <ItemOne elevation={0} sx={{ height: '350px', }}>
                    <form>
                        <Stack direction={'row'}
                            sx={{
                                height: '50px',
                                marginBottom: '20px'
                            }}>

                            <Stack direction={'row'} spacing={'10px'}
                                sx={{
                                    width: '500px',
                                    marginTop: '25px',
                                    marginLeft: '25px'
                                }}>
                                <SmallButton
                                    disableTouchRipple
                                    clicked={activeButton['1']}
                                    onClick={() => enableButton('1')}
                                >
                                    <FormatBoldIcon />
                                </SmallButton>

                                <SmallButton
                                    disableTouchRipple
                                    clicked={activeButton['2']}
                                    onClick={() => enableButton('2')}
                                >
                                    <Typography variant='h9' fontSize={20} fontWeight={30}>/</Typography>
                                </SmallButton>

                                <SmallButton
                                    disableTouchRipple
                                    clicked={activeButton['3']}
                                    onClick={() => enableButton('3')}
                                >
                                    <FormatUnderlinedIcon fontSize='small' />
                                </SmallButton>

                            </Stack >
                            <Stack sx={{ marginTop: '25px', marginLeft: '-10px' }}>
                                <IconButton disableElevation
                                    sx={{
                                        color: '#9196B2',
                                        width: '120px',
                                        border: '0px',
                                    }}
                                    className={classes.textButton}
                                    disableTouchRipple
                                    disableFocusRipple>
                                    <AddCircleOutlinedIcon sx={{ fontSize: '17px', marginRight: '5px' }} />
                                    <Typography variant='h9' fontSize={14} fontWeight={30}>Add Image</Typography>
                                </IconButton>
                            </Stack>

                        </Stack>

                        <Stack sx={{ height: '250px' }}>
                            {index === 'addQuestions' ? <QuestionTextField initialValue={questionText} onChange={setQuestionText} />
                                : index === 'addAnswers' ? <AnswerTextField />
                                    : null}
                        </Stack>
                    </form>
                </ItemOne>
            </Grid>
        </Grid >


    );
};

export default AddQA;