// NavBarTop.js (Top Navigation Bar)
import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const NavBarTop = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: '58px' }}>
      <Toolbar sx={{ backgroundColor: "#F0F2F7", borderRadius: '20px', padding: '1px', border: '2px solid white', marginBottom: '20px', borderWidth: '80%' }}>
        <Typography variant="h6" component="div" className="brand" sx={{ marginRight: 'auto' }}>
          <span style={{ color: '#09BCE0', fontWeight: 'bold' }}>C</span>
          <span style={{ color: '#323A6E', fontWeight: 'bold' }}>oBit</span>
        </Typography>
        <div className="links">
          <Link href="/login" color="inherit" underline="none" sx={{ marginRight: 2, color: '#323A6E' }}>
            <b>Login</b>
          </Link>
          <Link href="/premium-login" color="inherit" underline="none" sx={{ marginRight: 2, color: '#323A6E' }}>
            <b>Premium Login</b>
          </Link>
          <Link href="/help" color="inherit" underline="none" sx={{ marginRight: 2, color: '#323A6E' }}>
            <b> Help</b>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
