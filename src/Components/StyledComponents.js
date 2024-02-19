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
} from '../Mui'

export const CusButton = styled(Button)(({ clicked }) => ({
  borderRadius: '20px',
  borderColor: clicked ? '#6070D4' : '#9196B2',
  //Set Inline Height and Width into "sx = {{}}"..
  color: clicked ? '#F0F2F7' : '#9196B2',
  backgroundColor: clicked ? '#6070D4' : null,
  "&:hover": {
    color: clicked ? '#F0F2F7' : '#6070D4',
    borderColor: "#6070D4",
    backgroundColor: clicked ? '#6070D4' : null,
  },
}));

export const SideButton = styled(Button)(({ theme, clicked }) => ({
  border: '0px',
  color: '#9196B2',
  marginBottom: '25px',
  "&:hover": {
      color: '#6070D4',
      border: '0px solid #6070D4',
      backgroundColor: 'transparent ! important',
  },
  color: clicked ? '#6070D4' : '#9196B2',
  transition: '10ms',
}));

export const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F0F2F7',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: '20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ItemOne = styled(Paper)(({ theme }) => ({
  display: 'flex',
  width: '670px',
  backgroundColor: '#FFF',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  border: '0.8px solid #9196B2',
  borderRadius: '20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const SmallButton = styled(Button)(({ theme, clicked }) => ({
  border: clicked ? '1px solid #6070D4' : '1px solid #9196B2',
  //Set Inline Height and Width into "sx = {{}}"..
  minWidth: '0',
  borderRadius: '7px',
  color: clicked ? '#fff' : '#9196B2',
  backgroundColor: clicked ? '#6070D4' : 'transparent',
  "&:hover": {
    color: clicked ? '#fff' : '#6070D4',
    border: '1px solid #6070D4',
    backgroundColor: clicked ? '#6070D4' : 'transparent !important'
  },
}));
