import React from "react";
import { Modal, Button, Label } from "atoms";
import { TextField } from "molecules";
function ProjectCongratulationsPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={<></>}
        content={
          <div className="md:px-6 pt-7">
            <Label
              value="Congratulations, you have finished the Task!"
              className="text-gray-300 text-lg font-sans tracking-tight"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 rounded-none text-xs tracking-tight font-sans border border-gray-125"
              labelClasses="text-current text-md font-sans tracking-tight pb-2"
              labelvalue="Tell us about your opinion about this task"
              type="text"
              placeholder="Tell us about your opinion about this task"
              multiline={true}
              rows="8"
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-end w-full p-4 md:px-10 pb-10">
              <Button
                onClick={toggleOpen}
                value="Complete Task"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded-none`,
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
export default ProjectCongratulationsPopup;
