import { FormInputTypes, TipOutputType } from '../types';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';

export const formInputs: FormInputTypes[] = [
  {
    type: 'Input',
    valueType: 'float',
    id: 'id_1',
    name: 'Bill',
    value: 0,
    icon: dollar,
    onChange: (id: string, value: string | number) => {},
  },
  {
    type: 'TipAmountContainer',
    id: 'id_2',
    name: 'Select Tip %',
    value: 0,
    custom: true,
    valueOptions: [5, 10, 15, 25, 50],
    onChange: (id: string, value: string | number) => {},
  },
  {
    type: 'Input',
    valueType: 'integer',
    id: 'id_3',
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
}
