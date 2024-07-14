import React, { useContext } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';
import { QuizCardContext } from './AdminQuizBoard';

const QuizCardAdmin = ({ onCardClick }) => {
  const { quiz } = useContext(QuizCardContext);

  return (
    <Box>
      <Card
        sx={{
          width: '300px',
          marginBottom: '10px',
          borderRadius: '20px',
          height: '360px',
          transition: 'transform 0.4s, box-shadow 0.4s, margin-top 0.4s',
          ":hover": {
            marginTop: '-4px',
            transform: 'scale(1)',
            zIndex: 1,
            boxShadow: '2px 4px 10px 0px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <CardActionArea sx={{ height: '100%' }} onClick={onCardClick}>
          <CardMedia
            component="img"
            height="140"
            image="/images/img8.jpg"
            alt="Quiz Image"
            sx={{ height: '160px', marginTop: '-20px' }}
          />
          <CardContent sx={{ padding: '20px 20px 0 20px' }}>
            <Typography textAlign={'left'} fontSize={'22px'} fontWeight={600} component="div">
              {quiz.quizName}
            </Typography>
            <Typography textAlign={'left'} variant="body2" color="text.secondary" sx={{ marginTop: '10px', color: '#7c7c91' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species.
            </Typography>
            <Stack direction={'row'} sx={{ marginTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Stack spacing={-0.5} sx={{ flexGrow: 1 }}>
                <Typography textAlign={'left'} fontSize={'19px'} fontWeight={600}>
                  {quiz.questions.length}
                </Typography>
                <Typography textAlign={'left'} fontSize={'13px'} fontWeight={500} sx={{ color: '#7c7c91' }}>
                  Questions
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default QuizCardAdmin;
