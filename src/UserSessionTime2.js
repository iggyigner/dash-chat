import React from 'react'
import ReactDOM from 'react-dom'

class UserSessionTime extends React.Component {
    constructor(props) {
        super(props);

        this.timer = React.createRef();

        var input = {
            year: 0,
            month: 0,
            day: 0,
            hours: 2,
            minutes: 10,
            seconds: 30
        }

        var timestamp = new Date(input.year, input.month, input.day,
            input.hours, input.minutes, input.seconds);

        this.state = {
            timestamp: timestamp,
            interval: 1
        }

        this.updateSessionTime = this.updateSessionTime.bind(this);
    }

    // componentDidMount() {
    //     this.updateSessionTime(timeStamp, interval);    
    // }

    componentDidUpdate() {
        this.updateSessionTime(this.state.timestamp, this.state.interval);
        // this.setState({ timestamp: newTimestamp });
    }

    updateSessionTime(timeStamp, interval) {
        const timerNode = this.refs.timer;
        console.log(timerNode);
        setInterval(function (timeStamp, interval) {
            var timestamp = new Date(timeStamp.getTime() + interval * 1000);
            console.log(timestamp);
            // document.getElementsByClassName('timer').innerHTML = timestamp.getDay() + 'd:' + timestamp.getHours() + 'h:' + timestamp.getMinutes() + 'm:' + timestamp.getSeconds() + 's';
            ReactDOM.findDOMNode(timerNode).innerHTML = timestamp.getDay() + 'd:' + timestamp.getHours() + 'h:' + timestamp.getMinutes() + 'm:' + timestamp.getSeconds() + 's';
            return timestamp;
        }, Math.abs(this.state.interval) * 1000);
    }

    render() {
        return (
            <h4 className='timer' ref='timer'>3:05 minutes</h4>
        )
    }
}

export default UserSessionTime