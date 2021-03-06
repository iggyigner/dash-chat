import React from 'react'
import './MessageInput.css'

class MessageInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messageInput: ''
        }

        // Bind 'this' to event handlers as React ES6 does not do so originally
        this.sendHandler = this.sendHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    textChangeHandler(event) {
        this.setState({ messageInput: event.target.value })
        console.log("state.messageInput: " + this.state.messageInput);
    }

    sendHandler(event) {
        // Prevent form submit from refreshing the page
        event.preventDefault()


        this.props.onSend(this.state.messageInput)
        this.setState({ messageInput: '' })
    }

    render() {
        return (
            <div className='message-input-container'>
                <form className="message-input" onSubmit={this.sendHandler}>
                    <input type="text"
                        className='message-send'
                        onChange={this.textChangeHandler}
                        value={this.state.messageInput}
                        placeholder="Write a message..."
                        required />
                </form>
            </div>
        );
    }
}

export default MessageInput