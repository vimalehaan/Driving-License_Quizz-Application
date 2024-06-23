import React from 'react';
import { Dialog, DialogTitle, TextField, Button } from '@mui/material';

const UpdateBox = ({ state, setOpen, newQuestion, setNewQuestion, handleUpdate }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNewQuestion(event.target.value);
  };

  return (
    <div>
      <Dialog open={state} onClose={handleClose}>
        <DialogTitle>Update Question</DialogTitle>
        <TextField 
          id="standard-textarea"
          maxRows={6}
          placeholder="Type your question here..."
          multiline
          value={newQuestion}
          onChange={handleChange}
          sx={{ marginTop: '40px', marginLeft: '45px', width: '500px', height: "400px" }}
          InputProps={{ sx: { borderRadius: '20px', marginLeft: '-20px', width: '500px' } }}
        />
        <Button onClick={handleUpdate} color="primary">
          Update
        </Button>
      </Dialog>
    </div>
  );
};

export default UpdateBox;
