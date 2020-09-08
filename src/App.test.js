import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders current time box', () => {
  const { container } = render(<App />);
  const currentTimeBox = container.querySelector('[data-elm-id="current-time-box"]');
  expect(currentTimeBox).toBeInTheDocument();
});
