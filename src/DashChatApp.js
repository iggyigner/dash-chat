import React from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class DashChatApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            username: this.props.username
        }

        this.sendMessageHandler = this.sendMessageHandler.bind(this);
    }

    componentDidMount() {
        //See if any new messages have been added to the chat API server
        // fetch('http://localhost:8080/api/rooms/0/messages')
        //     .then(function (response) { return response.json(); })
        //     .then(function (data) {
        //         const messages = this.state.messages;
        //         const newMessages = data.map(message => message);
        //         messages.push(newMessages);
        //         this.setState({ messages });
        //     });

        axios.get('http://localhost:8080/api/rooms/0/messages')
            .then(res => {
                const messages = res.data.map(message => message);
                this.setState({messages});
            });
    }

    sendMessageHandler(message) {
        axios.post('http://localhost:8080/api/rooms/0/messages', {
            name: this.props.username,
            message: message
        });

        const messageObj = {
            name: this.props.username,
            message: message
        };
        this.addMessage(messageObj);
    }

    addMessage(messageObj) {
        const messages = this.state.messages;
        messages.push(messageObj);
        this.setState({messages});
    }

    render() {
        return (
            <div>
                <h2>{this.state.username}</h2>
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