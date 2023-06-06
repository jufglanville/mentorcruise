import React, { useState } from 'react';
import { pricePlanData as data } from '../data/pricePlans';
import TipInputContainer from './TipInputContainer';
import TipOutputContainer from './TipOutputContainer';

const TipCalculator = () => {
  const [pricePlanData, setPricePlanData] = useState(data);

  const handleChange = (id: string, value: string | number) => {
    const updatedPricePlanData = pricePlanData.map((item) => {
      if (item.id === id) {
        return { ...item, value: value };
      }
      return item;
    });

    setPricePlanData(updatedPricePlanData);
  };

  const handleReset = () => {
    console.log('handle Reset');
  };

  const output = {
    tip: 10,
    total: 20.23,
    currency: '$',
  };

  return (
    <div>
      <TipInputContainer data={pricePlanData} onChange={handleChange} />
      <TipOutputContainer data={output} onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
