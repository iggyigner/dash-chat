import React from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Navigation from './Navigation';

class DashChatApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            username: this.props.username
        }

        this.updateMessagesHandler = this.updateMessagesHandler.bind(this);
        this.sendMessageHandler = this.sendMessageHandler.bind(this);
    }

    componentDidMount() {
         axios.get('http://localhost:8080/api/rooms/0/messages')
            .then(res => {
                const messages = res.data.map(message => message);
                this.setState({messages});
            });
    }

    updateMessagesHandler(roomId) {
        axios.get('http://localhost:8080/api/rooms/' + roomId + '/messages')
            .then(res => {
                const messages = res.data.map(message => message);
                this.updateRoomMessages(messages);
            });
        // console.log("roomID: " + roomId);
    }

    updateRoomMessages(messages) {
        this.setState({messages});
    }

    sendMessageHandler(message) {
        axios.post('http://localhost:8080/api/rooms/0/messages', {
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
        this.setState({messages});
    }

    render() {
        return (
            <div>
                <Navigation name={this.state.username} onChange={this.updateMessagesHandler} />
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