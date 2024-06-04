import { useState, useContext, useEffect } from 'react';
import {
  Button,
  TextField,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';

function ChatRoomForm() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);

  // HANDLE TEXTFIELD
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // HANDLE BUTTON
  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      const newMessage = {
        text,
        timestamp: new Date().toISOString(),
      };
      console.log(newMessage);
      setMessage((prevMessage) => [...prevMessage, newMessage]);
    }
    setText('');
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', height: '90vh', display: 'flex', flexDirection: 'column' }}>
        <Box flexGrow={1} overflow='auto' mb={2} >
          <List>
            {message.map((msg, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={msg.text}
                  secondary={`${new Date(msg.timestamp).toLocaleTimeString()}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display='flex' alignItems='center'>
          <TextField
            variant="outlined"
            fullWidth
            label='Add comment'
            type={text}
            onChange={handleChange}
            value={text}
            style={{}}
          />
          <Button
            variant='contained'
            type='submit'
            style={{ marginLeft: '10px', height: '56px' }}
            onClick={handleClick}
          >
            Send
          </Button>
        </Box>
        </Paper>
    </Container>
  );
}

export default ChatRoomForm;