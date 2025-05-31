import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Rating, Divider } from '@mui/material';
import Sidebar from '../Components/Sideoner';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setHistoryData(storedChats.reverse()); 
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
    <Sidebar/>

        <Box p={3} sx={{ overflowY: 'auto', maxHeight: '100vh' }}>
      {/* <Typography variant="h5" gutterBottom fontWeight="bold">
        Past Conversations & Feedback
      </Typography> */}
      <div>Past Conversations</div>

      {historyData.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No history available yet. Chat and leave feedback to see it here.
        </Typography>
      ) : (
        historyData.map((chat, index) => (
          <Paper key={index} elevation={2} sx={{ mb: 3, p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              You: {chat.question}
            </Typography>

            <Typography variant="body1" mt={1}>
              <span style={{ fontWeight: 600 }}>Soul AI:</span>{' '}
              <span>{chat.answer}</span>
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
        ))
      )}
    </Box>

    </Box>

  );
};

export default HistoryPage;
