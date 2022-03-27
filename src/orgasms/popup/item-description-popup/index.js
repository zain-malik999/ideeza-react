import React from "react";
import { Modal, Label } from "atoms";
import { TwoLabels, Icon_Label } from "molecules";
import { FaEdit } from "react-icons/fa";

function ItemDescriptionPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={<></>}
        content={
          <div className="p-4 flex md:flex-row flex-col md:space-x-4">
            <div className="flex-col md:w-2/5">
              <div className="w-full h-44">
                <img
                  src="/assets/images/item.png"
                  alt="item"
                  className="h-full w-full"
                />
              </div>
              <TwoLabels
                mainClass="mt-3"
                value="Flame reducers for military"
                value2="Note"
                labelClass="text-black-100 text-md tracking-tight font-sans"
                labelClass2="text-gray-900 text-sm tracking-tight font-sans"
              />
              <TwoLabels
                mainClass="flex flex-col mt-3"
                value="Process"
                value2="3D modeling"
                labelClass="text-gray-900 text-sm tracking-tight font-sans"
                labelClass2="text-black-100 text-sm tracking-tight font-sans"
              />
              <TwoLabels
                mainClass="flex flex-col mt-3"
                value="Sub-process"
                value2="Binder jetting - BJ"
                labelClass="text-gray-900 text-sm tracking-tight font-sans"
                labelClass2="text-black-100 text-sm tracking-tight font-sans"
              />
              <TwoLabels
                mainClass="flex flex-col mt-3"
                value="Producer"
                value2="Google Inc."
                labelClass="text-gray-900 text-sm tracking-tight font-sans"
                labelClass2="text-black-100 text-sm tracking-tight font-sans"
              />
            </div>
            <div className="flex-col md:w-3/5 mt-7">
              <Icon_Label
                mainClass="flex items-center flex-row-reverse justify-end"
                labelValue="Description:"
                lableClass={{
                  root: `tracking-tight font-sans text-current font-semibold text-base`,
                }}
                iconContanerClass=""
                iconComponent={<FaEdit className="text-current text-xl" />}
              />
              <Label
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                className="mt-2 text-gray-900 tracking-tight font-sans text-sm"
              />
              <div className="flex space-x-7">
                <TwoLabels
                  mainClass="flex flex-col mt-3"
                  value="Year produced"
                  value2="2020"
                  labelClass="text-gray-900 text-sm tracking-tight font-sans"
                  labelClass2="text-black-100 text-sm tracking-tight font-sans"
                />
                <TwoLabels
                  mainClass="flex flex-col mt-3"
                  value="Accuracy"
                  value2="0.2mm"
                  labelClass="text-gray-900 text-sm tracking-tight font-sans"
                  labelClass2="text-black-100 text-sm tracking-tight font-sans"
                />
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

export default ItemDescriptionPopup;
