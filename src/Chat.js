import React,{useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneIcon from '@material-ui/icons/MicNone';
import axios from './axios'
const Chat = ({messages}) => {
    const [input, setInput] = useState("")
    const sendMessage = async (e)=>{
        //stops refresh
        e.preventDefault();

        await axios.post('/messages/new',{
            "message": input,
            "name": "Shreya",
            "timestamp": "inline",
            "received": true
        })
        setInput('');


    }

    return (
        <div className="chatbox">
            {/*Header*/}
             <div className="chat__header">
                 <Avatar />
                 <div className="chat__headerInfo">
                     <h3>Room Name</h3>
                     <p>Last seen</p>
                 </div>
                 <div className="chat__headerRight">
                     <IconButton>
                         <SearchOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <AttachFileIcon />
                     </IconButton>
                     <IconButton>
                         <MoreVertIcon />
                     </IconButton>
                 </div>
             </div>


              {/*Chat body*/}
              <div className="chat__body">
                  {messages.map((message)=>(
                          <p className={`chat__message ${message.received && "chat__receiver"}`}>
                          <span className="chat__name">{message.name}</span>
                          {message.message}
                          <span className="chat__timestamp">
                              {message.timestamp}
      
                          </span>
                        </p>

                  ))}
              
            
              </div>
               {/*Chat footer*/} 
               <div className="chat__footer">
                    <InsertEmoticonOutlinedIcon/>
                    <form>
                        <input 
                        value={input}
                        onChange={e=> setInput(e.target.value)}
                        placeholder="type a message"
                        type="text" />
                        <button onClick={sendMessage} type="submit">Send</button>
                    </form>
                    <MicNoneIcon/>
               </div>

        </div>
    )
}

export default Chat
