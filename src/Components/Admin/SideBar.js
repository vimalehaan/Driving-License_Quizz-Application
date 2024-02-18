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
    IconButton
} from '../../Mui'

import CusButton from "../../AddTestStyle"
import { makeStyles } from '@mui/styles';

import { useState } from 'react';
const useStyles = makeStyles((theme, clicked) => ({
    drawer: {
        marginLeft: '-10px',
        width: '250px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            marginLeft: '-19px',
            marginTop: '150px',
            width: '215px',
            height: '595px',
            backgroundColor: '#F0F2F7',
        },
    },
    editImage: {
        width: '480px',
    },
    buttonNav: {
        width: '800px',
        height: '100px',
        borderRadius: '50px',
    },
    SideBarButton: {
        color: clicked ? 'primary' : undefined,
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    textButton: {
        "&:hover": {
            color: '#6070D4',
            border: '0px solid #6070D4',
            backgroundColor: 'transparent ! important',
            
        },
        color: '#fdfsfs',
    },

}));

function SideBar() {

    const buttonsData = [
        { name: 'Dashboard', num: 'a', icon: <GridViewOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }} /> },
        { name: 'Add Test', num: 'b', icon: <AddCircleOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }} /> },
        { name: 'Result', num: 'c', icon: <CreditScoreOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }} /> },
        { name: 'User Register', num: 'd', icon: <PersonOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }} /> },
    
    ];
    const [activeButton, setActiveButton] = useState({ a: false, b: false, c: false, d: false });

    const handleButtonClick = (id) => {
        setActiveButton((prevState) => ({                                       //Set a button active at a time..
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === id ? true : false]))
        }));
    };

    const classes = useStyles();
    return (
        <Drawer className={classes.drawer}
            variant="permanent"
            anchor="left"
            PaperProps={{ elevation: '5', square: 'false', sx: { borderRadius: '15px' } }}
        >
            <Toolbar />
            <Stack direction={"row"} marginLeft={5.5} >
                <Avatar sx={{ bgcolor: '#6070D4' }}>L</Avatar>
                <Typography variant="h9" height={40} paddingTop={1.2} marginLeft={1.5}>Lehaan</Typography>
            </Stack>

            <List sx={{ marginTop: '20px' }}>
                {buttonsData.map((button, index) => (
                    <ListItem disablePadding sx={{ marginLeft: '35px' }} >
                        <IconButton disableElevation sx={{  border: '0px', marginBottom: '25px', }} className={classes.textButton} disableTouchRipple disableFocusRipple
                            
                        >
                            <>{button.icon}</>
                            <Typography variant='h9' fontSize={18} fontWeight={30}>{button.name}</Typography>
                        </IconButton>
                    </ListItem>
                ))}
                <ListItem disablePadding >
                    <ListItemButton sx={{ marginTop: '180px' }} disableTouchRipple>

                        <ListItemIcon sx={{ marginRight: '-10px', marginLeft: '35px' }}>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" primaryTypographyProps={{ fontSize: '15px', marginLeft: '-10px' }} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    )
};

export default SideBar;