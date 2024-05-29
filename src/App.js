import { useEffect } from 'react';
//import * as Ably from 'ably';
// import { AblyProvider, useChannel, useConnectionStateListener } from 'ably/react';
import ChatRoomForm from './components/ChatRoomForm';
// import AblyPubSub from './components/AblyPubSub'

// const client = new Ably.Realtime.Promise(process.env.ABLY_API );

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcom To Chat Room</h1>
      </header>
      <ChatRoomForm />
      {/* <AblyProvider client={client}>
      <AblyPubSub />
    </AblyProvider> */}
    </div>
  );
}

export default App;
