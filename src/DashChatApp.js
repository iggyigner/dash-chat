import React from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Navigation from './Navigation';
import MessageRoomHeader from './MessageRoomHeader';
import './DashChatApp.css'

class DashChatApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            username: this.props.username,
            activeRoomId: 0,
            activeRoom: '',
            activeRoomUsers: []
        }

        this.updateRoomHandler = this.updateRoomHandler.bind(this);
        this.sendMessageHandler = this.sendMessageHandler.bind(this);
    }

    // Fetch initial messages and room info from server
    componentDidMount() {
        axios.get('http://localhost:8080/api/rooms/' + this.state.activeRoomId)
            .then(res => {
                const roomInfo = {
                    roomId: res.data.id,
                    room: res.data.name,
                    roomUsers: res.data.users
                }
                this.setState({
                    activeRoomId: roomInfo.roomId,
                    activeRoom: roomInfo.room,
                    activeRoomUsers: roomInfo.roomUsers
                });
                return roomInfo;
            })
            .then(res => {
                axios.get('http://localhost:8080/api/rooms/' + res.roomId + '/messages')
                    .then(res => {
                        console.log(res);
                        const messages = res.data.map(message => message);
                        this.setState({ messages: messages });
                    })
            });

    }

    // Fetch messages on room change and update active room
    updateRoomHandler(roomId, roomName) {
        axios.get('http://localhost:8080/api/rooms/' + roomId + '/messages')
            .then(res => {
                const messages = res.data.map(message => message);
                this.updateRoom(messages, roomId, roomName);
            });
        // console.log("roomID: " + roomId);
    }

    updateRoom(messages, roomId, roomName) {
        axios.get('http://localhost:8080/api/rooms/' + roomId)
            .then(res => {
                this.setState({
                    messages: messages,
                    activeRoomId: roomId,
                    activeRoom: roomName,
                    activeRoomUsers: res.data.users
                });
            })

    }

    // Add user submitted messages to both the server (for persistance) and update UI
    sendMessageHandler(message) {
        axios.post('http://localhost:8080/api/rooms/' + this.state.activeRoomId + '/messages', {
            name: this.props.username,
            message: message
        });

        const messageObj = {
            name: this.props.username,
            message: message,
            fromMe: true
        };
        this.addMessage(messageObj);
    }

    addMessage(messageObj) {
        console.log(messageObj);
        const messages = this.state.messages;
        messages.push(messageObj);
        this.setState({ messages });
    }

    render() {
        return (
            <div className='chatapp'>
                <Navigation
                    name={this.state.username}
                    onChange={this.updateRoomHandler}
                    activeRoomId={this.state.activeRoomId} />
                <MessageRoomHeader
                    activeRoomName={this.state.activeRoom}
                    activeRoomUsers={this.state.activeRoomUsers}
                />
                <MessageList messages={this.state.messages} />
                <MessageInput onSend={this.sendMessageHandler} />
            </div>
        )
    }

}

export default DashChatApp



// import React from 'react'
// import styled from 'styled-components'
// import MessageList from './MessageList';

// const DashChatApp = props => (
//     <div className="Card">
//         <img src={props.image} />
//         <MessageList messages={props.messages} />
//         <p>{props.text}</p>
//     </div>
// )

// export default DashChatApp 