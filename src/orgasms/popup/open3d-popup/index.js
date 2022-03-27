import React from "react";
import { Modal, Button, Label } from "atoms";
import { TwoLabels } from "molecules";
function Open3dPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="md"
        close={toggleOpen}
        header={
          <>
            <div className="border-b border-current md:px-10 px-6 pt-8 pb-3 mb-3">
              <Label
                value="Trademark questionnaire: User fill out"
                className="text-current text-xl font-semibold font-sans tracking-tight"
              />
              <div className="md:flex justify-between">
                <TwoLabels
                  mainClass="flex items-center space-x-2 w-32"
                  value="Project:"
                  value2="Iron Making"
                  labelClass="text-black-100 text-base tracking-tight font-sans"
                  labelClass2="text-black-100 text-sm tracking-tight font-sans"
                />
                <div className="flex justify-between items-end">
                  <TwoLabels
                    mainClass="flex items-center space-x-2"
                    value="Task Duration:"
                    value2="29 Sep -16 Oct"
                    labelClass="text-black-100 text-base tracking-tight font-sans"
                    labelClass2="text-current text-base tracking-tight font-sans pl-1"
                  />
                  <img
                    src="/assets/images/calendar-black.png"
                    className="w-5 h-5 ml-3"
                    alt="c"
                  />
                </div>
              </div>
            </div>
          </>
        }
        content={
          <div className="md:px-4">
            <img
              src="/assets/images/Layer5.png"
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-between w-full p-4 md:px-8">
              <Button
                onClick={toggleOpen}
                value="Close 3D"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Complete Task"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
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
export default Open3dPopup;
