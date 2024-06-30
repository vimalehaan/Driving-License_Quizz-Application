import * as React from 'react';
import { useContext, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Slide } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

import { CusButtonPurp } from '../Utils/StyledComponents';
import { QuestionContext, AnswerContext, Test_ButtonContext, Difficulty_ButtonContext } from './Switch_Component';
import { rerenderContext } from '../../Pages/AdminPage/AddTest';
import axios from 'axios';


const CusDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ state, setOpen }) {

  const { questionText } = useContext(QuestionContext);
  const { answers } = useContext(AnswerContext);
  const { selectedButton_Tests } = useContext(Test_ButtonContext);
  const { selectedButtons_Difficulty } = useContext(Difficulty_ButtonContext);
  const handleRefresh= useContext(rerenderContext)

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [snackBarState, setSnackBarState] = useState({ open: false, message: '', alert: 'success' });

  console.log("selectedButton_Tests, ", selectedButton_Tests)

  const handleClose = () => {
    setOpen(false)
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setSnackBarState({
        ...snackBarState,
        open: false,
    });
};


  const handleSaveChanges = async () => {
    try {
      const formattedAnswers = answers.map(answer => ({
        answer_text: answer.text, // Change 'text' to 'answer_text'
        isCorrect: answer.isCorrect, // Change 'isCorrect' to 'isCorrect'
      }));

      const data = {
        question_text: questionText,
        answers: formattedAnswers,
        questionType: selectedButton_Tests === 'Car' ? true : false,
        difficulty: selectedButtons_Difficulty
      };

      console.log(data);

      const res = await axios.post(
        'http://localhost:3000/questions/createQuestion',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('test1');
      console.log(res);

      if (res.status !== 201) {
        console.error('Error in saving');
        return;
      }

      console.log('test2');
      
      setIsSubmitted(true);
      handleClose()
      setSnackBarState({open: true, message: "Question added Successfully", alert: 'success'})
      handleRefresh();

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <React.Fragment>
      <CusDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={state}
        maxWidth={false}
        PaperProps={{ sx: { backgroundColor: '#F0F2F7', borderRadius: '20px', width: '750px' } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure to add this Question?
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack direction={'column'} >

            <Typography fontWeight={'bold'}>Tests:</Typography>

            <Typography variant='h5' fontWeight={'bold'} sx={{ margin: "10px 30px 20px 30px" }}>{selectedButton_Tests}</Typography>

            <Typography fontWeight={'bold'} > Difficulty: </Typography>

            <Typography variant='h5' fontWeight={'bold'} sx={{ margin: "10px 30px 20px 30px" }} >  {selectedButtons_Difficulty} </Typography>

            <Typography fontWeight={'bold'}>Question:</Typography>

            <Typography variant='h5' fontWeight={'bold'} sx={{ margin: "10px 30px 20px 30px" }}>{questionText}</Typography>

            <Typography fontWeight={'bold'}>Answers:</Typography>

            {answers.map((answer, index) => (
              <Typography
                sx={{
                  margin: "10px 30px 15px 90px", display: 'flex', alignItems: 'center',
                  textDecoration: answer.isCorrect ? 'none' : 'line-through',
                  textDecorationColor: 'red',
                }}
                key={index} >
                {answer.isCorrect ? <CheckCircleIcon sx={{ color: 'green', marginRight: '10px' }} /> : <UnpublishedIcon sx={{ color: 'red', marginRight: '10px' }} />}
                {answer.text}
              </Typography>
            ))}

          </Stack>

        </DialogContent>
        <DialogActions>
          <CusButtonPurp onClick={handleSaveChanges} sx={{ width: '150px', fontWeight: '40px', }}>
            <Typography fontSize={16} sx={{ margin: '-2px 5px 0px 0px' }}>Save changes</Typography>
            <CheckCircleOutlinedIcon sx={{ marginRight: '-8px', fontSize: '17px' }} />
          </CusButtonPurp>
        </DialogActions>
      </CusDialog>
      <Snackbar
        open={snackBarState.open}
        onClose={handleSnackBarClose}
        TransitionComponent={Slide}
        autoHideDuration={4000}
        sx={{}}

      >
        <Alert severity={snackBarState.alert} sx={{}}>
          {snackBarState.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
