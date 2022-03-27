import React from "react";
import { Modal, Label, Button } from "atoms";
import { CheckboxFields, Icon_Label, TextField } from "molecules";

function OfferProject(props) {
  const {
    open,
    toggleOpen,
    mainClass,
    title,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    inner1,
    inner2,
    inner3,
    class1,
    btn1,
    btn2,
    btnClass1,
    btnClass2,
    icon,
    checkValue,
    checkClass,
  } = props;
  return (
    <div className={mainClass}>
      <Modal
        width="sm"
        close={toggleOpen}
        header={
          <div>
            <Label
              value="Offer for project Toy Car"
              classes={{
                root: `text-gray-300 tracking-tight font-sans text-xl font-bold px-8 pt-6`,
              }}
            />
          </div>
        }
        content={
          <div className="px-2 pt-2 pb-2">
            <div className="flex justify-between">
              <div>
                <Label
                  value={
                    <>
                      <span className={inner1}>Project Duration:</span>
                      <span className={inner2}>29 Sep -16 Oct</span>
                    </>
                  }
                  classes={{
                    root: `mt-2 flex items-end space-x-1 text-md tracking-tight`,
                  }}
                />
                <TextField
                  labelvalue="Cost:"
                  labelClasses="font-sans text-sm text-black-100 whitespace-nowrap"
                  inputClasses="bg-gray-150 rounded text-current w-16"
                  mainClass="flex items-center space-x-3 my-1"
                />
                <Label
                  value={
                    <>
                      <span className={`${inner1} font-bold text-md`}>
                        Weekly Payment
                      </span>
                      <span className={inner3}>Yes</span>
                    </>
                  }
                  classes={{ root: `mt-2 flex flex-col` }}
                />
                <Label
                  value={
                    <>
                      <span className={`${inner1} font-bold text-md`}>
                        Hourly Rate
                      </span>
                      <span className={inner3}>33.00 /hr</span>
                    </>
                  }
                  classes={{ root: `mt-2 flex flex-col` }}
                />
                <Label
                  value={
                    <>
                      <span className={`${inner1} font-bold text-md`}>
                        Weekly Limit
                      </span>
                      <div className="flex">
                        <span className={inner3}>
                          40 hrs/week
                          <span className="pl-10 text-gray-300 font-sans text-sm">
                            = $12200. max/week
                          </span>
                        </span>
                      </div>
                    </>
                  }
                  classes={{ root: `mt-2 flex flex-col` }}
                />
              </div>
              <div>
                <Icon_Label
                  labelValue="Fixed-Price"
                  lableClass={{ root: `${class1} font-bold` }}
                  iconComponent={
                    <img src="/assets/images/Component 3 – 4.png" width="7px" />
                  }
                  tooltipProps={{ open: false }}
                  iconContanerClass="px-1"
                  mainClass="flex -mt-5 items-center"
                />
                <img
                  src="/assets/images/calendar-black.png"
                  className="w-7 mt-3"
                  alt=""
                />
              </div>
            </div>
            <CheckboxFields
              mainClass="p-3 md:px-4 items-start pt-5"
              value={
                <>
                  Yes, I understand and agree to the{" "}
                  <span className="text-current font-bold">
                    ideeza Terms of Service
                  </span>
                  , including{" "}
                  <span className="text-current font-bold">User Agreement</span>{" "}
                  and{" "}
                  <span className="text-current font-bold">
                    privacy Policy.
                  </span>
                </>
              }
              labelClass={`${checkClass}`}
              mainClass="flex items-start mt-5"
              checkboxClass="-mt-1.5"
            />
          </div>
        }
        actions={
          <div className="flex px-7 pb-8 space-x-2">
            <Button value="Except Offer" className={btnClass1} />
            <Button value="Cancel" className={btnClass2} />
          </div>
        }
        open={open}
      />
    </div>
  );
}
OfferProject.defaultProps = {
  mainClass: "",
  inner1: "text-black-100 text-md font-sans",
  inner2: "text-current font-sans text-sm",
  inner3: "text-gray-900 font-sans pt-1 text-sm ",
  btnClass1: "bg-current text-white px-6 py-2 font-sans text-sm transform-none",
  btnClass2:
    "bg-white text-gray-300 font-sans px-6 py-2 transform-none text-sm border border-solid border-gray-300",
  class1: "text-current font-sans text-sm",
  checkClass: "text-md tracking-tight leading-6 font-sans text-gray-890",
};
export default OfferProject;
