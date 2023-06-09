import { FormInputTypes, TipOutputType } from '../types';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';

export const formInputs: FormInputTypes[] = [
  {
    type: 'Input',
    valueType: 'float',
    id: 'input_bill',
    name: 'Bill',
    value: 0,
    icon: dollar,
    onChange: (id: string, value: string | number) => {},
  },
  {
    type: 'TipAmountContainer',
    id: 'tip_amount_container',
    name: 'Select Tip %',
    value: 0,
    custom: true,
    valueOptions: [5, 10, 15, 25, 50],
    onChange: (id: string, value: string | number) => {},
  },
  {
    type: 'Input',
    valueType: 'integer',
    id: 'input_people',
    name: 'Number of People',
    value: 0,
    icon: person,
    error: "Can't be zero",
    onChange: (id: string, value: string | number) => {},
  },
];

export class TipOutput implements TipOutputType {
  public currency: string;
  public tipAmount: number;
  public total: number;
  public active: boolean;

  constructor(currency: string) {
    this.currency = currency;
    this.tipAmount = 0;
    this.total = 0;
    this.active = false;
  }

  public calculateTip(bill: number, tip: number, numberOfPeople: number) {
    if (bill === 0 || tip === 0 || numberOfPeople === 0) {
      this.tipAmount = 0;
      this.total = 0;
      this.active = false;
    } else {
      const tipPercentage = tip / 100;
      this.tipAmount = (bill * tipPercentage) / numberOfPeople;
      this.total = bill / numberOfPeople + this.tipAmount;
      this.active = true;
    }
  }
}
