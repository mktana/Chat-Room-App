//import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import * as Ably from 'ably';
//import { AblyProvider } from 'ably/react';
import ChatRoomForm from './components/ChatRoomForm';
import Header from './components/Header';
//import AblyPubSub from './components/AblyPubSub'

//const client = new Ably.Realtime.Promise(process.env.ABLY_API );

function App() {

  return (
    <Router>
    <Header />
      {/* <AblyProvider client={client}>
      <AblyPubSub />
    </AblyProvider> */}
      <ChatRoomForm />
    
    </Router>
  );
}

export default App;
