import { useState } from "react";
export function replaceCamelcaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled = {disabled}
      >
        Change to {replaceCamelcaseWithSpaces(newButtonColor)}
      </button><br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}   //for accesibility
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">disable button</label>
    </div>
  );
}

export default App;
