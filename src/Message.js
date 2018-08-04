import React from 'react'
import styled from 'styled-components'

class Message extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.fromMe ? 'message from-me' : 'message'} >
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default Message