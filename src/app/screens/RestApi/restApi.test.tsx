import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestApi from './restApi';

describe('restApi render', () => {
  it('Testing employeeData api', async () => {
    render(<RestApi />);

    await waitFor(() => {
      expect(screen.getByText('Name: Varun')).toBeInTheDocument();
    });

    userEvent.click(screen.getByText('Another user'));

    await waitFor(() => {
      expect(screen.getByText('Name: Varun')).toBeInTheDocument();
    });
  });
});
