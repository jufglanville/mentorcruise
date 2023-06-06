import React, { useEffect, useState } from 'react';
import { pricePlanData as data } from '../data/pricePlans';
import TipInputContainer from './TipInputContainer';
import TipOutputContainer from './TipOutputContainer';
import { OutputType } from '../types';

const TipCalculator = () => {
  const [pricePlanData, setPricePlanData] = useState(data);
  const [output, setOutput] = useState<OutputType>({
    tipAmount: 0,
    total: 0,
    currency: '$',
    active: false,
  });

  const handleChange = (id: string, value: string | number) => {
    const updatedPricePlanData = pricePlanData.map((item) => {
      if (item.id === id) {
        return { ...item, value: value };
      }
      return item;
    });

    setPricePlanData(updatedPricePlanData);
  };

  const calculateTip = () => {
    if (
      pricePlanData[0].value === 0 ||
      pricePlanData[0].value === '' ||
      pricePlanData[1].value === 0 ||
      pricePlanData[1].value === '' ||
      pricePlanData[2].value === 0 ||
      pricePlanData[2].value === ''
    ) {
      setOutput({ tipAmount: 0, total: 0, currency: '$', active: false });
      return;
    } else {
      const bill = pricePlanData[0].value as number;
      const tipPercentage = (pricePlanData[1].value as number) / 100;
      const numberOfPeople = pricePlanData[2].value as number;
      const tipAmount = (bill * tipPercentage) / numberOfPeople;
      const total = bill / numberOfPeople + tipAmount;

      setOutput({ tipAmount, total, currency: '$', active: true });
    }
  };

  useEffect(() => {
    calculateTip();
  }, [pricePlanData]);

  const handleReset = () => {
    const updatedPricePlanData = pricePlanData.map((item) => {
      return { ...item, value: 0 };
    });

    setPricePlanData(updatedPricePlanData);
  };

  return (
    <div>
      <TipInputContainer data={pricePlanData} onChange={handleChange} />
      <TipOutputContainer data={output} onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
