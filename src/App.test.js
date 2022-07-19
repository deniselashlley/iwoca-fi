import { render, screen } from '@testing-library/react';
import App from './App';

test('Application Portal renders', () => {
  render(<App />);
  const title = screen.getByText(/Application Portal/i);
  expect(title).toBeInTheDocument();
});
