import React from "react";
import { Label } from "atoms";
import { TextField, SelectField } from "molecules";
import Proptype from "prop-types";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Payment(props) {
  const {
    mainClass,
    title,
    titleClass,
    row,
    value1,
    value2,
    value3,
    value4,
    optionsM,
    optionsY,
    icon,
  } = props;
  return (
    <div className={mainClass}>
      <div className="md:w-1/2 w-full">
        <div className="flex space-x-8 justify-start items-center mb-10">
          <Label value={title} classes={{ root: `${titleClass}` }} />
          <img
            src="/assets/images/Visa_Inc._logo.png"
            alt="Visa Inc"
            className="w-8 h-3"
          />
          <img
            src="/assets/images/Mastercard-logo.png"
            alt="Master Card"
            className="w-7 h-5"
          />
          <img
            src="/assets/images/paypal.png"
            alt="Paypal"
            className="w-18 h-5"
          />
        </div>
        <div className={row}>
          <TextField
            mainClass="flex flex-col"
            inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
            labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
            labelvalue={value1}
            type="name"
          />
          <TextField
            mainClass="flex flex-col"
            inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
            labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
            labelvalue={value2}
            type="number"
          />
          <div className="grid grid-cols-3 items-end gap-x-3">
            <SelectField
              value={value3}
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              options={optionsM}
              placeholder="mm"
              mainClasses="flex flex-col"
              className="bg-white text-xs py-0 h-3 px-2 pr-4 rounded"
            />
            <SelectField
              options={optionsY}
              placeholder="yyyy"
              mainClasses="flex flex-col"
              className="bg-white text-xs py-0 h-3 px-2 pr-4 rounded"
            />
          </div>
          <TextField
            mainClass="flex flex-col"
            inputClasses="w-24 bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
            labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
            labelvalue={
              <div className="flex items-center">
                {value4}{" "}
                <AiOutlineInfoCircle className="text-gray-650 text-sm ml-4" />
              </div>
            }
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
Payment.defaultProps = {
  mainClass:
    "bg-gray-150 flex items-center justify-center rounded-lg flex-col py-20 pb-28 px-5",
  titleClass: "text-gray-300 text-sm font-sans tracking-tight font-semibold",
  row: "grid md:grid-cols-2 grid-cols-1 gap-4",
  class1: "text-xs text-gray-300 font-sans",
  inputMain: "flex flex-col space-y-1",
  input1: "bg-white rounded",
  class2: "flex flex-col",
  title: "Choose Payment Method:",
  value1: "Cardholder Name",
  value2: "Card Number",
  value3: "End Date",
  value4: "CVV",
};
Payment.prototype = {
  options: Proptype.array,
};
export default Payment;
