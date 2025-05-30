import React from 'react';
import { Box } from '@mui/material';
import ChatMessage from './ChatMessage';

const ChatLines = ({ chat }) => {
  return (
    <Box my={2} maxHeight="60vh" overflow="auto">
      {chat.map((msg, idx) => (
        <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </Box>
  );
};

export default ChatLines;
