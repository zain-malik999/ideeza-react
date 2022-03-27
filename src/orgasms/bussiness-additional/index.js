import React from "react";
import { Select, Label } from "atoms";
import { Icon_Label } from "molecules";
import { AiFillMinusCircle } from "react-icons/ai";

function BussinessAdditional(props) {
  const {
    placeholder,
    placeholder2,
    value,
    value2,
    skillValue,
    equipmentValue,
    errors,
    register,
    control,
  } = props;
  return (
    <div>
      <div className="md:w-2/5">
        <Select
          placeholder={placeholder}
          register={register}
          errors={errors}
          control={control}
          containerClass="h-9 text-gray-600 border border-gray-160"
          inputClass="text-md tracking-tight p-1 px-2"
          options={[{ value: "Some", name: "Some" }]}
        />
      </div>
      <div className="md:flex items-start md:w-3/4 pt-5">
        <Label
          value="Skills"
          className="text-gray-300 font-semibold text-base md:w-1/4 py-1"
        />
        <div className={`space-y-1 w-full`}>
          <Icon_Label
            mainClass="flex items-center w-full"
            tooltipProps={{ open: false }}
            labelValue={
              <>
                <span>{skillValue}</span>
                <div className="w-5">
                  <AiFillMinusCircle className="text-red-700 text-xl cursor-pointer" />
                </div>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `text-gray-300 tracking-tight text-md md:ml-2 leading-5 font-sans flex items-center justify-between w-full`,
            }}
          />
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="md:w-2/5">
        <Select
          placeholder={placeholder2}
          register={register}
          errors={errors}
          control={control}
          containerClass="h-9 text-gray-600 border border-gray-160"
          inputClass="text-md tracking-tight p-1 px-2"
          options={[{ value: "Some", name: "Some" }]}
        />
      </div>
      <div className="md:flex items-start md:w-3/4 pt-5">
        <Label
          value={value2}
          className="text-gray-300 font-semibold text-base md:w-1/4 py-1"
        />
        <div className={`space-y-1 w-full`}>
          <Icon_Label
            mainClass="flex items-center w-full"
            tooltipProps={{ open: false }}
            labelValue={
              <>
                <span>{equipmentValue}</span>
                <div className="w-5">
                  <AiFillMinusCircle className="text-red-700 text-xl cursor-pointer" />
                </div>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `text-gray-300 tracking-tight text-md md:ml-2 leading-5 font-sans flex items-center justify-between w-full`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
BussinessAdditional.defaultProps = {
  placeholder: "Choose skills here...",
  placeholder2: "Choose equipment here...",
  value: "Skills",
  value2: "Equipment",
  skillValue: "ADM-Engineering",
  equipmentValue: "ADM-Customized Volume Manufacturing",
};
export default BussinessAdditional;
