import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const ExamCard = ({ examNumber, title, image, description, rangeStart, rangeEnd,  }) => {
  return (
    <Card sx={{ width: 345, display: 'flex', flexDirection: 'column', marginBottom: "10px", paddingBottom: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={`Exam ${examNumber}`}
      />
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
          <Typography variant="body2" color="#323A6E" align="left">
            <b>10 Mistakes</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
            Questions
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="#323A6E" align="left">
            Allowed to pass
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

const ExamListH1 = ({ exams }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto' }}>
      {exams.map((exam) => (
        <ExamCard key={exam.examNumber} {...exam} />
      ))}
    </Box>
  );
};

export default ExamListH1;
