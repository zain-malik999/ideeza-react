import React from "react";
import { Modal, Label, Button, Input } from "atoms";
import { SelectField, TextField, Icon_Label, RadioLabel } from "molecules";

function ProposelProject(props) {
  const {
    toggleOpen,
    open,
    btnClass1,
    btnClass2,
    class2,
    class4,
    class3,
    placeholder1,
    IClass,
  } = props;
  return (
    <div className="">
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div>
            <Label
              value="Proposel for project Toy Car"
              classes={{
                root: `text-gray-300 tracking-tight font-sans text-xl font-bold px-8 pt-5`,
              }}
            />
          </div>
        }
        content={
          <div className="px-2 pb-2">
            <Label
              value="Terms:"
              classes={{ root: `text-base font-sans text-current font-bold` }}
            />
            <div className="grid grid-cols-2 mt-1 space-x-3">
              <div className="space-y-3">
                <TextField
                  labelvalue="Hourly Rate"
                  labelClasses={class2}
                  inputClasses={IClass}
                  mainClass="flex flex-col space-y-1"
                />
                <SelectField
                  value="Time Consuming"
                  labelClasses={class2}
                  mainClasses="flex flex-col"
                  className="text-gray-300 text-sm p-2 mt-1 bg-gray-150"
                  containerClass={{ root: "w-10" }}
                  placeholder="1 day"
                />
                <TextField
                  labelvalue="Weekly Limit"
                  labelClasses={class2}
                  inputClasses={IClass}
                  mainClass="flex flex-col space-y-1 mt-3"
                />
              </div>
              <div className="flex flex-col justify-between">
                <SelectField
                  labelClasses={class2}
                  className={class3}
                  value="Switch to :"
                  placeholder={placeholder1}
                />
                <Label
                  value="=  $12200. max/week"
                  classes={{ root: `${class4}` }}
                />
              </div>
            </div>
            <Label
              value="Advance Option:"
              classes={{
                root: `text-base font-sans text-current font-bold mt-5`,
              }}
            />
            <div className="grid grid-cols-2 space-x-3">
              <div className="space-y-1 mt-2">
                <Icon_Label
                  labelValue="Start Date"
                  lableClass={{
                    root: `font-sans text-sm text-black-100 font-bold`,
                  }}
                  iconComponent={<img src="/assets/images/q-mark.png" />}
                  tooltipProps={{ open: false }}
                  iconContanerClass="px-1"
                  mainClass="flex items-center justify-end flex-row-reverse"
                />
                <Input
                  isIcon
                  position="end"
                  className={{
                    root: `pl-0 py-0 pr-2 bg-gray-150 text-gray-300`,
                  }}
                >
                  <img
                    src="/assets/images/calendar (1).png"
                    alt="Calender"
                    className="pr-2"
                  />
                </Input>
              </div>
              <div className="space-y-1 mt-2">
                <Icon_Label
                  labelValue="Weekly Payment"
                  lableClass={{ root: `${class2}` }}
                  iconComponent={<img src="/assets/images/q-mark.png" />}
                  tooltipProps={{ open: false }}
                  iconContanerClass="px-1"
                  mainClass="flex items-center justify-end flex-row-reverse"
                />
                <div className="flex space-x-6 pt-3">
                  <RadioLabel
                    name="package"
                    value="Yes"
                    lableClass="text-gray-810 text-sm tracking-tight"
                  />
                  <RadioLabel
                    name="package"
                    value="No"
                    lableClass="text-gray-810 text-sm tracking-tight"
                  />
                </div>
              </div>
            </div>
          </div>
        }
        actions={
          <div className="flex px-6 justify-end pb-5 pt-7 space-x-2 w-full">
            <Button value="Send" className={btnClass1} />
            <Button value="Cancel" className={btnClass2} />
          </div>
        }
        open={open}
      />
    </div>
  );
}
ProposelProject.defaultProps = {
  btnClass1: "bg-current text-white px-8 py-2 font-sans text-sm transform-none",
  btnClass2:
    "bg-white text-gray-300 font-sans px-6 py-2 transform-none text-sm border border-solid border-gray-300",
  IClass: "bg-gray-150 rounded",
  class2: "font-sans text-sm text-black-100 font-bold whitespace-nowrap",
  class3: "w-full ml-3 text-sm text-gray-900 py-0",
  class4: "font-sans text-gray-300 text-sm text-thin pb-2",
};
export default ProposelProject;
