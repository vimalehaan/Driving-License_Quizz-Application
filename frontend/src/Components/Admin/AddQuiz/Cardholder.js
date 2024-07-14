import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress, Typography, List, ListItem } from '@mui/material';
import axios from 'axios';

const Cardholder = ({ state, setOpen, quizId }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteQuiz = async () => {
    try {
      console.log(`Deleting the quiz with ID: ${quizId}`);
      const response = await axios.delete(`http://localhost:3000/quiz/deleteQuiz/${quizId}`);
      console.log('Delete response:', response.data);
      setRefresh((prev) => !prev);
      setOpen(false);
      // Toggle refresh state to trigger re-fetch
    } catch (error) {
      console.error('Error in deleting the quiz:', error);
      setError('Failed to delete the quiz.');
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log(`Fetching questions for quizId: ${quizId}`);
        const response = await axios.get(`http://localhost:3000/quiz/getquizQuestions/${quizId}`);
        console.log('Response:', response.data);

        const formattedQuestions = response.data.map((question, index) => ({
          id: question._id,
          tableId: index + 1,
          questionText: question.question_text, // Assuming the correct field name is 'question_text'
          difficulty: question.difficulty,
          questionType: question.questionType ? 'Car' : 'Commercial Vehicle',
          answers: question.answers,
        }));

        console.log('Formatted Questions:', formattedQuestions);

        setQuestions(formattedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to load questions.');
        setLoading(false);
      }
    };

    if (quizId) {
      fetchQuestions();
    }
  }, [quizId, refresh]); // Add refresh to dependency array

  return (
    <Dialog open={state} onClose={handleClose}>
      <DialogTitle>Quiz Details</DialogTitle>
      <DialogContent>
        <Typography>Selected Quiz ID: {quizId}</Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <List>
            {questions.map((question, index) => (
              <ListItem key={index}>{question.questionText}</ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteQuiz}>Delete the Quiz</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cardholder;
