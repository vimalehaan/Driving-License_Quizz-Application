import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

const SimulatorCard = ({ examNumber, title, image, description, hazards, videoLength }) => {
  return (
    <Card sx={{ width: 345, marginBottom: '10px', paddingBottom: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Simulator ${examNumber}`}
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
      </CardActionArea>
    </Card>
  );
};

const SimuH1 = ({ simulators }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80vw', overflowX: 'auto' }}>
      {simulators.map((simulator) => (
        <SimulatorCard key={simulator.examNumber} {...simulator} />
      ))}
    </Box>
  );
};

export default SimuH1;
