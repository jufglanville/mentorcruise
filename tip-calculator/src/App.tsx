import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      App
      <Button
        selected={false}
        disabled={true}
        onClick={() => console.log('clicked')}
      >
        reset
      </Button>
      <Button selected={true} onClick={() => console.log('clicked')}>
        5%
      </Button>
      <Button selected={false} onClick={() => console.log('clicked')}>
        15%
      </Button>
    </div>
  );
};

export default App;
