import React, { useState } from "react";
import { Modal, Button, Label, Popover } from "atoms";
import {
  TextField,
  Icon_Label,
  SelectField,
  SearchInput,
  UploadButton,
} from "molecules";
import { GrAttachment } from "react-icons/gr";
function AddTaskPopup(props) {
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
            <Label
              value="Add Task Name..."
              className="text-current font-bold text-2xl font-sans tracking-tight border-b border-current pb-8 mb-5"
            />
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="md:col-span-2 md:pr-38">
                <TextField
                  mainClass="flex flex-col"
                  inputClasses="w-full bg-gray-950 p-0 text-xs tracking-tight font-sans rounded-none"
                  labelClasses="text-black-500 text-base font-semibold font-sans pb-2"
                  labelvalue="Task Description"
                  type="text"
                  placeholder="Add Task  Description Here ….."
                  multiline={true}
                  rows="6"
                />
              </div>
              <div className="col-span-1 space-y-2">
                <Icon_Label
                  mainClass="flex items-center flex-row-reverse justify-end"
                  tooltipProps={{ open: false }}
                  labelValue="Project Duration"
                  iconContanerClass="text-lg w-6"
                  lableClass={{
                    root: `text-black-100 text-base font-sans mr-3`,
                  }}
                  iconComponent={
                    <img
                      src="/assets/images/calendar-black.png"
                      className="w-5 h-5"
                      alt="c"
                    />
                  }
                />
                <SelectField
                  mainClasses="grid grid-cols-2 items-center"
                  className="w-full text-sm text-gray-600 bg-gray-950 placeholder-gray-900 px-3 py-2 rounded"
                  labelClasses="text-black-100 text-base font-sans"
                  value="Mark Status"
                  placeholder="Waiting"
                />
                <SelectField
                  mainClasses="grid grid-cols-2 items-center"
                  className="w-full text-sm text-gray-600 bg-gray-950 placeholder-gray-900 px-3 py-2 rounded"
                  labelClasses="text-black-100 text-base font-sans"
                  value="Category"
                  placeholder="Electronics"
                />
                <div className="flex items-center space-x-2">
                  <Label
                    value="Assigned members:"
                    className="text-black-100 text-base font-sans"
                  />
                  <Button
                    onClick={handleClick}
                    id={id}
                    value="Add +"
                    classes={{
                      root: `text-white bg-ideeza-100 py-1 px-3 leading-4 text-sm tracking-tight font-sans capitalize rounded-sm`,
                    }}
                  />
                  <Popover
                    open={openPopover}
                    handleClick={handleClick}
                    onClose={handleClose}
                    id={id}
                    anchorEl={anchorEl}
                  >
                    <div className="py-3 px-2 w-64">
                      <div className="w-3/4 mx-auto pr-4 pb-1">
                        <SearchInput
                          placeholder="Search Member..."
                          position="start"
                          className="border border-solid bg-gray-1000"
                          inputClass="text-2xs py-1"
                        />
                      </div>
                      <div className="max-h-42 overflow-y-auto pr-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <Icon_Label
                            mainClass="flex items-center"
                            tooltipProps={{ open: false }}
                            labelValue="She Someone, Manager"
                            iconContanerClass="text-lg w-7"
                            lableClass={{
                              root: `text-black-100 text-sm tracking-tight font-sans ml-1`,
                            }}
                            iconComponent={
                              <img
                                src="/assets/images/Ellipse.png"
                                className="w-7 h-7"
                                alt="c"
                              />
                            }
                          />
                          <Label
                            value="+"
                            className="text-white bg-ideeza-100 py-1 px-2 leading-4 text-sm cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </Popover>
                </div>
                <Label
                  value="Attachments"
                  className="text-black-500 text-lg font-semibold font-sans"
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
            <div className="flex justify-end w-full space-x-2 p-4 md:p-10 md:pb-7">
              <Button
                onClick={toggleOpen}
                value="Complete"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-5 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
                }}
              />
              <Button
                onClick={toggleOpen}
                variants="outlined"
                value="Cancel"
                classes={{
                  root: `text-gray-300 bg-white border border-gray-600 border-solid py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
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
export default AddTaskPopup;
