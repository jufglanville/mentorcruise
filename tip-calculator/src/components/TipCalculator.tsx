import React, { useEffect, useState } from 'react';
import { formInputs, TipOutput } from '../data/formInput';
import TipInputContainer from './TipInputContainer';
import TipOutputContainer from './TipOutputContainer';

const TipCalculator = () => {
  const [tipInputData, setTipInputData] = useState(formInputs);
  const [tipOutputData, setTipOutputData] = useState(new TipOutput('$'));

  const handleChange = (id: string, value: string | number) => {
    const updatedTipInputData = tipInputData.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setTipInputData(updatedTipInputData);
  };

  const handleReset = () => {
    const resetTipInput = tipInputData.map((item) => ({
      ...item,
      value: 0,
    }));
    setTipInputData(resetTipInput);
  };

  useEffect(() => {
    const [bill, tip, numberOfPeople] = tipInputData.map(
      (item) => item.value as number
    );

    if (bill === 0 || tip === 0 || numberOfPeople === 0) {
      setTipOutputData(new TipOutput('$'));
    } else {
      const tipOutputInstance = new TipOutput('$');
      const { tipAmount, total, active } = tipOutputInstance.calculateTip(
        bill,
        tip,
        numberOfPeople
      );

      setTipOutputData({
        ...tipOutputData,
        tipAmount,
        total,
        active,
      } as TipOutput);
    }
  }, [tipInputData]);

  return (
    <div>
      <TipInputContainer data={tipInputData} onChange={handleChange} />
      <TipOutputContainer data={tipOutputData} onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
