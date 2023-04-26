import './App.css';
import General from './components/general';
import Education from './components/education';
import Experience from './components/experience';
import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submitted: false,

    }

    this.toggleSubmitted = this.toggleSubmitted.bind(this);

}


toggleSubmitted() {
  this.setState({ submitted: !this.state.submitted });
  console.log(this.state.submitted)
}

render() {
  return (
      <div className="App">
        < General submitted={this.state.submitted}/>
        {/* < Education />
        < Experience /> */}
        <button onClick={this.toggleSubmitted}>
          {this.state.submitted ? 'Undo submit' : 'True submit'}
        </button>
      </div>
    );
  }
};

export default App;
