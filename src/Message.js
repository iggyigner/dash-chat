import React from 'react'
import './Message.css';

class Message extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.fromMe ? 'message-group from-me' : 'message-group'}>
                <div>
                    <div className='username'>
                        <h4>{this.props.username}</h4>
                    </div>
                    <div className='message-body'>
                        <p>{this.props.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message