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

import { useStylesOne } from './TypeQuestion';

export default function AnswerTextField() {
    const classes = useStylesOne();
    const numbers = [1, 2, 3, 4];

    return (
        <div>
            {numbers.map((number) => (
                <TextField key={number} className={classes.SmallTextField}
                    id="standard-textarea"
                    maxRows={2}
                    placeholder={`Answer ${number}`}
                    inputProps={{ color: 'blue' }}
                    sx={{ marginTop: '5px', marginLeft: '0px', width: '600px' }}
                    InputProps={{ sx: { borderRadius: '20px' } }}
                />
            ))}
        </div>
    )
}