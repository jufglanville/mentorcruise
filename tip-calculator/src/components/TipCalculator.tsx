import React, { useEffect, useState } from 'react';
import { formInputs, TipOutput } from '../data/formInput';
import TipInputContainer from './TipInputContainer';
import TipOutputContainer from './TipOutputContainer';

const TipCalculator = () => {
  const [tipInputData, setTipInputData] = useState(formInputs);
  const [tipOutputData, setTipOutputData] = useState(new TipOutput('$'));

  const handleChange = (id: string, value: string | number) => {
    const updatedTipInputData = tipInputData.map((item) => {
      if (item.id === id) {
        return { ...item, value: value };
      }
      return item;
    });

    setTipInputData(updatedTipInputData);
  };

  const calculateTip = () => {
    if (
      tipInputData[0].value === 0 ||
      tipInputData[0].value === '' ||
      tipInputData[1].value === 0 ||
      tipInputData[1].value === '' ||
      tipInputData[2].value === 0 ||
      tipInputData[2].value === ''
    ) {
      setTipOutputData(new TipOutput('$'));
      return;
    } else {
      const bill = tipInputData[0].value as number;
      const tipPercentage = (tipInputData[1].value as number) / 100;
      const numberOfPeople = tipInputData[2].value as number;
      const tipAmount = (bill * tipPercentage) / numberOfPeople;
      const total = bill / numberOfPeople + tipAmount;

      setTipOutputData({ tipAmount, total, currency: '$', active: true });
    }
  };

  useEffect(() => {
    calculateTip();
  }, [tipInputData]);

  const handleReset = () => {
    const updatedTipInputData = tipInputData.map((item) => {
      return { ...item, value: 0 };
    });

    setTipInputData(updatedTipInputData);
  };

  return (
    <div>
      <TipInputContainer data={tipInputData} onChange={handleChange} />
      <TipOutputContainer data={tipOutputData} onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
