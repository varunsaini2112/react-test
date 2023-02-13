import moment from 'moment';
import React, { FormEvent, useMemo, useState } from 'react';
import { REGEX } from '../../lib/appConstants';
import { checkValidations } from '../../lib/helper';
import renderTemplate from './template';
import { DataToSend, FormData, InputFieldProps } from './types';

const formFields: InputFieldProps[] = [
  {
    type: 'text',
    id: 'firstName',
    label: 'First name',
    validation: {
      required: {
        value: true,
        message: 'First name is required',
      },
      minLength: {
        value: 2,
        message: 'First name should be 2 or more characters',
      },
      maxLength: {
        value: 40,
        message: 'Max length reached!',
      },
      pattern: {
        value: REGEX.ALPHABET_WITH_HYPHEN_AND_APOSTROPHE,
        message: 'First name not in correct format',
      },
    },
  },
  {
    type: 'text',
    id: 'lastName',
    label: 'Last name',
    validation: {
      required: {
        value: true,
        message: 'Last name is required',
      },
      minLength: {
        value: 2,
        message: 'Last name should be 2 or more characters',
      },
      maxLength: {
        value: 40,
        message: 'Max length reached!',
      },
      pattern: {
        value: REGEX.ALPHABET_WITH_HYPHEN_AND_APOSTROPHE,
        message: 'Last name not in correct format',
      },
    },
  },
  {
    type: 'email',
    id: 'emailId',
    label: 'Email',
    validation: {
      required: {
        value: true,
        message: 'Email is required',
      },
      minLength: {
        value: 5,
        message: 'Email is short',
      },
      maxLength: {
        value: 40,
        message: 'Email is too long',
      },
      pattern: {
        value: REGEX.EMAIL,
        message: 'Email not in correct format',
      },
    },
  },
  {
    type: 'text',
    id: 'mobileNo',
    label: 'Mobile number',
    validation: {
      required: {
        value: true,
        message: 'Mobile number is required',
      },
      pattern: {
        value: REGEX.MOBILE_NUMBER,
        message: 'Mobile number must be 10 digits long',
      },
    },
  },
  {
    type: 'date',
    id: 'dateOfBirth',
    label: 'Date of birth',
    validation: {
      required: {
        value: true,
        message: 'Date of birth is required',
      },
      min: {
        value: moment().subtract(100, 'year').format('YYYY-MM-DD'),
        message: '',
      },
      max: {
        value: moment().subtract(18, 'year').format('YYYY-MM-DD'),
        message: '',
      },
    },
  },
];

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const tempFormData: FormData = {};
    formFields.forEach((formField) => {
      const { id } = formField;
      tempFormData[id] = { value: '', error: '', isInvalid: true };
    });

    return tempFormData;
  });

  const disableSubmit = useMemo(() => {
    return !Object.keys(formData).every(
      (inputField) => !formData[inputField].isInvalid
    );
  }, [formData]);

  function onFormFieldChange(
    e: React.ChangeEvent<HTMLInputElement>,
    item: InputFieldProps
  ) {
    const value = e.target.value;
    const error = checkValidations(value, item?.validation);
    const isInvalid = Boolean(error);

    setFormData({
      ...formData,
      [item.id]: { value, error, isInvalid },
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tempFormData: DataToSend = {};
    Object.keys(formData).forEach((inputField) => {
      tempFormData[inputField] = formData[inputField].value;
    });

    console.log('formData>>>', tempFormData, formData);
  }

  return renderTemplate({
    formFields,
    formData,
    onFormFieldChange,
    disableSubmit,
    onSubmit,
  });
};

export default UserForm;
