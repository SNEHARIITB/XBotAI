import React from 'react';
import { Box, Typography, Paper, Rating, Divider } from '@mui/material';
//import { historyData } from '../data/historyData';

const HistoryPage = () => {



    // data/historyData.js
const historyData = [
  {
    id: 1,
    question: 'Hi, what is the weather',
    answer: 'It’s sunny and 27°C outside!',
    feedback: {
      rating: 4,
      comment: 'Good response but needs real-time updates.'
    }
  },
  {
    id: 2,
    question: 'Hi, how are you',
    answer: 'I am just a bot, but I’m functioning properly!',
    feedback: {
      rating: 5,
      comment: ''
    }
  },
  {
    id: 3,
    question: 'Unknown question',
    answer: 'Sorry, Did not understand your query!',
    feedback: {
      rating: 2,
      comment: 'Expected better handling for this.'
    }
  }
];

  return (
    <Box p={3} sx={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Past Conversations & Feedback
      </Typography>

      {historyData.map((chat) => (
        <Paper key={chat.id} elevation={2} sx={{ mb: 3, p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            You: {chat.question}
          </Typography>

          <Typography variant="body1" mt={1}>
            <span style={{ fontWeight: 600 }}>Soul AI:</span>{' '}
            <p style={{ display: 'inline' }}>{chat.answer}</p>
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Box mt={1}>
            <Typography variant="body2" fontWeight="medium">
              Rating:
            </Typography>
            <Rating value={chat.feedback.rating} readOnly />

            {chat.feedback.comment && (
              <>
                <Typography variant="body2" fontWeight="medium" mt={1}>
                  Feedback:
                </Typography>
                <Typography variant="body2">{chat.feedback.comment}</Typography>
              </>
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HistoryPage;
