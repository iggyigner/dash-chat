import React from 'react'
import styled from 'styled-components'
import Message from './Message';

class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        // get the messagelist container and set the scrollTop to the height of the container
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        return (
            <div className='messages' id='messageList' >
                {this.props.messages.map((message, i) => (
                    <Message
                        key={i}
                        username={message.username}
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