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

import { useStylesOne } from './TypeQuestion';
import { useState } from 'react';

export default function AnswerTextField({ answers, onAnswerChange }) {
    const classes = useStylesOne();
    // const numbers = [1, 2, 3, 4];
    

    const handleChange = (event, index) => {
        const value = event.target.value;
        const newAnswers = [...answers];
        newAnswers[index] = value;
        onAnswerChange(newAnswers);
    };

    return (
        <div>
            {answers.map((answer, index) => (
                <TextField key={index} className={classes.SmallTextField}
                    id="`answer-${index}`"
                    maxRows={2}
                    placeholder={`Answer ${index + 1}`}
                    value={answer}
                    inputProps={{ color: 'blue' }}
                    sx={{ marginTop: '5px', marginLeft: '0px', width: '600px' }}
                    InputProps={{ sx: { borderRadius: '20px' } }}
                    onChange={(event) => handleChange(event, index)}
                />
            ))}
        </div>
    )
}