import React, { useState } from 'react';
import { pricePlanData as data } from '../data/pricePlans';
import TipInputContainer from './TipInputContainer';

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

  return (
    <div>
      <TipInputContainer data={pricePlanData} onChange={handleChange} />
    </div>
  );
};

export default TipCalculator;
