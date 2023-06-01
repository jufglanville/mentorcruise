import React from 'react';
import AmountOutput from './components/AmountOutput';

const App = () => {
  return (
    <div>
      App
      <AmountOutput label="Tip Amount" value={10.1} />
      <AmountOutput label="Total" value={20.836} />
    </div>
  );
};

export default App;
