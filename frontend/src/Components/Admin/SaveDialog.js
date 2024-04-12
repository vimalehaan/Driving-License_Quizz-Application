import * as React from 'react';
import { useContext } from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";


import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

import { CusButtonPurp } from '../Utils/StyledComponents';
import { QuestionContext, AnswerContext } from './Switch_Component';


const CusDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function CustomizedDialogs({ state, setOpen }) {

  const { questionText, setQuestionText } = useContext(QuestionContext);
  const { answers, setanswer } = useContext(AnswerContext);

  const handleClose = () => {
    setOpen(false);
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
            <Typography fontWeight={'bold'}>Question:</Typography>
            <Typography variant='h5' fontWeight={'bold'} sx={{ margin: "10px 30px 20px 30px" }}>{questionText}</Typography>

            <Typography fontWeight={'bold'}>Answers:</Typography>

            {answers.map((answer, index) => (
              <Typography 
              sx={{
                margin: "10px 30px 15px 90px", display: 'flex', alignItems: 'center',
                textDecoration: answer.isCorrect ? 'none' : 'line-through',
                textDecorationColor:  'red',
              }}
                key={index} >
                {answer.isCorrect ? <CheckCircleIcon sx={{ color: 'green', marginRight: '10px' }} /> : <UnpublishedIcon sx={{ color: 'red', marginRight: '10px' }} />}
                {answer.text}
              </Typography>
            ))}

          </Stack>

        </DialogContent>
        <DialogActions>
          <CusButtonPurp onClick={handleClose} sx={{ width: '150px', fontWeight: '40px', }}>
            <Typography fontSize={16} sx={{ margin: '-2px 5px 0px 0px' }}>Save changes</Typography>
            <CheckCircleOutlinedIcon sx={{ marginRight: '-8px', fontSize: '17px' }} />
          </CusButtonPurp>
        </DialogActions>
      </CusDialog>
    </React.Fragment>
  );
}