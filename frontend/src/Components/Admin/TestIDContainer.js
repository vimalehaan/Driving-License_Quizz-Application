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
    Chip
} from '../Utils/Mui'


const IdBox = styled(Box)({
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export default function TestIdComponent({ testid }) {
    return (

        <IdBox
            sx={{
                backgroundColor: '#6070D4',
                margin: '100px',
                height: '40px',
                width: '220px',
            }}>
            <Grid container>
                <Grid item lg={5.8}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '0px'
                    }}>
                    <Typography sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: '600',
                        marginLeft: '13px',
                        width: '60px',
                        color: '#FCFCFC'
                    }}>
                        Test ID
                    </Typography>
                </Grid>
                <Grid item lg={6.2}>
                    <IdBox
                        sx={{
                            backgroundColor: '#FCFCFC',
                            height: '34px',
                            marginRight: '3px'
                        }}>
                        <Typography sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: '500',
                            width: '60px',
                            color: '#6070D4'
                        }}>
                            {testid}
                        </Typography>
                    </IdBox>
                </Grid>
            </Grid>
        </IdBox>

    )
};