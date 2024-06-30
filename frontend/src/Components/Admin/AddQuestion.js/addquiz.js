import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const addquiz = ( { state, setOpen, selectedRows, handleDeleteConfirm}) =>
{
    const handleClose = () => {
        setOpen(false);
      };
      

    return (
        <div>
    <Dialog open={state} onClose={handleClose}>
      
    <DialogTitle>Questions for the Quiz</DialogTitle>
    
          <DialogContent>
            {selectedRows.length > 0 ? (
              selectedRows.map(row => (
                <ul>
                  <li>
                  <Typography key={row.id}>{row.firstName}</Typography>
                  </li>
                </ul>
              ))
            ) : (
              <Typography></Typography>
            )}

<TextField
              margin="normal"
              required
              fullWidth
              name="Quiz Name"
              label="Quiz Name"
              type="Quiz Name"
              id="Quiz Name"
              autoComplete="Quiz Name"
            />

<TextField
              margin="normal"
              required
              fullWidth
              name="Quiz Type"
              label="Quiz Type"
              type="Quiz Type"
              id="Quiz Type"
              autoComplete="Quiz Type"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Create Quiz
            </Button>

          </DialogContent>





        </Dialog> 
        </div>
      )
}

export default addquiz
