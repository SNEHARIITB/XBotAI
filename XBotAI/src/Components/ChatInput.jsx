import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const ChatInput = ({ input, setInput, handleSend, handleSave }) => {
  const onSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    handleSend();
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" mt={2} gap={2}>
        <TextField
          fullWidth
          placeholder="Message Bot AI..."
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" size="large">
          Ask
        </Button>
        <Button variant="outlined" color="secondary" type="button" size="large" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </form>
  );
};

export default ChatInput;
