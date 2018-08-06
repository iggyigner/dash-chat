import React from 'react'
import './MessageRoomHeader.css'

const MessageRoomHeader = props => (
    <div className='room-info'>
        <h1>{props.activeRoomName}</h1>
        <p>{props.activeRoomUsers}</p>
    </div>
)

export default MessageRoomHeader