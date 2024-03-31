import MouseEvent from 'react';

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
    Pagination,
    Chip,
    Menu,
    MenuItem
} from '../Utils/Mui';
import { CusButton } from '../Utils/StyledComponents';


const CusMenuButton = styled(MenuItem)({
    width:'200px',
    border: '1px solid #323A6E', 
    borderRadius: '20px' ,
    
});

const CusMenu = styled(Menu)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    '& .MuiMenu-paper': {
        width: '260px',
        backgroundColor: '#F0F2F7',
        borderRadius: '20px'
    },
    
})
export const TopButtons = ({buttons}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = React.useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (itemName) => {
        setSelectedMenuItem(itemName);
        handleClose();
    };

    return (
        <div>
            <CusButton
                // variant= 'outlined'
                sx={{width: '250px'}}
                
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {selectedMenuItem || buttons[0]}
            </CusButton>
            <CusMenu
            
                id="basic-menu"
                sx={{ width: '300px',height: '1600px', borderRadius: '0px',  '& .MuiMenu-paper': {
                    height: `${((buttons.length-1) * 35) + (buttons.length-1)*5 +10}px`}, }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                {buttons.slice(1).map((button, index) => (
                    <CusButton
                        key={index}
                        variant="outlined"
                        sx={{ marginBottom: '5px', height: '35px', marginLeft: '30px', width: '200px', marginTop: '0px' }}
                        onClick={() => handleMenuItemClick(button)}
                    >
                        {button}
                    </CusButton>
                ))}
                   
            </CusMenu>
        </div>
    )
}
