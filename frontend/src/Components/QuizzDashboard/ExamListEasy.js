import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

const ExamCard = ({ examNumber, title, image, description, rangeStart, rangeEnd }) => {
  return (
    <Card sx={{ width: 345, marginBottom: "10px", paddingBottom: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Practical Test ${examNumber}`}
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
        <Grid container spacing={2} direction="row">
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left" marginLeft="15px">
              <b>{`${rangeStart} - ${rangeEnd}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align="left">
              <b>8 Mistakes</b>
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
      </CardActionArea>
    </Card>
  );
};

const ExamListE = ({ exams }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto', margin: '10px' }}>
      {exams.map((exam) => (
        <ExamCard key={exam.examNumber} {...exam} />
      ))}
    </Box>
  );
};

export default ExamListE;
