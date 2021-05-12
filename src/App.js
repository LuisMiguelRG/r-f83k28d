import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div>
        { this.state.show ? <span className="value">{ this.state.clicks }</span> : '' }
        <button id="inc" onClick={this.IncrementItem}>Incrementa</button>
      </div>
    );
  }
}

export default App;
