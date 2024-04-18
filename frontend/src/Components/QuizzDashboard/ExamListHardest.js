import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const ExamCard = ({ examNumber, title, image, description, rangeStart,rangeEnd,  handleClick }) => {
  return (
    <Card sx={{ width: 345, display: 'flex', flexDirection: 'column', marginBottom: '10px', paddingBottom: '10px' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Exam ${examNumber}`}
        />
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Lock Icon in the top-right corner */}
          <Box sx={{ position: 'absolute', top: 0, right: 0, padding: '8px' }}>
            <LockIcon />
          </Box>
        </Box>
      </CardActionArea>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#323A6E" align="left">
            <b>{title}</b>
          </Typography>
          <Typography variant="body2" color="#323A6E" align="left">
            {description}
          </Typography>
        </CardContent>
        {/* Grid for Additional Contents */}
        <Grid container spacing={2} direction="row" sx={{ mt: 'auto' }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
            <b>{`${rangeStart} - ${rangeEnd}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
              <b> 8 Mistakes</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
              Questions
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
              Allowed to Pass
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

const ExamListH2 = ({ exams }) => {
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

  const createExamCard = (exam) => {
    return (
      <ExamCard
        key={exam.examNumber}
        examNumber={exam.examNumber}
        title={exam.title}
        image={exam.image}
        description={exam.description}
        rangeStart={exam.rangeStart}
        rangeEnd={exam.rangeEnd}
        handleClick={handleClickOpen}
      />
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto' }}>
      {/* Render exam cards dynamically */}
      {exams.map(exam => createExamCard(exam))}

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

export default ExamListH2;
