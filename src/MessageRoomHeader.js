import React from 'react'
import './MessageRoomHeader.css'

const MessageRoomHeader = props => (
    <div className='room-info'>
        <h1>{props.activeRoomName}</h1>
        <p>Online: {props.activeRoomUsers.map((user) => (user + " "))}</p>
        <div className='hr'></div>
    </div>
)

export default MessageRoomHeader

