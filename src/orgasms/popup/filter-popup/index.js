import React from "react";
import { Modal, Button, Label, Input } from "atoms";
import { CheckboxLabel, SelectField } from "molecules";
import { BiDollar } from "react-icons/bi";
function FilterPopup(props) {
  const { open, toggleOpen } = props;
  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <Label
            value="Filter by"
            classes={{
              root: `text-current font-extrabold font-sans pt-4 p-7 text-lg`,
            }}
          />
        }
        content={
          <div className="pl-1">
            <CheckboxLabel
              value="Free shipping"
              id="shipping"
              labelClass="text-gray-300 text-md font-sans pl-2"
              checkboxClass="w-6 h-6 rounded-sm"
            />
            <Label
              value="Price"
              classes={{
                root: `text-gray-300 text-md font-sans tracking-tight pb-1 pt-3`,
              }}
            />
            <div className="space-x-3 grid grid-cols-2 pr-3">
              <Input
                isIcon
                position="end"
                placeholder="min"
                className={{
                  root: `border pl-0 py-1 pr-2 border-solid border-gray-250 text-gray-300`,
                }}
              >
                <BiDollar className="text-gray-650 text-sm" />
              </Input>
              <Input
                isIcon
                position="end"
                placeholder="max"
                className={{
                  root: `border pl-0 py-1 pr-2 border-solid border-gray-250 text-gray-300`,
                }}
              >
                <BiDollar className="text-gray-650 text-sm" />
              </Input>
            </div>
            <SelectField
              value="Delivery Time"
              labelClasses="text-gray-300 text-md font-sans tracking-tight pb-1 pt-3"
              // options=""
              mainClasses="flex flex-col"
              className="bg-white text-sm pl-2 py-3 pr-4 border border-gray-250 border-solid"
              placeholder="1 day"
            />
          </div>
        }
        actions={
          <div className="pl-5 pb-3 pt-5">
            <Button
              className="bg-current text-white px-7 transform-none text-sm py-2"
              value="Save"
              onClick={toggleOpen}
            />
          </div>
        }
        open={open}
      />
    </div>
  );
}
export default FilterPopup;
