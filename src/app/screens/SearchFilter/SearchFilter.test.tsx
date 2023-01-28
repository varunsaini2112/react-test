import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchFilter from './SearchFilter';

describe('Search Filter', () => {
  it('should render all elements correctly', () => {
    render(<SearchFilter />);

    expect(screen.getByPlaceholderText('Search here')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your text here...')
    ).toBeInTheDocument();
    expect(screen.getByText('Add Item')).toBeInTheDocument();
  });

  it('should render no list items initially', () => {
    render(<SearchFilter />);

    const items = screen.queryAllByTestId('list-item');
    expect(items).toHaveLength(0);
  });

  it('should not render a list item on clicking "Add Item" Button if textInput is empty', () => {
    render(<SearchFilter />);

    const textInput = screen.getByPlaceholderText('Enter your text here...');
    const addButton = screen.getByText('Add Item');

    expect(textInput).toHaveValue('');

    userEvent.click(addButton);
    const items = screen.queryAllByTestId('list-item');

    expect(items).toHaveLength(0);
  });

  it('should render a list item on clicking "Add Item" Button', () => {
    render(<SearchFilter />);

    const textInput = screen.getByPlaceholderText('Enter your text here...');
    const addButton = screen.getByText('Add Item');

    userEvent.type(textInput, 'Varun');
    expect(textInput).toHaveValue('Varun');

    userEvent.click(addButton);
    const items = screen.queryAllByTestId('list-item');

    expect(items).toHaveLength(1);
  });

  it('should render filtered list on performing search and then show complete list on emptying search', () => {
    render(<SearchFilter />);

    const textInput = screen.getByPlaceholderText('Enter your text here...');
    const searchInput = screen.getByPlaceholderText('Search here');
    const addButton = screen.getByText('Add Item');

    userEvent.type(textInput, 'Varun');
    userEvent.click(addButton);

    userEvent.type(textInput, 'Vandana');
    userEvent.click(addButton);

    userEvent.type(textInput, 'Pulkit');
    userEvent.click(addButton);

    userEvent.type(searchInput, 'Va');
    const items = screen.queryAllByTestId('list-item');
    expect(items).toHaveLength(2);

    userEvent.clear(searchInput);
    const Updateditems = screen.queryAllByTestId('list-item');
    expect(Updateditems).toHaveLength(3);
  });

  it('should remove a list item on tapping it', () => {
    render(<SearchFilter />);

    const textInput = screen.getByPlaceholderText('Enter your text here...');
    const searchInput = screen.getByPlaceholderText('Search here');
    const addButton = screen.getByText('Add Item');

    userEvent.type(textInput, 'Varun');
    userEvent.click(addButton);

    userEvent.type(textInput, 'Vandana');
    userEvent.click(addButton);

    userEvent.type(textInput, 'Pulkit');
    userEvent.click(addButton);

    expect(screen.queryAllByTestId('list-item')).toHaveLength(3);

    userEvent.click(screen.getByText('Vandana'));
    expect(screen.queryAllByTestId('list-item')).toHaveLength(2);

    userEvent.click(screen.getByText('Varun'));
    expect(screen.queryAllByTestId('list-item')).toHaveLength(1);
  });
});
