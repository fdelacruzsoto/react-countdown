import React, {Component} from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends Component {

  state = {
    deadline: 'July 16, 2018',
  };

  render() {
    const {deadline} = this.state;
    return (
      <div className="App">
        <h1>My birthday for this year</h1>
        <h4>{deadline}</h4>
        <Clock deadline={deadline}/>
      </div>
    );
  }
}

export default App;
