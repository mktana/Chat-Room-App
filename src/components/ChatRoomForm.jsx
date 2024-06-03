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

  // const newMessage = {
  //   text,
  //   timestamp: new Date().toISOString(),
  // };

  // HANDLE TEXTFIELD
  const handleChange = (e) => {
    // if (text === '') {
    //   setMessage(null);
    // }
    setText(e.target.value);
    // console.log(text);
  };

  // HANDLE BUTTON
  const handleClick = (e) => {
    e.preventDefault();
    if(text) {
      const newMessage = {
        text,
        timestamp: new Date().toISOString(),
      };
      console.log(newMessage);
      setMessage((prevMessage) => [...prevMessage, newMessage])
    }
    setText('');
  }

  
  //Log text to console
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (text) {
  //     const newMessage = {
  //       text,
  //     };
  //     console.log(newMessage);
  //   }
  //   setText('');
  // };

  // Adding new message
  // const handleAddMessage = () => {
  //   if (message === '') {
  //     const newMessage = {
  //       text,
  //       time: new Date().toISOString(),
  //     };
  //     console.log(message);
  //     console.log(newMessage);
  //     setMessage(...message, newMessage);
  //   }
  //   console.log();
  // };

  return (
    <Container maxWidth='mx-auto'>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <List style={{ maxHeight: '300px', overflow: 'auto' }}>
          <ListItem>
            <ListItemText />
          </ListItem>
        </List>
        <Box display={'flex'} alignItems={'center'} mt={2}>
          <TextField
            fullWidth
            label='Add comment'
            variant='standard'
            type={text}
            onChange={handleChange}
            value={text}
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
