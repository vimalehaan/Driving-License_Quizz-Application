import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const SimulatorCard = ({ examNumber, title, image, description, hazards, videoLength }) => {
  const [open, setOpen] = useState(false);

  const handlePremiumClick = () => {
    setOpen(false);
    // Add your logic for navigating to the premium page here
  };

  return (
    <Card sx={{ width: 345, marginBottom: '10px', paddingBottom: '10px' }}>
      <CardActionArea onClick={() => setOpen(true)}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Simulator ${examNumber}`}
        />
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Lock Icon in the top-right corner */}
          <Box sx={{ position: 'absolute', top: 0, right: 0, padding: '8px' }}>
            <LockIcon />
          </Box>
        </Box>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#323A6E" align="left">
          <b>{title}</b>
        </Typography>
        <Typography variant="body2" color="#323A6E" align="left">
          {description}
        </Typography>
      </CardContent>
      {/* Grid for Additional Contents */}
      <Grid container spacing={2} direction="row">
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
            <b>{hazards}</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left">
            <b>{videoLength}</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
            Hazards
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left">
            Video Length
          </Typography>
        </Grid>
      </Grid>

      {/* Dialog for premium message */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{"Wanna try premium?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upgrade to premium to unlock additional features and benefits!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePremiumClick} style={{ backgroundColor: '#6070D4', color: '#fff' }}>
            Go to Premium
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

const SimuH2 = ({ simulators }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePremiumClick = () => {
    // Implement the action when "Go to Premium" is clicked
    // For now, let's just close the dialog
    handleClose();
  };

  const createSimulatorCard = (simulator) => {
    return (
      <SimulatorCard
        key={simulator.examNumber}
        examNumber={simulator.examNumber}
        title={simulator.title}
        image={simulator.image}
        description={simulator.description}
        hazards={simulator.hazards}
        videoLength={simulator.videoLength}
      />
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto' }}>
      {/* Render simulator cards dynamically */}
      {simulators.map(simulator => createSimulatorCard(simulator))}

      {/* Dialog for Premium Message */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Wanna try premium?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Unlock more features and content with our premium subscription.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePremiumClick} style={{ backgroundColor: '#6070D4', color: '#fff' }}>
            Go to Premium
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SimuH2;
