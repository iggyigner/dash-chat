import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import DashChatApp from './DashChatApp';


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this)
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this)
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value })
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username })
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <div className="App">
          <DashChatApp username={this.state.username} />
        </div>
      )
    }

    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default App;
