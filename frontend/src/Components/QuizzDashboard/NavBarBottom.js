import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const NavBarBottom = () => {
  return (
    <AppBar position="static" sx={{ marginTop: '30px', height: '43px', backgroundColor: "white", boxShadow: "none" }}>
      <Toolbar sx={{ backgroundColor: "#F0F2F7", justifyContent: 'space-around', lineHeight: '10px', marginX: 'auto', borderRadius: '99px', marginBottom: '200px', width: '500px' }}>
        <div className="exam-links">
          <Button  variant="text" color="inherit" sx={{ marginRight: 2, color: 'rgba(50, 58, 110, 0.5)', '&:hover': { backgroundColor: '#6070D4', color: 'white' } }}>
            Car Test
          </Button>

          <Button  variant="text" color="inherit" sx={{ marginRight: 2, color: 'rgba(50, 58, 110, 0.5)', '&:hover': { backgroundColor: '#6070D4', color: 'white' } }}>
            Commercial Test
          </Button>

          <Button variant="text" color="inherit" sx={{ marginRight: 2, color: 'rgba(50, 58, 110, 0.5)', '&:hover': { backgroundColor: '#6070D4', color: 'white' } }}>
            Motorcycle Test
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarBottom;
