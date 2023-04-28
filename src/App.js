import './App.css';
import General from './components/general';
import Education from './components/education';
import Experience from './components/experience';
import React, { useState } from 'react';


const App = () => {
  const [submitted, setSubmitted] = useState(false);

  const toggleSubmitted = () => {
    setSubmitted(!submitted)
  }


return  (
  <div className="App">
    < General submitted={submitted}/>

    < Education submitted={submitted}/>

    < Experience submitted={submitted}/>

    <button onClick={toggleSubmitted}>
      {submitted ? 'Edit' : 'Submit'}
    </button>
  </div>
)

};


/* // class-based version is commented out:

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

        < Education submitted={this.state.submitted}/>

        < Experience submitted={this.state.submitted}/>

        <button onClick={this.toggleSubmitted}>
          {this.state.submitted ? 'Edit' : 'Submit'}
        </button>
      </div>
    );
  }
}; */

export default App;
