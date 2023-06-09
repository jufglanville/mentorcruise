import {
  FormInputTypes,
  TipOutputType,
  DataTypes,
  InputType,
  TipsType,
} from '../types';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';

export class InputFactory {
  private constructor() {}

  public static createInput(
    id: string,
    valueTypes: DataTypes,
    onChange: (id: string, value: string | number) => void,
    placeholder: string,
    name?: string,
    icon?: string,
    error?: string
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

  public static createTipContainer(
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
  private currency: string;
  private tipAmount: number;
  private total: number;
  private active: boolean;

  constructor(currency: string = '$') {
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

  public getTipAmount(): number {
    return this.tipAmount;
  }

  public getTipTotal(): number {
    return this.total;
  }

  public getActive(): boolean {
    return this.active;
  }

  public getCurrency(): string {
    return this.currency;
  }
}

export const formInputs: FormInputTypes[] = [
  InputFactory.createInput(
    'input_bill',
    'float',
    (id, value) => {},
    '0',
    'Bill',
    dollar
  ),
  InputFactory.createTipContainer(
    'tip_amount_container',
    'Select Tip %',
    [5, 10, 15, 25, 50],
    true,
    (id, value) => {}
  ),
  InputFactory.createInput(
    'input_people',
    'integer',
    (id, value) => {},
    '0',
    'Number of People',
    person,
    "Can't be zero"
  ),
];
