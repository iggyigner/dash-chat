import React, { Component } from 'react';
import './App.css';
import DashChatApp from './DashChatApp';


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }

    //Bind 'this' to handlers as ES6 does not do it automatically
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
      <div className='container'>
        <div className='login-wrapper'>
          <div className='login-content'>
            <h1 className='app-name'>We are <span>Dash Chat</span></h1>
            <h5 className='welcome'>Welcome. Let's send each<br/> other Drake memes.</h5>
            <form onSubmit={this.usernameSubmitHandler} className='username-container'>
              <div>
                <input
                  type="text"
                  onChange={this.usernameChangeHandler}
                  placeholder="Enter a username..."
                  className='username-entry'
                  required />
              </div>
              <input type="submit" value="Submit" className='btn-login'/>
              <button>Or Don't</button>
            </form>
            <p id='disclaimer'>By logging in, you agree to nothing.<br/>
              <a href='https://giphy.com/gifs/pizza-drake-hotline-bling-e2AKpOvx2MREY'>Smile </a> 
               & <a href='http://www.iggyigner.com/'> Check out my portfolio.</a>
            </p>
          </div>
        </div>
        <div className='img-wrapper'>
         <div className='login-img' />
        </div>
      </div>
    )
  }
}

export default App;
