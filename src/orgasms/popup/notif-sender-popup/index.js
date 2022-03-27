import React from "react";
import { Modal, Button, Label, Input } from "atoms";
import { SelectField } from "molecules";
function NotifSenderPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={
          <>
            <Label
              value="Notification Sender"
              className="text-gray-300 pt-6 px-6 text-lg font-semibold font-sans tracking-tight"
            />
          </>
        }
        content={
          <div className="md:px-10 md:pl-14">
            <SelectField
              mainClasses="grid grid-cols-2 md:flex items-center pb-2 space-x-2 md:w-2/5 ml-auto"
              className="w-full text-sm text-gray-900 px-2 py-1"
              labelClasses="text-gray-300 text-md font-sans tracking-tight"
              containerClass="border rounded border-solid border-gray-850 border-opacity-40"
              value="Type"
              placeholder="My Own"
            />
            <Input
              multiline={true}
              rows="6"
              placeholder="Type your message..."
              InputProps="p-0"
              className={{
                root: `p-0 tracking-tight font-sans border border-solid bg-gray-100`,
              }}
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-end space-x-4 w-full p-4 pb-0 md:px-8">
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-gray-300 bg-white border border-solid py-2 px-6 w-26 leading-4 text-sm tracking-tight font-sans capitalize rounded`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Send"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 w-26 leading-4 text-sm tracking-tight font-sans capitalize rounded`,
                }}
              />
            </div>
          </>
        }
        open={open}
      />
    </div>
  );
}
export default NotifSenderPopup;
