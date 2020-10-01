import React from 'react'
import './Sidebar.css'
import SidebarChat from './Sidebarchat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton} from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">
            {/*header */}
            <div className="sidebar__header">
                {/*header left*/}
                <Avatar src={require("./avatar.jpg")}/>
                {/*header right*/}
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                     
                </div>
                
            </div>
            {/*Search container */}
            <div className="sidebar__search">
                <div className="search__container">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search contacts"/>
                </div>
                
            </div>
            {/* sidebar Chat  */}
                <div className="sidebar__chat">
                    <SidebarChat addNewChat/>
                    <SidebarChat />
                    <SidebarChat />
                </div>



        </div>
    )
}

export default Sidebar
