import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Button active={true} onClick={() => console.log('Clicked')}>
        Claim your free trial
      </Button>
    </div>
  );
};

export default App;
