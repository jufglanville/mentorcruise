import {
  InputType,
  InputElementType,
  InputValidationTest,
  InputValidationMap,
} from '../types';

const regexValidation = {
  required: /^(?!\s*$).+/,
  name: /^[a-zA-Z'-]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
};

const requiredValidation: InputValidationTest = {
  test: (val: string) => regexValidation.required.test(val),
  errorMessage: (name: string) => `${name} must not be empty.`,
};

const validation: InputValidationMap = {
  text: [
    requiredValidation,
    {
      test: (val: string) => regexValidation.name.test(val),
      errorMessage: (name: string) =>
        `${name} must be at least 2 characters long and contain only letters, apostrophes, and hyphens.`,
    },
  ],
  email: [
    requiredValidation,
    {
      test: (val: string) => regexValidation.email.test(val),
      errorMessage: (name: string) => `${name} must be a valid email address.`,
    },
  ],
  password: [
    requiredValidation,
    {
      test: (val: string) => regexValidation.password.test(val),
      errorMessage: (name: string) =>
        `${name} must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.`,
    },
  ],
};

export class Input implements InputType {
  public id: string;
  public type: InputElementType;
  public name: string;
  public value?: any;
  public isValid: boolean;
  public validation: InputValidationTest[];
  public errorMessage: string;

  constructor(
    type: InputElementType,
    name: string,
    value: any = '',
    isValid: boolean = false
  ) {
    this.id = name.toLowerCase().replace(' ', '-');
    this.name = name;
    this.type = type;
    this.value = value;
    this.isValid = isValid;
    this.validation = validation[type];
    this.errorMessage = '';
    this.validate();
  }

  public validate(): void {
    for (let i = 0; i < this.validation.length; i++) {
      const isValid = this.validation[i].test(this.value);
      if (!isValid) {
        this.isValid = false;
        this.errorMessage = this.validation[i].errorMessage(this.name);
        return;
      }
    }
    this.isValid = true;
    this.errorMessage = '';
  }
}
