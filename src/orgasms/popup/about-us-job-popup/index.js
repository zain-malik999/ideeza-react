import React from "react";
import { Modal, Button, Label } from "atoms";
function AboutUsJobPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-0 p-6">
            <Label
              value="Web Designer"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="">
            <Label
              value={
                <>
                  {" "}
                  Available Position: <span className="text-current">
                    11
                  </span>{" "}
                </>
              }
              className="text-gray-300 tracking-tight font-sans underline text-md pb-2"
            />
            <Label
              value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet enim sequi voluptates ullam vel fugiat ab maxime magnam nostrum, reprehenderit beatae iusto iure explicabo inventore est magni veritatis facere?"
              className="text-gray-300 tracking-tight font-sans leading-6 text-md"
            />
          </div>
        }
        actions={
          <>
            <div className="w-full p-4">
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-gray-300 border border-gray-600 border-solid bg-white py-2 px-7 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
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
export default AboutUsJobPopup;
