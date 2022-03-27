import React from "react";
import { Modal, Button } from "atoms";
import { SecurityQuestion } from "../..";
import { Icon_Label } from "molecules";
import { IoClose } from "react-icons/io5";
function SecurityQuestionPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="flex w-full items-center justify-between flex-row-reverse px-6 pt-3 pb-7"
              lableClass={{
                root: `text-xl text-current font-semibold tracking-tight font-sans`,
              }}
              labelValue="Security Question"
              iconContanerClass=""
              iconComponent={
                <IoClose
                  className="text-red-300 text-2xl cursor-pointer"
                  onClick={toggleOpen}
                />
              }
              tooltipProps={{ open: false }}
            />
          </>
        }
        content={
          <>
            <SecurityQuestion />
          </>
        }
        actions={
          <>
            {" "}
            <div className="flex space-x-3 p-5 mt-5">
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-current border border-solid border-current tracking-tight font-sans capitalize py-1 leading-6 w-20`,
                }}
              />
              <Button
                value="Save"
                classes={{
                  root: `text-white bg-ideeza-100 py-1 leading-6 w-20 tracking-tight font-sans capitalize`,
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

export default SecurityQuestionPopup;
