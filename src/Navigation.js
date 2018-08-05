import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Room from './Room';

const NavContainer = styled.div`
    width: 200px;
    float: left;
    height: 1000px;
    background-color: red;

`

const UserInfo = styled.h2`
    width: 100%;
    height: 100px;
    background-color: rgba(255,255,255,.4);
`


class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            rooms: [],
            activeRoom: 0
        }

        this.changeRoomHandler = this.changeRoomHandler.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/rooms')
           .then(res => {
               const rooms = res.data.map(room => room);
               this.setState({rooms});
           });
   }

   changeRoomHandler(id){
        this.props.onChange(id);
    }

    // changeActiveRoom(roomId) {
    //     console.log("entered changeActiveRoom");
    //     this.setState({ activeRoom: roomId });
    // }

    render() {
        return (
            <NavContainer>
                <UserInfo>{this.props.name}</UserInfo>
                {this.state.rooms.map((room, i) => (
                    <Room
                        key={i}
                        id={room.id}
                        name={room.name}
                        onClick={this.changeRoomHandler}
                        activeRoom={this.props.activeRoom}
                    />
                ))}
            </NavContainer>
        )
    }
}

export default Navigation