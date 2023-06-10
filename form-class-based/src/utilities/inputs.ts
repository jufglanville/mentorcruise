import {
  InputType,
  InputElementType,
  InputValidation,
  InputValidationMap,
} from '../types';

const validation: InputValidationMap = {
  text: {
    valid: (val: string) => /^[a-zA-Z'-]{2,}$/.test(val),
    errorMessage:
      'Name must be at least 2 characters long and contain only letters, apostrophes, and hyphens.',
  },
  email: {
    valid: (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    errorMessage: 'Please enter a valid email address.',
  },
  password: {
    valid: (val: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(val),
    errorMessage:
      'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.',
  },
};

export class Input implements InputType {
  public id: string;
  public type: InputElementType;
  public placeholder: string;
  public value?: any;
  public isValid: boolean;
  public validation: InputValidation;

  constructor(
    type: InputElementType,
    placeholder: string,
    value: any = '',
    isValid: boolean = false
  ) {
    this.id = placeholder.toLowerCase().replace(' ', '-');
    this.type = type;
    this.placeholder = placeholder;
    this.value = value;
    this.isValid = isValid;
    this.validation = validation[type];
  }
}
