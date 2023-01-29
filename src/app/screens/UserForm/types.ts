import { ChangeEvent, FormEvent } from 'react';

export interface RequiredValidation {
  value: boolean;
  message: string;
}

export interface LengthValidation {
  value: number;
  message: string;
}

export interface RegexValidation {
  value: RegExp;
  message: string;
}

interface DateValidation {
  value: string;
  message: string;
}

export interface Validations {
  required?: RequiredValidation;
  minLength?: LengthValidation;
  maxLength?: LengthValidation;
  pattern?: RegexValidation;
  min?: DateValidation;
  max?: DateValidation;
}

export interface InputFieldProps {
  type: string;
  id: string;
  label?: string;
  validation?: Validations;
}

export interface RenderTemplateProps {
  formFields: InputFieldProps[];
  formData: FormData;
  onFormFieldChange: (
    e: ChangeEvent<HTMLInputElement>,
    item: InputFieldProps
  ) => void;
  disableSubmit: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface FormData {
  [index: string]: FormFieldState;
}

export interface FormFieldState {
  value: string;
  isInvalid: boolean;
  error: string;
}

export interface DataToSend {
  [index: string]: string;
}
