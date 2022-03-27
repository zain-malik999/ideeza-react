import React from "react";
import { Label, Button } from "atoms";

function DragCard(props) {
  const {
    mainClass,
    card,
    src,
    imgClass,
    value1,
    class1,
    value2,
    class2,
    btnValue,
    btnClass,
  } = props;
  return (
    <div className={mainClass}>
      <div className={card}>
        <img src={src} className={imgClass} />
        <Label value={value1} classes={{ root: `${class1}` }} />
        <div className="flex items-center space-x-2">
          <hr className="" />
          <Label value={value2} classes={{ root: `${class2}` }} />
          <hr />
        </div>
        <Button value={btnValue} className={btnClass} />
      </div>
    </div>
  );
}
DragCard.defaultProps = {
  mainClass: "items-center justify-center flex w-full h-72 shadow rounded",
  card: "flex flex-col w-72 items-center",
  imgClass: "h-24 w-32",
  class1: "text-gray-600 text-md font-thin pt-5",
  class2: "text-gray-900",
  btnClass:
    "border border-solid mt-3 border-gray-325 bg-gray-375 w-full rounded-full",
};
export default DragCard;
