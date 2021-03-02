import React from 'react'


export default class Clock extends React.Component {
    constructor(props){
        super(props);
        let currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        }
    }

    componentDidMount() {
        setInterval(this._tick.bind(this), 1000)
    }

    _tick(){
        this._incrementSeconds();
    }

    _incrementSeconds() {
        this.setState({ seconds: this.state.seconds + 1 });
        
        if (this.state.seconds === 60) {
            this.setState({ seconds: 0 });
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.setState({ minutes: this.state.minutes + 1 });
        
        if (this.state.minutes === 60) {
            this.setState({ minutes: 0 });
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.setState({ hours: this.state.hours + 1 });
        
        if (this.state.hours === 24) {
            this.setState({ hours: 0 });
        }
    }

    fillZeroes(num) {
        if (num < 10) {
            return "0" + num.toString();
        } else {
            return num.toString();
        }
    }

    toString() {
        return [this.fillZeroes(this.state.hours), this.fillZeroes(this.state.minutes), this.fillZeroes(this.state.seconds)].join(":");
    }

    render() {
        return (
            <h2 className="clock">{this.toString()}</h2>
        )
    }
}
