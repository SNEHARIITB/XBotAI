import { Box, Typography, Button, Rating } from '@mui/material';
import { useState } from 'react';
import ChatInput from '../Components/ChatInput';
import ChatWindow from '../Components/ChatWindow';
import ChatLines from '../Components/Chatlines';
import Sidebar from '../Components/Sideoner';
import BoTimg from "../assets/BoTimg.png";
import styles from "./ChatPage.module.css";

import data from "../../src/sampleData.json"

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [feedbackComment, setFeedbackComment] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const botReply = getBotReply(input);
    const newChat = [...chat, { sender: 'user', text: input }, { sender: 'bot', text: botReply }];
    setChat(newChat);
    setCurrentQuestion(input);
    setCurrentAnswer(botReply);
    setInput("");
  };

  const handleSave = () => {
    setShowFeedbackModal(true);
  };

  const handleSubmitFeedback = () => {
    const chatItem = {
      question: currentQuestion,
      answer: currentAnswer,
      feedback: {
        rating: feedbackRating,
        comment: feedbackComment,
      },
      timestamp: new Date().toISOString(),
    };

    const existingHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const updatedHistory = [...existingHistory, chatItem];
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));

    setChat([]);
    setCurrentQuestion('');
    setCurrentAnswer('');
    setFeedbackComment('');
    setFeedbackRating(0);
    setShowFeedbackModal(false);
  };

  return (
    <Box className={styles.container}>
      <Sidebar />

      <Box className={styles.mainContent}>
        <Box className={styles.chatBox}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            How Can I Help You Today?
          </Typography>

          <Box
            component="img"
            src={BoTimg}
            alt="Bot"
            className={styles.botImage}
          />

          {chat.length ? <ChatLines chat={chat} /> : <ChatWindow />}

          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            handleSave={handleSave}
          />
        </Box>

        {showFeedbackModal && (
          <Box className={styles.feedbackModal}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              💡 Provide Additional Feedback
            </Typography>
            <textarea
              rows={5}
              value={feedbackComment}
              onChange={(e) => setFeedbackComment(e.target.value)}
              placeholder="Write your thoughts here..."
              style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Rate this response:
            </Typography>
            <Rating
              value={feedbackRating}
              onChange={(e, newValue) => setFeedbackRating(newValue)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleSubmitFeedback}
              sx={{ mt: 2, backgroundColor: '#b8aaff' }}
            >
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

// const getBotReply = (question) => {
// //   const responses = {
// //     'hi, what is the weather': 'It’s sunny and 28°C today.',
// //     'hi, what is my location': 'I cannot determine your location.',
// //     'hi, what is the temperature': 'It’s currently 28°C.',
// //     'hi, how are you': 'I’m just code, but thank you for asking!',
// //     'hi': 'Hi to you',
// //   };
//   return data[question.toLowerCase()] || //'Sorry, Did not understand your query!';
// };


function getBotReply(userQuestion) {
  // Normalize user input to lowercase for simple matching
  const normalizedQuestion = userQuestion.toLowerCase();

  // Find the FAQ item whose question includes the user question (case-insensitive)
  const matchedFAQ = data.find(faq =>
    faq.question.toLowerCase().includes(normalizedQuestion) ||
    normalizedQuestion.includes(faq.question.toLowerCase())
  );

  if (matchedFAQ) {
    return matchedFAQ.response;
  } else {
    return "Sorry, Did not understand your query!";
  }
}

export default ChatPage;
