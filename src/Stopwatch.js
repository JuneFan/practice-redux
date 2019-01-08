import React from 'react';

class Stopwatch extends React.Component {
    constructor(){
        super();
        this.state = {
            displayTime:'',
            seconds:0,
            intervalId:null,
            disableStart:false
        }
        this.parseTime = this.parseTime.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.addingFunc = this.addingFunc.bind(this);
    };

    parseTime(seconds){
        let date = new Date(null);
        date.setMilliseconds(seconds); 
        let result = date.toISOString().substr(11, 14);
        return result;
    }

    componentWillMount(){
        this.setState({
            displayTime:this.parseTime(0)
        })
    }

    addingFunc(){
        this.setState((prev)=>{
            return {
                displayTime:this.parseTime(prev.seconds+1),
                seconds:prev.seconds+1
            }
        })
    }

    start(){
        this.setState({
            intervalId:setInterval(this.addingFunc,1),
            disableStart:true
        })
    }

    stop(){
        clearInterval(this.state.intervalId);
        this.setState({
            disableStart:false
        })
    }

    reset(){
        clearInterval(this.state.intervalId);        
        this.setState((prev)=>{
            return {
                displayTime:this.parseTime(0),
                seconds:0,
                disableStart:false
            }
        });
    }

    render(){
        return (
            <div>
                <div>{this.state.displayTime}</div>
                <div>
                    <button onClick={this.start} disabled={this.state.disableStart}>Start</button>
                    <button onClick={this.stop} disabled={!this.state.disableStart}>Stop</button>
                    <button onClick={this.reset} disabled={!this.state.disableStart}>Reset</button>
                </div>
            </div>
        )
    }
};

export default Stopwatch;