import React, { Component } from 'react';
import getLotteryContract from './lottery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { manager: '', loading: true };
  }

  async componentDidMount() {
    const lottery = await getLotteryContract();
    console.log('Lottery contract:', await lottery.methods.manager().call());
    if (lottery) {
      const manager = await lottery.methods.manager().call();
      console.log('Manager:', manager);
      this.setState({ manager, loading: false });
    } else {
      console.error('Lottery contract not loaded');
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, manager } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}</p>
      </div>
    );
  }
}

export default App;
