import React from "react";
import { Modal, Select, Label, Input } from "atoms";
import { CheckboxFields } from "molecules";
import { FaPlus } from "react-icons/fa";
function AddNewTaskPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-4 p-6 md:px-12">
            <Label
              value="Add new task"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="space-y-3 md:px-6 pb-6">
            <Select
              placeholder="Domain"
              containerClass="w-full text-gray-900 text-sm border border-gray-160"
              inputClass="text-sm tracking-tight p-2 py-3"
              options={[{ value: "Some", name: "Some" }]}
            />
            <Select
              placeholder="Type"
              containerClass="w-full text-gray-900 text-sm border border-gray-160"
              inputClass="text-sm tracking-tight p-2 py-3"
              options={[{ value: "Questionary", name: "Questionary" }]}
            />
            <div className="rounded bg-gray-150 p-2">
              <Label
                value="Question Name"
                className="text-gray-300 text-base font-sans tracking-tight"
              />
              <Input
                placeholder="Type here...."
                name="text"
                multiline={true}
                rows={5}
                containerClass="w-full p-0"
                inputProps="text-gray-300 text-sm font-lato -my-2 -ml-2 p-1 rounded border border-solid border-gray-160"
              />
              <CheckboxFields
                size="small"
                color="gray-300"
                mainClass="-ml-2 items-center"
                labelClass={`text-sm font-light tracking-tight text-black-400 pl-1`}
                value={<>Add explanation</>}
              />
              <Input
                placeholder="Type here...."
                name="text"
                multiline={true}
                rows={5}
                containerClass="w-full p-0"
                inputProps="text-gray-300 text-sm font-lato -my-2 -ml-2 p-1 rounded border border-solid border-gray-160"
              />
              <Select
                placeholder="Answer type"
                containerClass="w-full bg-white text-gray-900 text-sm border border-gray-160"
                inputClass="text-sm tracking-tight p-2 py-3"
                options={[
                  { value: "Answer type", name: "Answer type" },
                  { value: "Text box", name: "Text box" },
                  { value: "Check box", name: "Check box" },
                  { value: "Upload", name: "Upload" },
                ]}
              />
              <div className="flex justify-end w-full">
                <FaPlus className="text-current ml-autp cursor-pointer my-2" />
              </div>
            </div>
          </div>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default AddNewTaskPopup;
