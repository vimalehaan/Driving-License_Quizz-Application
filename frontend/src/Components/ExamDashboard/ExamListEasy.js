import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

const createExamCard = (examNumber, title, image, description, rangeStart, rangeEnd) => {
  return (
    <Card key={examNumber} sx={{ width: 345,marginBottom:"10px",paddingBottom:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Practical Test ${examNumber}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#323A6E" align ="left">
            <b>{title}</b>
          </Typography>
          <Typography variant="body2" color="#323A6E" align ="left">
            {description}
          </Typography>
        </CardContent>
        {/* Grid for Additional Contents */}
        <Grid container spacing={2} direction="row">
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align ="left" marginLeft="15px">
              <b>{`${rangeStart} - ${rangeEnd}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align ="left">
              <b>8 Mistakes</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align ="left" marginLeft="15px">
              Questions
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="#323A6E" align ="left">
              Allowed to pass
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

const ExamListE = () => {
  const exams = [
    createExamCard(1, 'Practical Test 1', '/images/im1.jpg', 'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.', 1, 40),
    createExamCard(2, 'Practical Test 2', '/images/im2.jpg', 'Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules.', 41, 80),
    createExamCard(3, 'Practical Test 3', '/images/im3.jpg', 'Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules.', 81, 120),
    createExamCard(4, 'Practical Test 4', '/images/im4.jpg', 'This test challenges you on distracted driving fines, traffic lights, maximum speed limits, cell phone use, blood alcohol levels, and more.', 121, 160),
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto', margin: '10px' }}>
      {exams}
    </Box>
  );
};

export default ExamListE;
