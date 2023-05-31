import React from 'react';

import Input from './components/Input';

import dollar from './assets/icon-dollar.svg';

const App = () => {
  const handleChange = (value: string | number) => {
    console.log(value);
  };

  return (
    <div>
      App
      <Input
        label="Bill"
        type="number"
        value={230}
        icon={dollar}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
