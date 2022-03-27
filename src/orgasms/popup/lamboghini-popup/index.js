import React from "react";
import { Modal, Label, Button } from "atoms";

function LamboghiniPopup(props) {
  const { toggleOpen, open } = props;
  return (
    <div>
      <Modal
        width="xs"
        close={{ toggleOpen }}
        open={open}
        header={
          <div className="flex justify-between pl-5">
            <Label
              value="Lamboghini"
              classes={{
                root: `text-current font-black font-sans text-lg pt-4 pl-1`,
              }}
            />
            <Label
              value="x"
              classes={{
                root: `font-extrabold p-1 font-sans text-red-250 text-2xl pt-0 pr-2`,
              }}
              onClick={toggleOpen}
            />
          </div>
        }
        content={
          <div className="grid grid-cols-4 space-x-5">
            <div className="space-y-2">
              <Label
                value="Category"
                classes={{
                  root: `text-black-100 text-sm font-sans font-semibold`,
                }}
              />
              <Label
                value="Electronics"
                classes={{
                  root: `text-gray-825 text-sm font-sans font-normal`,
                }}
              />
              <Label
                value="Code"
                classes={{
                  root: `text-gray-825 text-sm font-sans font-normal`,
                }}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label
                value="Delivery"
                classes={{
                  root: `text-black-100 text-sm font-sans font-semibold`,
                }}
              />
              <div className="flex items-center justify-between pr-14">
                <Label
                  value="DHL, Fedex,"
                  classes={{
                    root: `text-gray-825 text-sm font-sans font-normal`,
                  }}
                />
                <div className="flex">
                  <img src="/assets/images/Path 1623.png" className="w-3 h-3" />
                  <img
                    src="/assets/images/trash.png"
                    className="w-2 h-3 ml-2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pr-14">
                <Label
                  value="UPS"
                  classes={{
                    root: `text-gray-825 text-sm font-sans font-normal`,
                  }}
                />
                <div className="flex">
                  <img src="/assets/images/Path 1623.png" className="w-3 h-3" />
                  <img
                    src="/assets/images/trash.png"
                    className="w-2 h-3 ml-2"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label
                value="Price"
                classes={{
                  root: `text-black-100 text-sm font-sans font-semibold`,
                }}
              />
              <Label
                value="$10,000"
                classes={{
                  root: `text-gray-825 text-sm font-sans font-normal`,
                }}
              />
              <Label
                value="$5,000"
                classes={{
                  root: `text-gray-825 text-sm font-sans font-normal`,
                }}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default LamboghiniPopup;
