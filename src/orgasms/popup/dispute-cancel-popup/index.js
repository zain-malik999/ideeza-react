import React from "react";
import { Modal, Label, Button } from "atoms";

function DisputeCancelPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={<></>}
        content={
          <div className="p-4 space-y-6">
            <Label
              value="Cancel dispute"
              classes={{ root: `font-sans text-xl` }}
            />
            <Label
              value="Are you sure you want to cancel dispute?"
              classes={{ root: `text-md` }}
            />
            <div className="flex items-center space-x-3">
              <Button
                value="Cancel"
                classes={{
                  root: `border-2 border-solid border-gray-400 text-gray-830 p-2 tracking-tight font-bold capitalize w-3/12`,
                }}
              />
              <Button
                value="Yes"
                classes={{
                  root: `text-white bg-ideeza-100 border border-solid border-ideeza-100 tracking-tight font-bold capitalize p-2 w-3/12`,
                }}
              />
            </div>
          </div>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default DisputeCancelPopup;
