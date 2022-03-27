import React from "react";
import { useHistory } from "react-router-dom";
import { Label, Button, Select } from "atoms";
function LabelFields(props) {
  const history = useHistory();
  const {
    value,
    selectOptions,
    className,
    selectClasses,
    selectdivclass,
    btnValue,
    labelClasses,
    buttonclasses,
    classesseeall,
    labelseeall,
    classessort,
    valuesort,
    mainClass,
    reverseClass,
    iconEnd,
    iconStart,
  } = props;
  function handleClick() {
    history.push("/user/dashboard/see-all-projects");
  }
  return (
    <div
      className={`flex items-center justify-between font-sans tracking-tight border-b ${mainClass}`}
    >
      <div className="flex items-center">
        <Label value={value} classes={{ root: `${labelClasses}` }} />
        <div onClick={handleClick}>
          <Label value={labelseeall} classes={classesseeall} />
        </div>
      </div>
      <div className={reverseClass}>
        <Button
          value={btnValue}
          startIcon={iconStart}
          endIcon={iconEnd}
          classes={{
            root: `transform-none font-sans tracking-tight ${buttonclasses}`,
          }}
        />
        <div className={`flex items-center ${selectdivclass}`}>
          <Label value={valuesort} classes={classessort} />
          <Select
            options={selectOptions}
            className={className}
            classes={{ root: `${selectClasses}` }}
          />
        </div>
      </div>
    </div>
  );
}
LabelFields.defaultProps = {
  mainClass: "border-gray-100 border-b",
  labelClasses: "text-xl text-gray-300",
  buttonclasses:
    "text-sm transform-none rounded-full bg-white border border-solid border-gray-175 font-sans tracking-tight px-6 py-2 text-gray-900",
  classesseeall: {
    root: "text-ideeza-100 underline ml-3 text-md cursor-pointer",
  },
  classessort: { root: "font-bold" },
  className: "w-48 p-0",
  selectClasses: "border p-3",
  // selectOptions: [{ value: "some", name: "some" }],
};
export default LabelFields;
