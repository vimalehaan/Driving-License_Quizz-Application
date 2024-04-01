import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

function Submitbutton() {
  const classes = useStyles();

  return (
    <div>
     
  
      <Button style={{marginLeft:"1100px", marginTop:"10px"}}
        variant="contained"
        color="default"
        className={classes.button}
      
      >
        Submit
      </Button>
      
    </div>
  );
}

export default Submitbutton;