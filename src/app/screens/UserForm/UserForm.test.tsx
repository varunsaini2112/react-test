import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';

describe('User Form Render', () => {
  it('should render the screen heading', () => {
    render(<UserForm />);

    expect(screen.getByText('User Form')).toBeInTheDocument();
  });

  it('should render all the form elements', () => {
    render(<UserForm />);

    expect(screen.getByLabelText('First name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile number')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

describe('User Form Functionality', () => {
  it('all fields should be empty initially', () => {
    render(<UserForm />);

    expect(screen.getByLabelText('First name')).toHaveValue('');
    expect(screen.getByLabelText('Last name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Mobile number')).toHaveValue('');
    expect(screen.getByLabelText('Date of birth')).toHaveValue('');
  });

  it('Submit button should be disabled initially', () => {
    render(<UserForm />);

    expect(screen.getByText('Submit')).toBeDisabled();
  });

  it('should render required error message on first name inputField', () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First name');
    userEvent.type(firstNameInput, 'V');
    userEvent.clear(firstNameInput);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
  });

  it('should render minimum length error message on first name inputField', () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First name');
    userEvent.type(firstNameInput, 'V');

    expect(
      screen.getByText('First name should be 2 or more characters')
    ).toBeInTheDocument();
  });

  it('should render maximum length error message on first name inputField', () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First name');
    userEvent.type(
      firstNameInput,
      'this is a long length string to test the length error on the input field'
    );

    expect(screen.getByText('Max length reached!')).toBeInTheDocument();
  });

  it('should render pattern error message on first name inputField', () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First name');
    userEvent.type(firstNameInput, '123V');

    expect(
      screen.getByText('First name not in correct format')
    ).toBeInTheDocument();
  });

  it('should not render error message on correct format first name', () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First name');
    userEvent.type(firstNameInput, 'Varun');
    const errorMessage = firstNameInput.nextSibling;

    expect(errorMessage).toHaveTextContent('');
  });
});
