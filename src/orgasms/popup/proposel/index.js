import React from "react";
import { Modal, Label, Button } from "atoms";

function Proposel(props) {
  const {
    open,
    toggleOpen,
    mainClass,
    title,
    title1,
    class1,
    title2,
    class2,
    inner1,
    inner2,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    labelsClass,
    btn1,
    btn2,
    btnClass1,
    btnClass2,
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
                root: `text-ideeza-100 tracking-tight font-sans text-xl font-bold px-12 pt-10`,
              }}
            />
          </div>
        }
        content={
          <div className="px-6 pt-8 pb-10">
            <Label value={title1} classes={{ root: `${class1}` }} />
            <Label value={title2} classes={{ root: `${class2}` }} />
            <Label
              value={
                <>
                  <span className={inner1}>{value1}</span>
                  <span className={inner2}>{value2}</span>
                </>
              }
              classes={{ root: `${labelsClass} mt-2` }}
            />
            <Label
              value={
                <>
                  <span className={inner1}>{value3}</span>
                  <span className={inner2}>{value4}</span>
                </>
              }
              classes={{ root: `${labelsClass}` }}
            />
            <Label
              value={
                <>
                  <span className={inner1}>{value5}</span>
                  <span className={inner2}>{value6}</span>
                </>
              }
              classes={{ root: `${labelsClass}` }}
            />
            <Label
              value={
                <>
                  <span className={inner1}>{value7}</span>
                  <span className={inner2}>{value8}</span>
                </>
              }
              classes={{ root: `${labelsClass}` }}
            />
          </div>
        }
        actions={
          <div className="flex px-10 pb-10 space-x-2">
            <Button value={btn1} className={btnClass1} />
            <Button value={btn2} className={btnClass2} />
          </div>
        }
        open={open}
      />
    </div>
  );
}
Proposel.defaultProps = {
  mainClass: "",
  class1: "font-sans text-md font-medium text-black-100 ",
  class2:
    "bg-gray-900 py-1 px-2 font-sans text-gray-600 rounded text-sm -ml-2 mt-2",
  labelsClass: "grid grid-cols-3 pt-1 text-sm",
  inner1: "text-black-100 text-xs font-sans",
  inner2: "text-gray-600 text-xs font-sans",
  btnClass1: "bg-current text-white px-3 py-2 font-sans text-sm transform-none",
  btnClass2:
    "bg-white text-gray-300 font-sans px-6 py-2 transform-none text-sm border border-solid border-gray-300",
};
export default Proposel;
