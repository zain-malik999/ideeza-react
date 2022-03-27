import React from "react";
import { TextField, Icon_Label } from "molecules";
import { BsFillQuestionCircleFill } from "react-icons/bs";
function AdvanceOptionBody(props) {
  const { mainClass, inputClass } = props;
  return (
    <div className={mainClass}>
      <div className="space-y-6">
        <TextField
          mainClass="flex flex-col"
          labelvalue={
            <>
              <Icon_Label
                labelValue="Start Date"
                mainClass="flex items-center flex-row-reverse justify-end"
                iconContanerClass="text-2xl text-gray-800"
                lableClass={{
                  root:
                    "font-sans font-semibold text-base tracking-tight text-black-100 pr-2",
                }}
                tooltipProps={{ open: false }}
                iconComponent={
                  <BsFillQuestionCircleFill className="text-current text-xl" />
                }
              />
            </>
          }
          inputClasses={`${inputClass} p-0 mt-2`}
          isIcon
          position="end"
          icon={<img src="/assets/images/calendar (1).png" />}
        />
        <TextField
          mainClass="flex flex-col"
          labelvalue={
            <>
              <Icon_Label
                labelValue="Weekly Payment"
                mainClass="flex items-center flex-row-reverse justify-end"
                iconContanerClass="text-2xl text-gray-800"
                lableClass={{
                  root:
                    "font-sans font-semibold text-base tracking-tight text-black-100 pr-2",
                }}
                tooltipProps={{ open: false }}
                iconComponent={
                  <BsFillQuestionCircleFill className="text-current text-xl" />
                }
              />
            </>
          }
          inputClasses={`${inputClass} p-0 mt-2`}
        />
      </div>
    </div>
  );
}
AdvanceOptionBody.defaultProps = {
  mainClass: "flex justify-center flex-col items-center pt-10 md:w-3/4 md:pl-6",
  class1: "font-sans font-semibold text-sm text-black-100",
  inputClass: "border border-solid border-gray-770 w-44 rounded pr-2 p-0",
};
export default AdvanceOptionBody;
