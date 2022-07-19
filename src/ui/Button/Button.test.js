import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button', () => {
  it('should render text', () => {
    render(<Button label="My test button" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/my test button/i);
  });

  it('should be clickable', () => {
    const mockClick = jest.fn();
    render(<Button label="My test button" onClick={mockClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockClick).toBeCalledTimes(1);
  });

  it('should NOT be clickable when disabled', () => {
    const mockClick = jest.fn();
    render(<Button label="My test button" onClick={mockClick} isDisabled />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockClick).not.toHaveBeenCalled();
  });
});