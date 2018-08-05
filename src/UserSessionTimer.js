import React from 'react'
import ReactDOM from 'react-dom'

class UserSessionTimer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    componentWillMount() {
      this.startTimer();
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div>
            
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <UserSessionTimer />,
    document.getElementById('root')
  )

  export default UserSessionTimer