import React, { Component } from 'react';
import './css1.css';
import './css2.css';

import {Box} from './Box';

class App extends Component {

  state = {
    getValue: 0
  }

  changeValueToInt = (event) => {
    this.setState({getValue:event.target.value});
  }

  render() {

    var setBox = [];

    for (var i = 1 ; i <= this.state.getValue ; i++)
    {
        setBox.push(<Box />);
    }

    return (
      <div className="App bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          React by iPure
        </div>

        <div className="w3-display-middle">
          <h1 className="w3-xxlarge w3-animate-top">Create Box</h1>
          <p className="w3-large w3-center">Select number</p>
          <select onChange={this.changeValueToInt} value={this.state.getValue}>
            <option>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          {setBox}
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    );
  }
}

export default App;
