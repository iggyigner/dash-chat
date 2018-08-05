import React from 'react'

const MessageRoomHeader = props => (
    <div>
        <h1>{props.activeRoomName}</h1>
        <p>{props.activeRoomUsers}</p>
    </div>
)

export default MessageRoomHeader