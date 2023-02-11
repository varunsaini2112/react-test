import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoList from './ToDoList';

jest.mock('crypto', () => ({
  randomUUID: jest.fn(() => Math.random().toString(16)),
}));

describe('ToDoList render', () => {
  it('should render header', () => {
    render(<ToDoList />);

    expect(screen.getByText('To Do List')).toBeInTheDocument();
  });

  it('should render text input field with add Button', () => {
    render(<ToDoList />);

    expect(
      screen.getByPlaceholderText('Do you have a task?')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Add a task' })
    ).toBeInTheDocument();
  });

  it('add button should be disabled if no characters in inputField', () => {
    render(<ToDoList />);

    expect(screen.getByPlaceholderText('Do you have a task?')).toHaveValue('');
    expect(screen.getByRole('button', { name: 'Add a task' })).toBeDisabled();
  });

  it('no tasks should be in the todo list', () => {
    render(<ToDoList />);

    expect(screen.getByText('No tasks added')).toBeInTheDocument();
  });

  it('to add a task in the todo list', () => {
    render(<ToDoList />);

    const inputField = screen.getByPlaceholderText('Do you have a task?');
    userEvent.type(inputField, 'Get a haircut');

    const addTaskButton = screen.getByRole('button', { name: 'Add a task' });
    expect(addTaskButton).toBeEnabled();
    userEvent.click(addTaskButton);

    expect(screen.getByText('Get a haircut')).toBeInTheDocument();
  });
});
