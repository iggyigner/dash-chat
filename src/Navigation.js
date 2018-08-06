import React from 'react'
import axios from 'axios'
import Room from './Room';
import UserSessionTimer from './UserSessionTimer';
import './Navigation.css'

class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            rooms: [],
            activeRoomId: 0
        }

        // Bind 'this' to event handler as React ES6 does not do so originally
        this.changeRoomHandler = this.changeRoomHandler.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/rooms')
            .then(res => {
                const rooms = res.data.map(room => room);
                this.setState({ rooms });
            });
    }

    changeRoomHandler(id, name) {
        this.props.onChange(id, name);
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='profile-info'>
                    <div className='profile-pic'></div>
                    <h5 className='username'>{this.props.name}</h5>
                    <UserSessionTimer />
                </div>

                <div className='room-info-nav'>
                    <h1 className='chatrooms-title'>Chatrooms</h1>
                    <div className='rooms-container'>
                        {this.state.rooms.map((room, i) => (
                            <Room
                                key={i}
                                id={room.id}
                                name={room.name}
                                onClick={this.changeRoomHandler}
                                activeRoomId={this.props.activeRoomId}
                            />
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}

export default Navigation