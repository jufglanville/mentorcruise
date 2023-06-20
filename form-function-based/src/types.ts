export type InputElementType = 'text' | 'email' | 'password';

export type InputValidationTest = {
  test: (val: string) => boolean;
  errorMessage: (val: string) => string;
}

export type InputValidationMap = {
  [key in InputElementType]: InputValidationTest[];
}

export type InputType = {
  id: string;
  type: InputElementType;
  name: string;
  validation: InputValidationTest[];
  errorMessage: string;
  isValid: boolean;
  value?: string;
  validate: () => void;
}