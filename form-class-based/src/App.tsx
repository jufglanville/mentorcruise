import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button active={true} onClick={() => console.log('Clicked')}>
          Claim your free trial
        </Button>
      </div>
    );
  }
}

export default App;
