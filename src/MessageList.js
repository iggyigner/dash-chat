import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Message from './Message';
import './MessageList.css';

class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        //Scroll screen to bottom on each new message
        this.scrollToBottom();
    }

    scrollToBottom() {
        ReactDOM.findDOMNode(this.refs.messageList).scrollTop = ReactDOM.findDOMNode(this.refs.messageList).scrollHeight;
        console.log("scrolled");
    }

    render() {
        return (
            <div className='messages' id='messageList' ref='messageList' >
                {this.props.messages.map((message, i) => (
                    <Message
                        key={i}
                        username={message.name}
                        message={message.message}
                        fromMe={message.fromMe}
                    />
                ))}
            </div>
        )
    }
}

// const MessageList = props => (
//     <ul>
//         {props.messages.map((message, i) => (
//             <Message
//                 key={i}
//                 username={message.senderId}
//                 message={message.text}
//                 fromMe={message.fromMe}
//             />
//         ))}
//     </ul>
// )

export default MessageList