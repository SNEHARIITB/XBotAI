import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlined from '@mui/icons-material/ThumbDownAltOutlined';

const ChatMessage = ({ sender, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      p={2}
      m={1}
      bgcolor={sender === 'bot' ? '#f3e5f5' : '#e1f5fe'}
      borderRadius={2}
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {sender === 'bot' && hovered && (
        <Box position="absolute" top={4} right={8} display="flex" gap={1}>
          <IconButton><ThumbUpAltOutlined fontSize="small" /></IconButton>
          <IconButton><ThumbDownAltOutlined fontSize="small" /></IconButton>
        </Box>
      )}
      <Typography variant="body2" fontWeight="bold">
        <span>{sender === 'bot' ? 'Soul AI' : 'You'}</span>
      </Typography>
      <Typography component="p">{text}</Typography>
    </Box>
  );
};

export default ChatMessage;
