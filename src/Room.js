import React from 'react'
import './Room.css'

class Room extends React.Component {
    constructor() {
        super()

        // Bind 'this' to event handlers as React ES6 does not do so originally
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        // Prevent form submit from refreshing the page
        event.preventDefault();

        console.log('event.target.value:' + event.target.innerText);
        this.props.onClick(event.target.id, event.target.innerText);
        // this.setState({ messageInput: '' })
    }

    render() {
        return (
            <div className='room'>
                <a href="#" onClick={this.handleClick} id={this.props.id} >{this.props.name}</a>
            </div>
        )
    }
}

export default Room