import {
  LengthValidation,
  RegexValidation,
  RequiredValidation,
  Validations,
} from '../screens/UserForm/types';

function validateRequire(text: string, validations: RequiredValidation) {
  const { value, message } = validations;
  if (value && !text) return message;
  return '';
}

function validateMinLength(text: string, validations: LengthValidation) {
  const { value, message } = validations;
  if (text.length < value) return message;
  return '';
}

function validateMaxLength(text: string, validations: LengthValidation) {
  const { value, message } = validations;
  if (text.length > value) return message;
  return '';
}

function validateRegex(text: string, validations: RegexValidation) {
  const { value, message } = validations;
  if (!value.test(text)) return message;
  return '';
}

function checkValidations(value: string, validations?: Validations) {
  if (!validations) return '';
  let error = '';

  if (validations?.required)
    error = validateRequire(value, validations.required);

  if (!error && validations?.pattern)
    error = validateRegex(value, validations.pattern);

  if (!error && validations?.minLength)
    error = validateMinLength(value, validations.minLength);

  if (!error && validations?.maxLength)
    error = validateMaxLength(value, validations.maxLength);

  return error;
}

function generateId() {
  return crypto.randomUUID();
}

export { checkValidations, generateId };
