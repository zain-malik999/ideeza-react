import React from "react";
import { Label, Input, Select } from "atoms";
import { TextField } from "molecules";
import { GoPlus } from "react-icons/go";

function NetworkCard(props) {
  const { value, cellular, rf } = props;
  return (
    <div className="lg:w-3/4 w-full lg:ml-auto md:p-3 md:flex md:space-x-1">
      <Label
        value={value}
        className="text-sm w-12 text-gray-300 tracking-tight font-sans py-3"
      />
      <div className="flex items-center space-x-2 w-full lg:pr-20">
        <div className="px-3 py-2 border w-full space-y-2">
          <div className="grid md:grid-cols-3 grid-cols-1 items-start md:space-x-3 space-y-2 md:space-y-0">
            <Select
              placeholder="CDMA"
              containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
              inputClass="text-base tracking-tight px-2 py-1"
              options={[{ value: "Some", name: "Some" }]}
            />
            <div className="col-span-2">
              <div className={`${cellular} space-y-3`}>
                <div className="flex items-center space-x-3">
                  <Input
                    placeholder="1 MHz"
                    containerClass="w-full p-0 bg-gray-150"
                    inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 rounded border border-solid border-gray-160"
                  />
                  <span>-</span>
                  <Input
                    placeholder="100 MHz"
                    containerClass="w-full p-0 bg-gray-150"
                    inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 rounded border border-solid border-gray-160"
                  />
                  <div>
                    <GoPlus className="text-current cursor-pointer font-semibold text-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Input
                      placeholder="1 MHz"
                      containerClass="p-0 bg-gray-150"
                      inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 rounded border border-solid border-gray-160"
                    />
                    <div>
                      <GoPlus className="text-current cursor-pointer font-semibold text-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`lg:px-10 md:px-5 space-y-3 ${rf}`}>
                <TextField
                  mainClass="flex items-center space-x-3"
                  containerClass="w-full pl-3 p-0 bg-gray-150 rounded border border-solid border-gray-160 text-sm"
                  inputClasses="text-sm"
                  labelClasses="text-gray-300 text-sm w-56 font-sans tracking-tight text-right whitespace-nowrap"
                  labelvalue="Frequency allowed"
                  placeholder="100 MHz"
                />
                <TextField
                  mainClass="flex items-center space-x-3"
                  containerClass="w-full pl-3 p-0 bg-gray-150 rounded border border-solid border-gray-160 text-sm"
                  inputClasses="text-sm"
                  labelClasses="text-gray-300 text-sm w-56 font-sans tracking-tight text-right whitespace-nowrap"
                  labelvalue="Max Power"
                  placeholder="10 W"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <GoPlus className="text-current cursor-pointer font-semibold text-lg" />
        </div>
      </div>
    </div>
  );
}
NetworkCard.defaultProps = {
  value: "Cellular",
};
export default NetworkCard;
