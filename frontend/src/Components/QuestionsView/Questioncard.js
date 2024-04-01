import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import './Questioncard.css';




function Questioncard({ dquestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Add a conditional check to prevent accessing properties of undefined question
  if (!dquestion) {
    return null; // If question is undefined, return null to render nothing
  }

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };


  return (
    <React.Fragment>
      <CssBaseline />
    
    <div className='full-box'>

    <Box className="custom-box-1" >
          
          <div className="questions">

            <h3>...</h3>

          
            <h3 style={{marginTop:"40px"}}>{dquestion. qznumber} {dquestion.qz}</h3>

          
          </div>
            </Box>

       <Box className="custom-box-2">

<div className='answers'>
  
<RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              {Object.values(dquestion.ans).map((answer, index) => (
                <FormControlLabel style={{marginTop:"30px"}}
                  key={index}
                  value={answer}
                  control={<Radio />}
                  
                  label={answer}
                />
              ))}
            </RadioGroup>
</div>

        </Box>     
    </div>

    </React.Fragment>
  );
}

export default Questioncard;
