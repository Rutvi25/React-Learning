import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelcaseWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App />);
  // finds the element with role of button and text of "Change to Midnight Blue".
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  // expects the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'})
  //click event
  fireEvent.click(colorButton);
  // expects the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue'})
  // expects the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
});
test('initial conditions', () => {
  render(<App />);
  // check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'})
  expect(colorButton).toBeEnabled();
  // check the checkbox starts out unchecked}
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})
test('checkbox makes button disabled and enabled on alternative clicks', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'disable button' });
  const colorButton = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
test('Disabled button has gray background and revert to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  // enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});
test('Clicked disabled button has gray background and revert to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  fireEvent.click(colorButton)
  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  // enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelcaseWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelcaseWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelcaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})