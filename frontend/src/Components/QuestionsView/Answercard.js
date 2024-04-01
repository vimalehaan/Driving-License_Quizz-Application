import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Questioncard from './Questioncard'; // Import the Questioncard component
import './Answercard.css';

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import { colors } from '@mui/material';


const questions = [];

function Answercard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

 
  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
  };

const handleNextQuestion = () =>
{

  if( currentQuestionIndex < questions.length - 1)
  {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
}



const handlePrevQuestion = () =>
{
  if(currentQuestionIndex > 0)
  {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
}

  return (
    <React.Fragment>

      <CssBaseline />
      <Box sx={{ borderRadius: '13px', bgcolor: '#F0F2F7', height: '70vh', width: '90vh', marginLeft: '850px' , marginTop:'40px'}}>
        {/* Buttons for changing questions */}
        
        <div className='qbutton-container'>
          {questions.map((_, index) => (
            <button key={index} onClick={() => handleQuestionChange(index)} >{index + 1}
            </button>
          ))}
        </div>
        
        <Questioncard dquestion={questions[currentQuestionIndex]} qznumber={currentQuestionIndex} /> {/* Pass the current question as a prop */}

      </Box>

<div className='nextButton'>

<Stack direction="row" spacing={2} marginLeft={60} marginTop={1}>

    
      <Button variant="contained" onClick={handlePrevQuestion} >
       Prev
      </Button>

    

 <Button variant="outlined" onClick={handleNextQuestion} >
  Next
</Button>

    </Stack>
</div>

    </React.Fragment>
  );
}

export default Answercard;
