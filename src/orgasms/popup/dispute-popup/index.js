import React from "react";
import { Modal, Button } from "atoms";
import { DisputePopupHeader, DisputePopup2, DisputePopup1 } from "../..";
function DisputePopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <DisputePopupHeader value={<>1 / 2</>} />
          </>
        }
        content={
          <div className="-mx-2">
            <DisputePopup1 />
            <DisputePopup2 />
          </div>
        }
        actions={
          <div className="m-3 pt-4 w-full flex items-center border-t border-gray-100 mr-10 justify-between">
            <div className="flex items-center space-x-2">
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `border border-solid border-gray-810 text-gray-810 tracking-tight font-sans capitalize leading-7 py-1 w-24`,
                }}
              />
              <Button
                value="Submit"
                classes={{
                  root: `text-white bg-current border border-solid border-current tracking-tight font-sans capitalize leading-7 py-1 w-24`,
                }}
              />
            </div>
            <Button
              value="Next"
              classes={{
                root: `text-white bg-current border border-solid border-current tracking-tight font-sans capitalize leading-7 py-1 w-24`,
              }}
            />
          </div>
        }
        open={open}
      />
    </div>
  );
}

export default DisputePopup;
