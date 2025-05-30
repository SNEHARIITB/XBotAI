
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import ChatInput from '../Components/ChatInput';
import { useState } from 'react';
import ChatWindow from '../Components/ChatWindow';
import BoTimg from "../assets/Botimg.png";

const ChatPage = () => {

    const [input, setInput] = useState("");

    const handleSend = () => {
        console.log("handled sended")
        setInput("");


    };

    return(
        <Box>

            <Box>

                <Typography>
                    How Can I Help You Today?
                </Typography>
                <Box
                    component="img"
                    src={BoTimg}
                    alt="Descriptive text"
                    sx={{
                        width: 200,
                        height: 'auto',
                        borderRadius: 2,
                    }}
                />
                <ChatWindow/>
                <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
            </Box>

        </Box>
    );
}

export default ChatPage;