import { act, render } from '@testing-library/react';
import RestApi from './restApi';
import fetchWrapper from '../../lib/fetchWrapper';

jest.mock('../../lib/fetchWrapper', () =>
  jest.fn(() => Promise.resolve({ data: 'mocked data' }))
);

describe('restApi render', () => {
  it('Testing employeeData api', () => {
    render(<RestApi />);

    // fetchWrapper.mockImplementation(() => Promise.resolve({ data: 'heelo' }));

    expect(fetch).toHaveBeenCalled();
  });
});
