
import './App.css';
import React from "react";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sec: 0,
      min: 0,
      hr: 0,
    };
  }

  start = () => {
     var {timer} = this.state;
    if (timer) {
      clearInterval(this.startTime);
    } else {
      var {hr, min, sec} = this.state;

      this.startTime = setInterval(() => {
        sec += 1;
        if (sec >= 100) {
          min += 1;
          sec = 0;
        }
        if (min >= 60) {
          hr += 1;
          min = 0;
        }
        this.setState({ hr, min, sec });
      }, 1000);
    }
    this.setState({ timer: !timer });
  }

  stop = () => {
    clearInterval(this.startTime);
  }

  reset = () => {
    this.setState({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };


  render() {
    return (
      <div className='app'>
        <div className="stopwatch">
          {(this.state.hr >= 10) ? this.state.hr: '0' + this.state.hr}:
          {(this.state.min >= 10) ? this.state.min: '0' + this.state.min}:
          {(this.state.sec >= 10) ? this.state.sec: '0' + this.state.sec}
        </div>
        <div className='btn'>
          <button onClick={this.start}>Start/Stop</button>
          <button onClick={this.start}>Wait</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}


export default App;
