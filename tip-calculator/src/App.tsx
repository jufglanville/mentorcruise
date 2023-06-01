import React from 'react';
import Button from './components/Button';

import Input from './components/Input';

import dollar from './assets/icon-dollar.svg';
import person from './assets/icon-person.svg';

const App = () => {
  const handleChange = (value: string | number) => {
    console.log(value);
  };

  return (
    (
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
    
      <Input
        label="Bill"
        type="float"
        value={230}
        icon={dollar}
        onChange={handleChange}
      />
      <Input
        label="Number of People"
        type="integar"
        value={0}
        icon={person}
        onChange={handleChange}
        error="Can't be zero"
      />
      <Input
        type="integar"
        value={0}
        onChange={handleChange}
        placeholder="Custom"
      />
    </div>
  )
  );
};

export default App;
