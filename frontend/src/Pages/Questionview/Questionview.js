import React from 'react';

import './Questionview.css';

import Questioncard from '../../Components/QuestionsView/Questioncard';
import Answercard from '../../Components/QuestionsView/Answercard';
import ResponsiveAppBar from '../../Components/QuestionsView/ResponsiveAppBar';
import Submitbutton from '../../Components/QuestionsView/Submitbutton';


function Questionview() {
  return (
<div className='viewquestion'>

<ResponsiveAppBar/>

<Answercard/>


<Questioncard/>


< Submitbutton/>

</div>

  )
}

export default Questionview;
