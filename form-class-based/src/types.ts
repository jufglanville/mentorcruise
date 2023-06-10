export type InputElementType = 'text' | 'email' | 'password';

export type InputValidation = {
  valid: (val: string) => boolean;
  errorMessage: string;
}

export type InputValidationMap = {
  [key in InputElementType]: InputValidation;
}

export type InputType = {
  id: string;
  type: InputElementType;
  placeholder: string;
  validation: InputValidation;
  isValid: boolean;
  value?: string;
}