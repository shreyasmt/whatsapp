import React,{useEffect, useState} from 'react';
import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from './axios'
function App() {

  // using state to access data

  const[messages, setMessages] = useState([])


  // getting the data
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data)
      setMessages(response.data)
    })
  },[])

  // initialising the pusher
  useEffect(()=>{
    var pusher = new Pusher('d3e0c0072195dda93b55', {
      cluster: 'ap4'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // keep all the current messages and also add the new message
      setMessages([...messages,data])
    });

    // to clean up the channel
     return() =>{
       channel.unbind_all();
       channel.unsubscribe();
     };
    
  },[messages]);
console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar/>

      {/* chat component*/}
        <Chat messages={messages}/>

      </div>
      
    </div>
  );
}
export default App;
