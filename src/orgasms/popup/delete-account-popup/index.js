import React from "react";
import { Modal, Label, Button } from "atoms";

function DeleteAccountPopup(props, onDelete) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={<></>}
        content={
          <>
            <Label
              value="Are sure you want to delete your account ?"
              classes={{
                root: `text-base text-gray-300 font-sans tracking-tight`,
              }}
            />
            <Label
              value="It will be deleted permanently"
              classes={{ root: `text-md text-gray-780 font-sans pt-1 px-4` }}
            />
            <Label
              value="Your account deleted permanently in the next 24 hours "
              classes={{
                root: `text-base text-gray-300 font-sans tracking-tight`,
              }}
            />
            <Label
              value="For any issue message to our customer support"
              classes={{
                root: `text-base text-gray-300 font-sans tracking-tight`,
              }}
            />
          </>
        }
        actions={
          <>
            <div className="flex w-full items-center justify-end space-x-3 p-1 mt-12">
              <Button
                value="Delete"
                classes={{
                  root: `text-white bg-red-200 border border-solid border-red-200 tracking-tight font-sans capitalize p-2 w-28`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `border border-solid border-gray-600 text-gray-300 p-2 tracking-tight font-sans capitalize w-28`,
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
export default DeleteAccountPopup;
