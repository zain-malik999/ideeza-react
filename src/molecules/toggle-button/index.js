import React from "react";
function ToggleButton(props) {
  const { labelOne, labelTwo, handleActive, active } = props;
  return (
    <div className="flex cursor-pointer select-none items-center overflow-hidden border border-gray-200 rounded-full">
      <span
        onClick={handleActive.bind(this, labelOne)}
        className={`block transition-all font-sans rounded-full capitalize text-xs px-6 py-2 ${
          active === labelOne ? "bg-secondary text-white" : ""
        }`}
      >
        {labelOne}
      </span>
      <span
        onClick={handleActive.bind(this, labelTwo)}
        className={`block transition-all font-sans rounded-full capitalize text-xs px-6 py-2 ${
          active === labelTwo ? "bg-secondary text-white" : ""
        }`}
      >
        {labelTwo}
      </span>
    </div>
  );
}
ToggleButton.defaulProps = {
  labelOne: "",
  labelTwo: "",
  active: "",
  handleActive: () => {},
};
export default ToggleButton;
