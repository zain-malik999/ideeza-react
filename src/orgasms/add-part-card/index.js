import React, { useState } from "react";
import { Label, Button } from "atoms";

function AddPartCard(props) {
  const {
    value,
    src,
    value2,
    middleValue,
    btnValue,
    createModal,
    mainSection,
  } = props;
  const [show, setShow] = useState(false);
  const toggeShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full space-y-2">
      <Label
        value={value}
        className="text-current font-semibold font-sans text-lg tracking-tight border-b border-gray-750 pb-2"
      />
      {show === true ? (
        <div
          className={`bg-white rounded-lg shadow-full md:px-20 px-14 h-72 flex flex-col items-center justify-between space-y-2 py-10 ${createModal}`}
        >
          <Label
            value="Choose the type of Model:"
            className="text-gray-600 text-center font-sans text-md tracking-tight pt-2"
          />
          <Button
            value="SMT"
            className="bg-current w-full transform-none text-white text-sm font-sans tracking-tight"
          />
          <Label
            value={
              <>
                <hr className="w-full" />
                <span className="text-center px-2 text-md tracking-tight font-sans">
                  or
                </span>
                <hr className="w-full" />
              </>
            }
            className="space-x-2 w-full whitespace-nowrap text-gray-900 caption flex items-center"
          />
          <Button
            value="Through Hole"
            className="bg-current w-full transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
      ) : (
        <div
          className={`bg-white rounded-lg shadow-full p-5 h-72 flex flex-col items-center justify-center space-y-2 py-10 ${mainSection}`}
        >
          <img src={src} alt="" className="w-22" />
          <Label
            value={value2}
            className="text-gray-600 text-center font-sans text-md tracking-tight pt-2"
          />
          <Label
            value={
              <>
                <hr className="w-full" />
                <span className="text-center px-2 text-md tracking-tight font-sans">
                  {middleValue}
                </span>
                <hr className="w-full" />
              </>
            }
            className="space-x-2 w-3/5 whitespace-nowrap text-gray-900 caption flex items-center"
          />
          <Button
            value={btnValue}
            onClick={toggeShow}
            className="bg-gray-375 border border-solid border-gray-325 w-60 leading-tight transform-none rounded-full text-gray-600 text-sm font-sans tracking-tight"
          />
        </div>
      )}
    </div>
  );
}
AddPartCard.defaultProps = {
  value: "Upload 2D & 3D Files",
  src: "assets/images/cloud-computing.png",
  value2: "Drag and drop Files Here to Upload",
  middleValue: "or",
  btnValue: "Select Files",
};
export default AddPartCard;
