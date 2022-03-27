import React from "react";
import { Modal, Label, Button } from "atoms";
import { CheckboxFields, Icon_Label } from "molecules";

function MakeOffer(props) {
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
    inner1,
    inner2,
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
        width="xs"
        close={toggleOpen}
        header={
          <div>
            <Label
              value={title}
              classes={{
                root: `text-gray-300 tracking-tight font-sans text-xl font-bold px-12 pt-10`,
              }}
            />
          </div>
        }
        content={
          <div className="px-6 pt-2 pb-6">
            <div className="flex justify-between">
              <div>
                <Label
                  value={
                    <>
                      <span className={inner1}>{value1}</span>
                      <span className={inner2}>{value2}</span>
                    </>
                  }
                  classes={{ root: `mt-2 flex items-end space-x-1` }}
                />
                <Label
                  value={
                    <>
                      <span className={inner1}>{value3}</span>
                      <span className={`${inner2} bg-gray-150 px-3 ml-4 py-2`}>
                        {value4}
                      </span>
                    </>
                  }
                  classes={{ root: `mt-2 flex items-center` }}
                />
              </div>
              <div>
                <Icon_Label
                  labelValue={value5}
                  lableClass={{ root: `${class1}` }}
                  iconComponent={
                    <img src="/assets/images/Component 3 – 4.png" width="7px" />
                  }
                  tooltipProps={{ open: false }}
                  iconContanerClass="px-1"
                  mainClass="flex -mt-5 items-center"
                />
                {icon}
              </div>
            </div>
            <CheckboxFields
              mainClass="p-3 md:px-4 items-center"
              value={checkValue}
              labelClass={`${checkClass}`}
              mainClass="flex items-start mt-5"
              checkboxClass="-mt-2 -ml-2"
            />
          </div>
        }
        actions={
          <div className="flex px-10 pb-8 space-x-2">
            <Button value={btn1} className={btnClass1} />
            <Button value={btn2} className={btnClass2} />
          </div>
        }
        open={open}
      />
    </div>
  );
}
MakeOffer.defaultProps = {
  mainClass: "",
  inner1: "text-black-100 text-sm font-sans",
  inner2: "text-current text-sm font-sans",
  btnClass1: "bg-current text-white px-3 py-2 font-sans text-sm transform-none",
  btnClass2:
    "bg-white text-gray-300 font-sans px-6 py-2 transform-none text-sm border border-solid border-gray-300",
  class1: "text-current font-sans text-sm",
  checkClass: "text-xs font-sans text-gray-890",
};
export default MakeOffer;
