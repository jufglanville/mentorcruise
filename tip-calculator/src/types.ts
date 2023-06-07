type dataTypes = 'float' | 'integer' | 'string';

export type InputType = {
  type: 'Input';
  id: string;
  valueType: dataTypes;
  value: string | number;
  icon?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  onChange: (id: string, value: number | string) => void;
}

export type TipsType = {
  type: 'TipAmountContainer';
  id: string;
  name: string;
  value: string | number;
  valueOptions: number[];
  custom: boolean;
  onChange: (id: string, value: number | string) => void;
}

export type FormInputTypes = InputType | TipsType;

export type TipOutputType = {
  currency: string;
  tipAmount: number;
  total: number;
  active: boolean;
}