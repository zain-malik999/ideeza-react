import React from "react";
import { Modal, Button, Label } from "atoms";
function CreateProjectOptionPopup(props) {
  const { open, toggleOpen } = props;
  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Label
              value="Please choose one the option below:"
              className="text-center mt-2"
            />
          </>
        }
        content={
          <>
            <div className="flex w-full justify-evenly space-x-2 mt-5 border border-ideeza-100 p-2 justify-items-center items-center justify-center">
              <Button
                onClick={toggleOpen}
                value="By Myself"
                classes={{
                  root: `text-white bg-ideeza-100 p-2 tracking-tight font-sans capitalize w-2/4`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="By IDEEZA Algoritham"
                classes={{
                  root: `text-white bg-ideeza-100 p-2 tracking-tight font-sans capitalize w-2/4`,
                }}
              />
            </div>
          </>
        }
        actions={<> </>}
        open={open}
      />
    </div>
  );
}

export default CreateProjectOptionPopup;
