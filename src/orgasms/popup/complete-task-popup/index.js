import React, { useState } from "react";
import { Modal, Button, Label } from "atoms";
import { UploadButton, TwoLabels } from "molecules";
import { GrAttachment } from "react-icons/gr";
function CompleteTaskPopup(props) {
  const { open, toggleOpen } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div>
      <Modal
        width="md"
        close={toggleOpen}
        header={<></>}
        content={
          <div className="md:px-6 pt-7">
            <div className="border-b border-current pb-3 mb-5">
              <div className="md:flex items-center justify-between">
                <Label
                  value="Patent questionnaire: User fill out"
                  className="text-current font-bold text-2xl font-sans tracking-tight"
                />
                <div className="flex justify-between items-start">
                  <TwoLabels
                    mainClass="flex items-center space-x-2"
                    value="Task Duration:"
                    value2="29 Sep -16 Oct"
                    labelClass="text-black-100 text-lg tracking-tight font-sans"
                    labelClass2="text-current text-lg tracking-tight font-sans px-2"
                  />
                  <img
                    src="/assets/images/calendar-black.png"
                    className="w-6 h-6"
                    alt="c"
                  />
                </div>
              </div>
              <TwoLabels
                mainClass="flex items-center space-x-2"
                value="Project:"
                value2="Iron Making"
                labelClass="text-black-100 text-base tracking-tight font-sans"
                labelClass2="text-black-100 text-base tracking-tight font-sans"
              />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="md:col-span-2 md:pr-16">
                <Label
                  value="Here is Task Description"
                  className="text-black-500 text-lg tracking-wide font-semibold font-sans pb-2"
                />
                <Label
                  className="text-gray-770 text-base font-sans pb-2 max-h-42 leading-7 overflow-y-auto"
                  value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                />
              </div>
              <div className="md:col-span-1 pt-2 md:pt-0">
                <Label
                  value="Attachments"
                  className="text-black-500 text-lg tracking-wide font-semibold font-sans"
                />
                <Label
                  value="3 Pics attached"
                  classes={{
                    root: "text-sm tracking-tight text-gray-300 font-sans",
                  }}
                />
                <div className="grid gap-4 grid-cols-3 pt-1">
                  <img
                    src="/assets/images/car.png"
                    className="lg:h-20 md:h-16 w-full"
                  />
                  <img
                    src="/assets/images/car.png"
                    className="lg:h-20 md:h-16 w-full"
                  />
                  <img
                    src="/assets/images/car.png"
                    className="lg:h-20 md:h-16 w-full"
                  />
                </div>
                <TwoLabels
                  mainClass="flex items-center space-x-1 py-2"
                  value="Link attached :"
                  value2="https://www.youtube.com"
                  labelClass="text-black-100 text-sm tracking-tight font-sans"
                  labelClass2="text-purple-400 text-sm tracking-tight font-sans"
                />
                <UploadButton
                  mainClass=""
                  labelClass="text-current text-md font-sans tracking-tight"
                  btnClass="flex items-center"
                  fileClass="hidden"
                  value="Add Attachment +"
                  icon={
                    <GrAttachment className="text-ideeza-100 mr-1 text-xs" />
                  }
                />
              </div>
            </div>
          </div>
        }
        actions={
          <>
            <div className="md:flex justify-between items-end w-full md:space-x-2 space-y-2 md:space-y-0 p-4 md:p-10 md:pb-7">
              <div className="">
                <Button
                  onClick={toggleOpen}
                  value="Open 3D"
                  classes={{
                    root: `text-white bg-ideeza-100 py-2 px-8 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
                  }}
                />
                <TwoLabels
                  mainClass="flex items-center space-x-1 pt-2"
                  value="Shipping address:"
                  value2="India, Lorem Ipsum is simply dummy text of the printing and 23"
                  labelClass="text-black-100 text-base tracking-tight font-sans"
                  labelClass2="text-black-100 text-base tracking-tight font-sans"
                />
              </div>
              <Button
                onClick={toggleOpen}
                value="Complete Tasks"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-5 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
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
export default CompleteTaskPopup;
