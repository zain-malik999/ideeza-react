import React from "react";
import { TextField, SelectField, LabelButton } from "molecules";
function AddDetailPart(props) {
  const {
    mainClass,
    value,
    namePlaceholder,
    nameInputClass,
    namePlaceholder2,
    value2,
    value3,
    selectClass,
  } = props;
  return (
    <div className={mainClass}>
      <TextField
        mainClass="flex items-center pb-2 border-b"
        inputClasses={nameInputClass}
        labelClasses="text-gray-600 flex items-center text-sm font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue="Name"
        placeholder={namePlaceholder}
      />
      <SelectField
        mainClasses="flex items-center pb-2 border-b"
        className={selectClass}
        containerClass="rounded-none border border-solid border-gray-725"
        labelClasses="text-gray-600 text-sm font-sans tracking-tight md:w-2/4 w-1/2"
        value="Category"
      />
      <TextField
        mainClass="flex items-center pb-2 border-b"
        inputClasses={`text-gray-900 ${nameInputClass}`}
        labelClasses="text-gray-600 flex items-center  text-sm font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue="Description"
        placeholder={namePlaceholder2}
      />
      <LabelButton
        mainClass="flex "
        value="Use icon"
        btnValue="Choose from the list"
        labelClass="text-gray-600 flex items-center  text-sm font-sans tracking-tight md:w-2/4 w-1/2"
        btnClass="bg-ideeza-100 p-1 rounded-none w-full text-white"
      />
    </div>
  );
}
AddDetailPart.defaultProps = {
  mainClass: "bg-white rounded shadow p-4 space-y-2",
  nameClass: "text-gray-600",
  nameInputClass:
    "w-full p-0 h-8 text-sm tracking-tight rounded-none font-sans border border-solid border-gray-725 text-black-300",
  selectClass: "w-full py-0.5 text-sm tracking-tight rounded-none font-sans",
};
export default AddDetailPart;
