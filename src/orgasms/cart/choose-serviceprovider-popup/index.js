import React from "react";
import { Modal, Button, Label } from "atoms";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function ChooseServiceproviderPopup(props) {
  const { open, toggleOpen } = props;
  return (
    <>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="flex justify-end">
            <Button
              value="x"
              classes={{
                root: `text-red-600 font-bold`,
              }}
            />
          </div>
        }
        content={
          <>
            <Label
              value="New Project"
              classes={{ root: `text-ideeza-100 font-semibold text-lg` }}
            />
            <div className="flex pt-6 pr-8 justify-between">
              <Label
                value="Category"
                classes={{ root: `font-semibold text-sm` }}
              />
              <Label
                value="Manufacturer"
                classes={{ root: `font-semibold text-sm pr-20` }}
              />
              <Label
                value="Price"
                classes={{ root: `font-semibold text-sm` }}
              />
            </div>
            <div className="flex pt-6 pr-8 justify-between">
              <Label value="Electronics" classes={{ root: `text-sm` }} />
              <Label value="Daniyal ar" classes={{ root: `text-sm` }} />
              <div className="flex">
                <FaPen className="text-ideeza-100" />
                <RiDeleteBin5Fill className="text-ideeza-100" />
              </div>
              <Label value="$0.00" classes={{ root: `text-sm` }} />
            </div>
          </>
        }
        actions={<></>}
        open={open}
      />
    </>
  );
}

export default ChooseServiceproviderPopup;
