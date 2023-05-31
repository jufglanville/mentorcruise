import React from 'react';

import Input from './components/Input';

import dollar from './assets/icon-dollar.svg';
import person from './assets/icon-person.svg';

const App = () => {
  const handleChange = (value: string | number) => {
    console.log(value);
  };

  return (
    <div>
      App
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
    </div>
  );
};

export default App;
