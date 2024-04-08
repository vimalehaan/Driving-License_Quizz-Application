import { useState } from 'react';
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

export default function QuestionTextField({initialValue, onChange}) {
    const classes = useStylesOne();
    const handleChange = (event) => {
        const newText = event.target.value;
        onChange(newText); // Notify parent component of the change
      };
    
   
    return (
        <div>
            <TextField className={classes.bigTextField}
                id="standard-textarea"
                maxRows={6}
                placeholder={"Type your question here..."}
                multiline
                sx={{ marginTop: '20px', marginLeft: '25px', width: '600px'}}
                InputProps={{ sx: { borderRadius: '20px'} }}
                value={initialValue} // Bind value to initialValue prop
        onChange={handleChange} // Notify parent component of the change
            />
        </div>
    )
}