import React, {useEffect, useState} from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
const Sidebarchat = ({addNewChat}) => {

    // to set ramdom avatars
    const [seed, setSeed] = useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat =()=>{
        const roomName = prompt("Enter the Group Name");
        if(roomName){
            //do some database stuff
        }
    };

    // if not new chat
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default Sidebarchat
