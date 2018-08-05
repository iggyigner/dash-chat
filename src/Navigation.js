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

   componentDidUpdate(prevState) {
       console.log("prevState.activeRoom" + prevState.activeRoom);
       console.log("this.state.activeRoom" + this.state.activeRoom);

       if( prevState.activeRoom !== this.state.activeRoom ) {
           this.props.onChange(this.state.activeRoom);
           console.log('exiting navigation update');
       }
   }ç

   changeRoomHandler(id){
    axios.get('http://localhost:8080/api/rooms/' + id)
        .then(res => {
            const users = res.data.users;
            const roomId = res.data.id
            console.log('id:' + id);
            console.log(res);
            console.log(res.data.users);
            this.changeActiveRoom(roomId);
        });
    }

    changeActiveRoom(roomId) {
        console.log("entered changeActiveRoom");
        this.setState({ activeRoom: roomId });
    }

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
                    />
                ))}
            </NavContainer>
        )
    }
}

export default Navigation