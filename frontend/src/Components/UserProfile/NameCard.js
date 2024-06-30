import React, { useState } from 'react';

import Container from '@mui/material/Container';
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
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';


import DiamondIcon from '@mui/icons-material/Diamond';


export default function ImgMediaCard() {
    const [editOpen, setEditOpen] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState('/Images/avatar-placeholder.png');
    const [firstName, setFirstName] = useState('Lehaananth');
    const [lastName, setLastName] = useState('Vimalanathan');
    const [email, setEmail] = useState('lehaan@example.com');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleEditClickOpen = () => {
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
        // Save changes logic here
        handleClose();
    };

    const handlePasswordSave = () => {
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match");
            return;
        }
        // Save password change logic here
        handleClose();
    };


    return (
        <>
            <Card sx={{ borderRadius: '20px', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.1)', }}>
                <CardMedia
                    component="img"
                    alt="cover image"
                    height="240px"
                    image="/Images/Rectangle 60.png"
                />
                <CardContent>

                    <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', margin: '-130px 0 0 30px' }}>
                        <Avatar sx={{ width: '130px', height: '130px', bgcolor: '#323A6E', fontSize: '40px', border: '2px solid white' }} src={profilePicture}/>
                        <Stack direction={'column'} spacing={1} sx={{ alignItems: 'flex-start', }}>
                            <Typography fontWeight='700' sx={{ color: 'white', fontSize: '22px', }}>{firstName} {lastName}</Typography>
                            {/* <Typography sx={{ color: 'white', fontSize: '14px', }}>lehaan1234</Typography> */}
                        </Stack>
                    </Stack>

                </CardContent>
                <CardActions sx={{ height: '1px', justifyContent: 'flex-end' }}>
                    <Button onClick={handleEditClickOpen} startIcon={<EditIcon />}>Edit</Button>
                    <Button onClick={handlePasswordClickOpen} startIcon={<LockIcon />}>Change Password</Button>
                    {/* <Chip variant="outlined" sx={{marginBottom: '30px', border: '2px solid #ffc400',color:'#ffc400'}} icon={<DiamondIcon sx={{color:'#ffc400'}} color='#ffc400' />} label="Premium" /> */}
                </CardActions>
            </Card>

            {/* //Edit profile dialog */}
            <Dialog open={editOpen} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
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
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </IconButton>
                            </label>
                        </Box>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstName"
                            label="FirstName *"
                            type="text"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        <TextField
                            margin="dense"
                            id="lastName"
                            label="LastName *"
                            type="text"
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email *"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} startIcon={<ArrowBackIcon />}>Back</Button>
                    <Button onClick={handleSave} startIcon={<EditIcon />}>Save</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={passwordOpen} onClose={handleClose}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <TextField
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
                        <TextField
                            margin="dense"
                            id="newPassword"
                            label="New Password *"
                            type="password"
                            fullWidth
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                        <TextField
                            margin="dense"
                            id="confirmPassword"
                            label="Confirm Password *"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{ sx: { borderRadius: '20px' } }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} startIcon={<ArrowBackIcon />}>Back</Button>
                    <Button onClick={handlePasswordSave} startIcon={<EditIcon />}>Save</Button>
                </DialogActions>
            </Dialog>

        </>

    );
}