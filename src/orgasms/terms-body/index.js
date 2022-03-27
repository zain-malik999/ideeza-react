import React from "react";
import { TextField, RadioLabel } from "molecules";
import { Label, Button } from "atoms";
import { BsFillQuestionCircleFill } from "react-icons/bs";
function TermsBody(props) {
  const {
    mainClass,
    mainInput,
    inputClass,
    class1,
    value1,
    class2,
    class3,
    class4,
    btnClass,
    radiomain,
  } = props;
  return (
    <div className={mainClass}>
      <div>
        <TextField
          mainClass={mainInput}
          inputClasses={inputClass}
          labelvalue="Total Amount"
          labelClasses={class1}
        />
        <Label value={value1} classes={{ root: `${class2} mt-2` }} />
        <div className="flex space-x-2">
          <Label
            value="Deposit Funds into Escrow"
            classes={{ root: `${class3}` }}
          />
          <BsFillQuestionCircleFill className="text-current text-xl" />
        </div>
        <div className="flex flex-col">
          <RadioLabel
            value="Deposit for the whole project"
            size="sm"
            mainClass={radiomain}
            lableClass={class4}
            color="current"
          />
          <RadioLabel
            value="Deposit a lesser amount to cover the first milestone"
            size="sm"
            mainClass={`${radiomain} md:-mt-4`}
            lableClass={class4}
            color="current"
          />
        </div>
        <TextField
          mainClass="flex flex-col"
          labelvalue={
            <div className="flex items-center space-x-2">
              <Label value="Due Date" classes={{ root: `${class3}` }} />
              <Button value="Optional" className={btnClass} />
              <BsFillQuestionCircleFill className="text-current text-xl" />
            </div>
          }
          inputClasses={`${inputClass} p-0 mt-2`}
          isIcon
          position="end"
          icon={<img src="/assets/images/calendar (1).png" />}
        />
      </div>
    </div>
  );
}
TermsBody.defaultProps = {
  mainClass: "flex justify-center flex-col items-center py-8 p-4",
  mainInput: "flex flex-col space-y-1",
  inputClass:
    "border border-solid border-gray-770 md:w-44 w-full rounded pr-2 p-0",
  class1: "font-sans font-semibold text-base tracking-tight text-black-100",
  class2: "font-semibold text-base tracking-tight font-sans text-center",
  class3: "font-sans font-semibold text-base tracking-tight text-black-100",
  class4: "text-gray-890 font-sans text-md tracking-tight",
  radiomain: "flex items-center -mt-1 -ml-3",
  btnClass: "text-xs font-sans bg-current text-white py-2 px-4 transform-none ",
};
export default TermsBody;
