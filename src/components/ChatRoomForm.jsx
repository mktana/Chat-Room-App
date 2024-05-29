import { useState, useContext, useEffect } from 'react';
import { Button, TextField, Container } from '@mui/material';

function ChatRoomForm() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');


  return (
    <Container maxWidth="sm">

      <div>ChatRoomForm</div>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant='contained'>Send</Button>
      </Container>
  );
}

export default ChatRoomForm;
