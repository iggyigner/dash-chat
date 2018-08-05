import ReactDOM from 'react-dom'

var input = {
    year: 0,
    month: 0,
    day: 0,
    hours: 2,
    minutes: 10,
    seconds: 30
};

var timestamp = new Date(input.year, input.month, input.day,
input.hours, input.minutes, input.seconds);

var interval = 1;

setInterval(function () {
    timestamp = new Date(timestamp.getTime() + interval * 1000);
    console.log(timestamp);
    const timerNode = this.refs.timer;
    console.log(timerNode);
    ReactDOM.findDOMNode(timerNode).innerHTML = timestamp.getDay() + 'd:' + timestamp.getHours() + 'h:' + timestamp.getMinutes() + 'm:' + timestamp.getSeconds() + 's';
}, Math.abs(interval) * 1000);