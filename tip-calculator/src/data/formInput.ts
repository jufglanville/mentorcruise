import {
  FormInputTypes,
  TipOutputType,
  DataTypes,
  InputType,
  TipsType,
} from '../types';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';

export class InputCreator {
  constructor() {}

  public createInput(
    id: string,
    valueTypes: DataTypes,
    onChange: (id: string, value: string | number) => void,
    name?: string,
    icon?: string,
    error?: string,
    placeholder?: string
  ): InputType {
    return {
      type: 'Input',
      id: id,
      name: name,
      value: 0,
      valueType: valueTypes,
      icon: icon,
      error: error,
      placeholder: placeholder,
      onChange: onChange,
    };
  }

  public createTipContainer(
    id: string,
    name: string,
    valueOptions: number[],
    custom: boolean,
    onChange: (id: string, value: string | number) => void
  ): TipsType {
    return {
      type: 'TipAmountContainer',
      id: id,
      name: name,
      value: 0,
      valueOptions: valueOptions,
      custom: custom,
      onChange: onChange,
    };
  }
}

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

export const formInputs: FormInputTypes[] = [
  new InputCreator().createInput(
    'input_bill',
    'float',
    (id, value) => {},
    'Bill',
    dollar
  ),
  new InputCreator().createTipContainer(
    'tip_amount_container',
    'Select Tip %',
    [5, 10, 15, 25, 50],
    true,
    (id, value) => {}
  ),
  new InputCreator().createInput(
    'input_people',
    'integer',
    (id, value) => {},
    'Number of People',
    person,
    "Can't be zero"
  ),
];
