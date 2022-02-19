import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // finds the element with role of button and text of "Change to Blue".
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  // expects the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
  //click event
  fireEvent.click(colorButton);
  // expects the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})
  // expects the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
});
test('initial conditions', () => {
  render(<App />);
  // check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})
  expect(colorButton).toBeEnabled();
  // check the checkbox starts out unchecked}
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})
test('checkbox makes button disabled and enabled on alternative clicks', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});