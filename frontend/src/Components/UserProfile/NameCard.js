import React, { useState } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import SaveIcon from '@mui/icons-material/Save';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';


import DiamondIcon from '@mui/icons-material/Diamond';

const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            border: "1.5px solid #6070D4", // Styles the input border when focused
            color: '#6070D4'
        },
    },
    '& label.Mui-focused': {
        color: '#6070D4',
    },
  });


export default function ImgMediaCard() {
    const [editOpen, setEditOpen] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState('/Images/avatar-placeholder.png');
    const [firstName, setFirstName] = useState('Lehaananth');
    const [lastName, setLastName] = useState('Vimalanathan');
    const [tempFirstName, setTempFirstName] = useState(firstName);
    const [tempLastName, setTempLastName] = useState(lastName);
    const [email, setEmail] = useState('lehaan@example.com');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newEmail, setNewEmail] = useState(email);


    const handleEditClickOpen = () => {
        setNewFirstName(firstName);
        setNewLastName(lastName);
        setNewEmail(email);
        setEditOpen(true);
    };

    const handlePasswordClickOpen = () => {
        setPasswordOpen(true);
    };

    const handleClose = () => {
        setEditOpen(false);
        setPasswordOpen(false);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        if (newFirstName.trim() === '' || newLastName.trim() === '' || newEmail.trim() === '') {
            alert("All fields are required");
            return;
        }
        // Assuming here is an API call to save the data
        // saveProfile(newFirstName, newLastName, newEmail, profilePicture)
        setFirstName(newFirstName);
        setLastName(newLastName);
        setEmail(newEmail);
        // Save changes logic here
        setFirstName(tempFirstName);
        setLastName(tempLastName);
        handleClose();
    };

    const handlePasswordSave = () => {
        if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
            alert("All fields are required");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match");
            return;
        }
        // Assuming here is an API call to save the new password
        // changePassword(currentPassword, newPassword)
        handleClose();
    };


    return (
        <>
            <Card sx={{ borderRadius: '20px', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.1)', }}>
                <CardMedia
                    component="img"
                    alt="cover image"
                    height="220px"
                    image="/Images/Rectangle 60.png"
                />
                <CardContent>

                    <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', margin: '-130px 0 0 30px' }}>
                        <Avatar sx={{ width: '130px', height: '130px', bgcolor: '#323A6E', fontSize: '40px', border: '2px solid white' }} src={profilePicture} />
                        <Stack direction={'column'} spacing={1} sx={{ alignItems: 'flex-start', }}>
                            <Typography fontWeight='700' sx={{ color: 'white', fontSize: '22px', }}>{firstName} {lastName}</Typography>
                            {/* <Typography sx={{ color: 'white', fontSize: '14px', }}>lehaan1234</Typography> */}
                        </Stack>
                    </Stack>

                </CardContent>
                <CardActions sx={{ height: '40px', justifyContent: 'flex-end', alignItems: 'center', marginTop: '-35px' }}>
                    <Button onClick={handleEditClickOpen} startIcon={<EditIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            color: '#6070D4',
                            borderRadius: '20px'
                        }}>Edit</Button>
                    <Button onClick={handlePasswordClickOpen} startIcon={<LockIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            color: '#6070D4',
                            borderRadius: '20px'
                        }}>Change Password</Button>
                    {/* <Chip variant="outlined" sx={{marginBottom: '30px', border: '2px solid #ffc400',color:'#ffc400'}} icon={<DiamondIcon sx={{color:'#ffc400'}} color='#ffc400' />} label="Premium" /> */}
                </CardActions>
            </Card>

            {/* //Edit profile dialog */}
            <Dialog open={editOpen} onClose={handleClose}
                sx={{
                    ".MuiDialog-paper": {
                        borderRadius: '20px'
                    }
                }}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item lg={4} xs={4}>
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="profile-picture-upload"
                                    type="file"
                                    onChange={handleProfilePictureChange}

                                />
                                <label htmlFor="profile-picture-upload">
                                    <IconButton component="span">
                                        <Avatar
                                            src={profilePicture}
                                            sx={{ width: 140, height: 140 }}
                                        />
                                    </IconButton>
                                </label>
                            </Box>
                        </Grid>
                        <Grid item lg={8} xs={8}>
                            <CustomTextField
                                autoFocus
                                margin="dense"
                                id="firstName"
                                label="FirstName *"
                                type="text"
                                fullWidth
                                value={tempFirstName}
                                onChange={(e) => setTempFirstName(e.target.value)}
                                InputProps={{ sx: { borderRadius: '20px', } }}
                            />
                            <CustomTextField
                                margin="dense"
                                id="lastName"
                                label="LastName *"
                                type="text"
                                fullWidth
                                value={tempLastName}
                                onChange={(e) => setTempLastName(e.target.value)}
                                InputProps={{ sx: { borderRadius: '20px' } }}
                            />
                            {/* <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email *"
                                    type="email"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{ sx: { borderRadius: '20px' } }}
                                /> */}
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions sx={{ marginTop: '-10px', marginRight: '10px' }}>
                    <Button onClick={handleClose} startIcon={<ArrowBackIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            borderRadius: '20px',
                            width: '100px',
                            color: '#6070D4',
                        }}>Back</Button>
                    <Button onClick={handleSave} startIcon={<SaveIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            borderRadius: '20px',
                            width: '100px',
                            color: '#6070D4',
                        }}>Save</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={passwordOpen} onClose={handleClose}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                        <CustomTextField
                            autoFocus
                            margin="dense"
                            id="currentPassword"
                            label="Current Password *"
                            type="password"
                            fullWidth
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        <CustomTextField
                            margin="dense"
                            id="newPassword"
                            label="New Password *"
                            type="password"
                            fullWidth
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        <CustomTextField
                            margin="dense"
                            id="confirmPassword"
                            label="Confirm Password *"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} startIcon={<ArrowBackIcon />}>Back</Button>
                    <Button onClick={handlePasswordSave} startIcon={<EditIcon />}>Save</Button>
                </DialogActions>
            </Dialog>

        </>

    );
}